<template>
  <div class="charge_record">
    <div class="header"><span class="mbx">用户中心 / 额度转换 / 转换记录</span></div>
    <div class="cont">
      <div class="clearfix">
        <!-- <div class="tab_type clearfix">
          <div class="item"    :style="{borderRight:idx!=types.length-1?'3px solid #B62929':'none'}" :key="idx" v-for="it,idx in types" @click="(types.forEach(v=>v.cur=false),it.cur=true,curType=it,typeClick())" :class="{cur:it.cur}">{{it.tit}}</div>
        </div> -->
        <div class="search_box" style="float:left;">
          时间 ：
          <!--<select class="short" v-model="curDate" >
            <option :value="it.value" v-for="it,idx in dates" :key="idx">{{it.tit}}</option>
          </select>-->
          <el-select v-model="curDate" clearable size="small">
            <el-option
              v-for="it,idx in dates"
              :value="it.value"
              :key="idx"
              :label="it.tit"
            >
            </el-option>
          </el-select>
          <!--&emsp;&emsp;&emsp;订单号
          : <input class="short" type="text"/>-->
          <div  class="btn_search" @click="search">查询</div>
        </div>
      </div>
      <table v-if="curType&&curType.value!=3" class="tb" cellpadding="0" cellspacing="0">
        <tr>
          <th>订单号</th>
          <th>真人平台</th>
          <th>操作类型</th>
          <th>操作金额</th>
          <th>状态</th>
          <th>操作时间</th>
        </tr>
        <tr v-for="it,idx in records" :key="idx">
          <td>{{it.order_num}}</td>
          <td>{{it.platform}}</td>
          <td>{{it.log_type}}</td>
          <td>{{it.order_money}}</td>
          <td>{{it.status}}</td>
          <td>{{it.add_time}}</td>
        </tr>
      </table>
      <!-- <table v-if="curType&&curType.value==3" class="tb" cellpadding="0" cellspacing="0">
        <tr>
          <th>订单号</th>
          <th>真人平台</th>
          <th>操作类型</th>
          <th>操作金额</th>
          <th>状态</th>
          <th>操作时间</th>
        </tr>
        <tr v-for="it,idx in records" :key="idx">
          <td>{{it.order_num}}</td>
          <td>{{it.money }}</td>
          <td>{{it.fs}}</td>
          <td>{{it.addtime}}</td>
          <td>{{it.pay_name}}</td>
          <td>{{it.add_time}}</td>
        </tr>
      </table> -->
      <div style="text-align: center;padding:10px;" v-show="records.length<1&&!is_loading_records">暂无数据</div>
      <div class="pager" >
        <div class="item" v-show="pages.length>1"  @click="pageClick(it.page)" v-for="it,idx in pages" :key="idx" :class="{cur:it.cur,sl:it.page==-1}">{{it.txt}}</div>
        <div style="display: inline-block;color:#B62929;" v-show="is_loading_records">加载中...</div>
        <div style="display: inline-block;color:#B62929;opacity:0" v-show="!is_loading_records">加载中...</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from "vuex"
  import alert from "@/components/base/alert"
  export default {
    name: "charge_record",
    data(){
      return {
        pageSize:5,
        pages:[],
        curType:null,
        curDate:"td",
        types:[{
          tit:"转出记录",
          value:1,
          cur:true
        },{
          tit:"转入记录",
          value:2,
          cur:false
        }],
        dates:[{
          tit:"今天",
          value:"td",
          cur:true
        },{
          tit:"昨天",
          value:"ytd",
          cur:false
        },{
          tit:"近七天",
          value:"wk",
          cur:false
        }],
        records:[],
        is_loading_records:false
      }
    },
    mounted(){
      this.curType=this.types[0];
      this.loadRecords(1);
    },
    methods:{
      ...mapMutations(["ROOTBOX"]),
      alert(tit,msg,fn,msgStyle){
        let _this=this;
        this.ROOTBOX({
          open:true,
          compt:alert,
          props:{
            tit:tit,
            msg:msg,
            msgstyle:msgStyle
          },
          handles:{
            confirm(){
              if(fn)fn();
              _this.ROOTBOX({
                open:false
              })
            },
            close(){
              _this.ROOTBOX({
                open:false
              });
            }
          }
        });
      },
      setPager(page,pageCount){
        this.pages=[];
        if(!pageCount||pageCount<1)return;
        if(page-1>0){
          this.pages.push({
            page:1,
            txt:"首页"
          });
          this.pages.push({
            page:page-1,
            txt:"上一页"
          });
        }
        let begin=1,end=pageCount;
        if(page-3>1){
          begin=page-3;
          this.pages.push({
            page:-1,
            txt:"..."
          });
        }
        if(page+3<=pageCount){
          end=page+3;
        }
        for(let i=begin;i<=end;i++){
          this.pages.push({
            page:i,
            txt:i,
            cur:i==page
          })
        }
        if(end!=pageCount){
          this.pages.push({
            page:-1,
            txt:"..."
          });
        }
        if(page+1<=pageCount){
          this.pages.push({
            page:page+1,
            txt:"下一页"
          });
          this.pages.push({
            page:pageCount,
            txt:"末页"
          });
        }
      },
      async loadRecords(page){
        let url='/api/live/index/transRecord/';
        let data={
          p:page,
          ps:this.pageSize,
          d:this.curDate
        };
        this.is_loading_records=true;
        let res = await this.$http.post(url,data);
        this.is_loading_records=false;
        if(!res)return;
        if(res.data.code!=0){
          this.alert("提示",res.data.msg);
          return;
        }
        this.records=res.data.list;
        this.setPager(page,res.data.page);
      },
      typeClick(){
        this.loadRecords(1);
      },
      search() {
        this.loadRecords(1);
      },
      pageClick(page){
        if(page==-1)return;
        this.loadRecords(page);
      }
    }
  }
</script>

<style scoped lang="less">
  .charge_record {
    font-size:14px;
    text-align: left;
    .header {
      background-color: #fff;
      padding-left: 20px;
      .mbx {
        line-height: 51px;
        display: inline-block;
        border-bottom: 2px solid #B62929;
      }
    }
    .cont {
      padding: 20px;
      .short {
        width: 150px;
      }
      .tab_type {
        float: left;
        border: 3px solid #B62929;
        border-radius: 3px 3px;
        margin:10px 0;
        margin-right:35px;
        > .item {
          display: inline-block;
          line-height: 30px;
          width: 80px;
          cursor: pointer;
          text-align: center;
          &.cur {
            color: #fff;
            background-color: #b62929;
          }
        }
      }

    }
  }
</style>
