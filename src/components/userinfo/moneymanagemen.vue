<template>
  <div class='container'>
    <div class="main-head">
      <span>用户中心&gt;额度管理</span>
    </div>
    <!-- 日期列表 -->
    <div class="table-list">
      <div class="wallet">我的钱包：<span class="red">¥{{money}}</span></div>
    </div>
    <div class="btns paddbottom10">
      <div :class="{recharge:true,active:inOrOut==1}" @click="turnInOrOut(1);">转入</div>
      <div :class="{withdraw:true,active:inOrOut==2}" @click="turnInOrOut(2);">转出</div>
    </div>
    <div class="btns platform">
      <div :class="{recharge:true,ag:true,active:platform==1}" @click="platformSelect(1);">
        AG平台
        <br> <a href="javascript:;" @click="readMoney(1)">查询余额</a>
      </div>
      <div :class="{withdraw:true,ds:true,active:platform==2}" @click="platformSelect(2);">
        DS平台
        <br> <a href="javascript:;" @click="readMoney(2)">查询余额</a>
      </div>
      <div :class="{withdraw:true,ds:true,active:platform==3}" @click="platformSelect(3);">
        BBIN平台
        <br> <a href="javascript:;" @click="readMoney(3)">查询余额</a>
      </div>
      <div :class="{withdraw:true,ds:true,active:platform==4}" @click="platformSelect(4);" style=" border-top-right-radius: 10px;border-bottom-right-radius: 10px;">
        MG平台
        <br> <a href="javascript:;" @click="readMoney(4)">查询余额</a>
      </div>
    </div>
    <div class="table-list">
      <div class="title">
        选择转账金额:
      </div>
      <ul>
        <li :class="{active:all==10}" @click="selectType(10)">全部</li>
        <li :class="{active:inputMoney==100}" @click="selectType(100)">100</li>
        <li :class="{active:inputMoney==500}" @click="selectType(500)">500</li>
        <li :class="{active:inputMoney==1000}" @click="selectType(1000)">1000</li>
        <li :class="{active:inputMoney==5000}" @click="selectType(5000)">5000</li>
        <li :class="{active:inputMoney==10000}" @click="selectType(10000)">10000</li>
        <li class="bordernone">
          <input type="number" placeholder="输入金额,最低10元" class="input" onkeypress='return( /[\d]/.test(String.fromCharCode(event.keyCode)))' v-model="inputMoney">
        </li>
      </ul>
      <div class="btns">
        <button class="reset" @click="selectType(0)">重置</button>
        <button class="submit" @click='submitQuota()'>提交</button>
      </div>
    </div>
    <maskLayer :ifopen="ifopen" :content='content'></maskLayer>
  </div>
</template>
<script>

import maskLayer from '../base/mask-layer'
import { mapState,mapMutations } from 'vuex'
import alert from "@/components/base/alert"
export default {
  data () {
    return {
      isShow: true,
      inOrOut: 1,
      platform: 1,
      all: '',
      lock: true,
      inputMoney: '',
      ifopen: false,
      // money: '',
      realname: '',
      bankCardNum: '',
      bankName: '',
      content: ''
    }
  },
  methods: {
    ...mapMutations(['ROOTBOX']),
    alert(tit, msg, fn, msgStyle) {
        let _this = this;
        this.ROOTBOX({
          open: true,
          compt: alert,
          props: {
            tit: tit,
            msg: msg,
            msgstyle: msgStyle,
          },
          handles: {
            confirm() {
              _this.ROOTBOX({
                open: false
              })
            },
            close() {
              if (fn) fn();
              _this.ROOTBOX({
                open: false
              });
            }
          }
        });
      },
    readMoney (index) {
      let type;
      if(index == 1){
        type = 'AG'
      };
      if(index == 2){
        type = 'DS'
      }
      if(index == 3){
        type = 'BBIN'
      }
      if(index == 4){
        type = 'MG'
      }
      this.mytoast('请稍等,正在为您查询！')
      this.$http.post('/api/live/index/leftMoney/',{type:type}).then((res) =>{
        if(res.data.code == 0){
          this.alert('提示',type +'余额为'+res.data.money);
          setTimeout(() => {
            this.ifopen = false
          }, 100)
        }else{
          this.alert('提示',res.data.msg);
          setTimeout(() => {
            this.ifopen = false
          }, 100)
        }
      })
    },
    turnInOrOut (select) {
      this.inOrOut = select
      this.inputMoney = ''
      this.all = ''
      this.lock = true
    },
    platformSelect (plat) {
      this.lock = true
      this.inputMoney = ''
      this.all = ''
      this.platform = plat
    },
    selectType (index) {
      if (index === 10) {
        if (this.lock) {
          this.all = index
          this.lock = false
          // 转入
          if (this.inOrOut === 1) {
            this.inputMoney = this.usermoney
          }
          // 转出
          if (this.inOrOut === 2) {
            // AG平台
            if (this.platform === 1) {
              this.inputMoney = this.agmoney
            }

            // DS平台
            if (this.platform === 2) {
              this.inputMoney = this.dsmoney
            }
          }
        } else {
          this.all = ''
          this.lock = true
          this.inputMoney = ''
        }
      } else if (index === 0) {
        // 重置按钮
        this.inputMoney = ''
        this.all = ''
      } else {
        this.lock = true
        this.all = ''
        this.inputMoney = index
      }
      // 重置按钮
      if (index === 0) {
        this.inputMoney = ''
        this.all = ''
      }
    },
    // 封装提示信息函数
    mytoast (msg) {
      this.ifopen = true
      this.content = msg
    },
    // 提交
    submitQuota () {
      if (!this.inputMoney) {
        this.mytoast('请先输入转账金额')
        setTimeout(() => {
          this.ifopen = false
        }, 1000)
        return
      } else if (this.inOrOut === 1) {
        // 转入
        // 转入到AG平台
        this.mytoast('正在操作中')
          let data = {}
        if (this.platform === 1) {
          data['money'] = this.inputMoney
          data['type'] = 'AG'
          data['trans'] = 'i'
        }
        if(this.platform === 2){
          data['money'] = this.inputMoney
          data['type'] = 'DS'
          data['trans'] = 'i'
        }
        if(this.platform === 3){
          data['money'] = this.inputMoney
          data['type'] = 'BBIN'
          data['trans'] = 'i'
        }
        if(this.platform === 4){
          data['money'] = this.inputMoney
          data['type'] = 'MG'
          data['trans'] = 'i'
        }
          this.$http.post('/api/live/index/moneyTrans/', data).then((res) => {
            if (res.data.code === 0) {
              this.alert('提示',res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                // clearTimeout()
              }, 300)
              let nowmoney = this.money - this.inputMoney +'.00'
              this.$store.commit('changeUserMoney',nowmoney)
              this.inputMoney = ''
              this.all = ''
            }  else {
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1000)
            }
          }).catch((error) => {
            console.log(error)
          })
      } else if (this.inOrOut === 2) {
        this.mytoast('正在操作中')
        // 转出
        // 转出到AG平台
        let dataout = {}
        if (this.platform === 1) {
          dataout['money'] = this.inputMoney
          dataout['type'] = 'AG'
          dataout['trans'] = 'w'
        }
        if(this.platform === 2){
          dataout['money'] = this.inputMoney
          dataout['type'] = 'DS'
          dataout['trans'] = 'w'
        }
        if(this.platform === 3){
          dataout['money'] = this.inputMoney
          dataout['type'] = 'BBIN'
          dataout['trans'] = 'w'
        }
        if(this.platform === 4){
          dataout['money'] = this.inputMoney
          dataout['type'] = 'MG'
          dataout['trans'] = 'w'
        }
          this.$http.post('/api/live/index/moneyTrans/', dataout).then((res) => {
            if (res.data.code === 0) {
              this.alert('提示',res.data.msg)
              setTimeout(() => {
                this.ifopen = false
              }, 300)
              let nowmoney = (parseInt(this.money) + parseInt(this.inputMoney))+'.00' 
              this.$store.commit('changeUserMoney',nowmoney)
              this.inputMoney = ''
              this.all = ''
            }  else {
              this.mytoast(res.data.msg)
              setTimeout(() => {
                this.ifopen = false
                clearTimeout()
              }, 1000)

              this.inputMoney = ''
              this.all = ''
            }
          }).catch((error) => {
            console.log(error)
          })
      }
    },
    ...mapMutations(['changeAgMoney','changeDsMoney','changeUserMoney','userLoginOut']),

  },
  computed: {
    ...mapState(['agmoney','dsmoney','money'])
  },
  components: {
    maskLayer
  }
}

