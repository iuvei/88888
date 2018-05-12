import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from 'axios'
/*import $ from 'jquery'*/
import 'babel-polyfill'  //ie11打开空白
import alert from "@/components/base/alert"
import "@/obj/util"
import { DatePicker } from 'element-ui';
Vue.component("DatePicker", DatePicker);
Vue.config.productionTip = true
axios.defaults.withCredentials = true
Vue.prototype.$http = axios;
Vue.prototype.$http.defaults.headers.EasySecret=store.state.easysecret;
Vue.prototype.$http.interceptors.response.use(
  response => {
    if(response.status!=200){//不确定所有非200状态都进入error 所以价格判断
      store.commit("LOADING",false);
      console.error(error.response);
      return Promise.resolve();
    }else{
      if(response.data.code==2){
        store.commit("ROOTBOX",{
          open:true,
          compt:alert,
          props:{
            tit:"提示",
            msg:"您还未登录或登录过期!"
          },
          handles:{
            confirm(){
              if(store.state.easysecret){ //没有登录或者token过期 清空之前状态跳到登录页
                store.commit("EASYSECRET","");
                localStorage.clear();
              }
              Vue.prototype.$http.defaults.headers.EasySecret=undefined;
              router.push("Login");
              store.commit("ROOTBOX",{
                open:false
              })
            },
            close(){
              store.commit("ROOTBOX",{
                open:false
              });
            }
          }
        });
      }else{
        return response;
      }
    }
  },
  error => {
    let wAlert=(msg)=>{//todo 放到公共文件中
      store.commit("ROOTBOX",{
        open: true,
        compt: alert,
        props: {
          tit: "提示",
          msg: msg,
          msgstyle: {}
        },
        handles: {
          confirm() {
            store.commit("ROOTBOX",{
              open: false
            })
          },
          close() {
            if (fn) fn();
            store.commit("ROOTBOX",{
              open: false
            });
          }
        }
      });
    }
    if (error.response&&error.response.status) {
      switch (error.response.status) {//根据状态码提示对应消息
        case 401:
          break;
        case 404:
          wAlert("请求未找到");
          break;
        case 504:
          wAlert("请求超时");
          break;
        default:
          wAlert("请求错误");

      }
    }else{
      //全局处理错误后返回成功一个undefined 免去每次使用 async await 都try catch
      console.error(error.response,"错误");
      store.commit("LOADING",false);//报错时关闭loading
      wAlert("请求错误");
      return Promise.resolve();
    }
  });
/* eslint-disable no-new */

// Vue.prototype.$http = axios

// 设置axios请求的token
// axios.defaults.headers.common['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJlYXN5LWNhc2luby1jb2RlIiwiY29kZSI6Ijg3NTgiLCJleHAiOjE1MjMxNzkwNjJ9.n18yr7jQxu1CZg9VfAHz6mwAgMNpw2c_g1B1f5PGd5M'
//设置请求头
// axios.defaults.headers.post["Content-type"] = "application/x-www-form-urlencoded"

let vue =new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