</script>
<style scoped>
.main-head {
  /*background: #fff;*/
  border-bottom: 1px solid #d0d0d0;
  text-align: left;
  line-height: 49px;
  margin-left: 20px;
  margin-right: 20px;
}

.main-head span {
  font-size: 16px;
  display: inline-block;
  height: 49px;
  border-bottom: 2px solid #b62929;
}

/*表格*/
.table-list {
  padding: 10px 20px 10px 20px;
}

.wallet {
  height: 50px;
  line-height: 50px;
  text-align: left;
  padding-left: 20px;
  background-color: #fff;
}

.platform {
  padding-top: 20px;
  border-top: 1px solid #cdcdcd;
}
.platform a{
  color: #26a2ff;
  text-decoration: none;
  font-size: 13px;
}
.btns {
  margin: 8px;
  overflow: hidden;
  /* padding-bottom: 20px; */
}

.btns .recharge,
.btns .withdraw {
  padding: 0 22px;
  border: none;
  background: none;
  display: inline-block;
  background-color: #ededed;
  border: 1px solid #b62929;
  cursor: pointer;
  height: 50px;
  line-height: 50px;
  float: left;
  color: #6f6d6d;
}

.paddbottom10 {
  padding-bottom: 10px;
}

.btns .ag,
.btns .ds {

  cursor: pointer;
  height: 60px;
  line-height: 30px;
}

.btns .recharge {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  margin-left: 30px;
}

.btns .withdraw {
  border-left: none;
}

.btns>.active {
  background-color: #b62929;
  color: #fff;
}

.red {
  color: #b62929;
}

.table-list .title {
  text-align: left;
  padding-left: 20px;
  /* font-size: 14px; */
  height: 30px;
  line-height: 30px;
}

.table-list ul {
  overflow: hidden;
  padding-left: 10px;
}

.table-list ul li {
  float: left;
  height: 30px;
  line-height: 30px;
  border: 1px solid #ce4c4c;
  width: 60px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  text-align: center;
}

.table-list ul input {
  width: 136px;
  height: 30px;
  line-height: 30px;
  padding-left: 5px;
  border-radius: 5px;
  outline: 0;
  border: none;
  border: 1px solid #ce4c4c;
}

.table-list ul li.active {
  background-color: #b62929;
  color: #fff;
}

input:focus {
  border-color: rgba(198, 33, 51, 0.8);
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 8px rgba(198, 33, 51, 0.8);
}

.bordernone {
  border: none!important;
}

.btns button {
  outline: none;
  border: none;
  background-color: #b62929;
  height: 40px;
  line-height: 30px;
  padding: 0px 30px;
  margin: 8px 15px;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}

button.reset {
  background-color: #26a2ff;
}

</style>
