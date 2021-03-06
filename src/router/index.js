import Vue from 'vue'
import Router from 'vue-router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import store from "@/store"
// import Lottery from '@/components/lottery'
const Lottery = (resolve) => {
    import('@/components/lottery').then((module) => {
        resolve(module)
    })
}
/*import alert from "@/components/base/alert"*/
// 首页头部导航栏

// username
// user_money
// ag_money
// ds_money

const home = (resolve) => {
  import('@/components/home').then((module) => {
    resolve(module)
  })
}

// 首页注册
const register = (resolve) => {
  import('@/components/register').then((module) => {
    resolve(module)
  })
}
// 用户中心>报表管理>充值记录
const sportsgame = (resolve) => {
  import('@/components/userinfo/sportsgame').then((module) => {
    resolve(module)
  })
}

// 充值
const recharge = (resolve) => {
  import('@/components/userinfo/recharge').then((module) => {
    resolve(module)
  })
}

// 提现
const withdrawal = (resolve) => {
  import('@/components/userinfo/withdrawal').then((module) => {
    resolve(module)
  })
}

// 用户中心>报表管理>帐变报表
const videogame = (resolve) => {
  import('@/components/userinfo/videogame').then((module) => {
    resolve(module)
  })
}

// 用户中心>报表管理>个人报表
const lotterygame = (resolve) => {
  import('@/components/userinfo/lotterygame').then((module) => {
    resolve(module)
  })
}

// 用户中心>报表管理>团队报表
const depositrecord = (resolve) => {
  import('@/components/userinfo/depositrecord').then((module) => {
    resolve(module)
  })
}

// 用户中心>报表管理>优惠活动详情
const conversionchange = (resolve) => {
  import('@/components/userinfo/conversionchange').then((module) => {
    resolve(module)
  })
}

// 用户中心>账户管理>个人总览
const UserInfo = (resolve) => {
  import('@/components/userinfo/UserInfo').then((module) => {
    resolve(module)
  })
}

// 用户中心>账户管理>密码管理
const PasswordManagement = (resolve) => {
  import('@/components/userinfo/PasswordManagement').then((module) => {
    resolve(module)
  })
}


const bet_record = (resolve) => {
  import('@/components/userinfo/bet_record').then((module) => {
    resolve(module)
  })
}
const charge_record = (resolve) => {
  import('@/components/userinfo/charge_record').then((module) => {
    resolve(module)
  })
}
const week_statistic = (resolve) => {
  import('@/components/userinfo/week_statistic').then((module) => {
    resolve(module)
  })
}
const msg_list = (resolve) => {
  import('@/components/userinfo/msg_list').then((module) => {
    resolve(module)
  })
}
// 用户中心>额度管理>转入
const moneymanagemen = (resolve) => {
  import('@/components/userinfo/moneymanagemen').then((module) => {
    resolve(module)
  })
}

// 用户中心>短信公告>站内短信
const Messge = (resolve) => {
  import('@/components/userinfo/Messge').then((module) => {
    resolve(module)
  })
}

// 用户中心>短信公告>网站公告
const Notice = (resolve) => {
  import('@/components/userinfo/Notice').then((module) => {
    resolve(module)
  })
}
//优惠中心
const Activity = (resolve) => {
  import('@/components/Activity').then((module) => {
    resolve(module)
  })
}
//视讯直播
const live = (resolve) => {
  import('@/components/live/live1').then((module) => {
    resolve(module)
  })
}
//电子游艺
const Games = (resolve) => {
  import('@/components/Games').then((module) => {
    resolve(module)
  })
}
const Help = (resolve) => {
    import('@/components/Help').then((module) => {
      resolve(module)
    })
}
//常见问题
const Generalq = (resolve) => {
  import('@/components/Help/Generalq').then((module) => {
    resolve(module)
  })
}
//存款
const Deposit = (resolve) => {
  import('@/components/Help/Deposit').then((module) => {
    resolve(module)
  })
}
//取款
const Teller = (resolve) => {
  import('@/components/Help/Teller').then((module) => {
    resolve(module)
  })
}
const USERCENTER = (resolve) => {
  import('@/components/UserCenter').then((module) => {
    resolve(module)
  })
}
//彩票结果
const lottery_result = (resolve) => {
  import('@/components/lottery_result').then((module) => {
    resolve(module)
  });
}
//彩票规则
const Cqssc = (resolve) => {
  import('@/components/Help/Cqssc').then((module) => {
    resolve(module)
  })
}
const Tjscc = (resolve) => {
  import('@/components/Help/Tjssc').then((module) => {
    resolve(module)
  })
}
const Xjssc = (resolve) => {
  import('@/components/Help/Xjssc').then((module) => {
    resolve(module)
  })
}
const Gdklsf = (resolve) => {
  import('@/components/Help/Gdklsf').then((module) => {
    resolve(module)
  })
}
const Cqklsf = (resolve) => {
  import('@/components/Help/Cqklsf').then((module) => {
    resolve(module)
  })
}
const Tjklsf = (resolve) => {
  import('@/components/Help/Tjklsf').then((module) => {
    resolve(module)
  })
}
const Hnklsf = (resolve) => {
  import('@/components/Help/Hnklsf').then((module) => {
    resolve(module)
  })
}
const Gd11x5 = (resolve) => {
  import('@/components/Help/Gd11x5').then((module) => {
    resolve(module)
  })
}
const Bjkl8 = (resolve) => {
  import('@/components/Help/Bjkl8').then((module) => {
    resolve(module)
  })
}
const Bjpk10 = (resolve) => {
  import('@/components/Help/Bjpk10').then((module) => {
    resolve(module)
  })
}
const Xyft = (resolve) => {
  import('@/components/Help/Xyft').then((module) => {
    resolve(module)
  })
}
const Tcpl3 = (resolve) => {
  import("@/components/Help/Tcpl3").then((module) => {
    resolve(module)
  })
}
const Fc3d = (resolve) => {
  import("@/components/Help/Fc3d").then((module) => {
    resolve(module)
  })
}
const Shssl = (resolve) => {
  import("@/components/Help/Shssl").then((module) => {
    resolve(module)
  })
}
const Jsk3 = (resolve) => {
  import("@/components/Help/Jsk3").then((module) => {
    resolve(module)
  })
}
const Gxk3 = (resolve) => {
  import("@/components/Help/Gxk3").then((module) => {
    resolve(module)
  })
}
const Ahk3 = (resolve) => {
  import("@/components/Help/Ahk3").then((module) => {
    resolve(module)
  })
}
const Hbk3 = (resolve) => {
  import("@/components/Help/Hbk3").then((module) => {
    resolve(module)
  })
}
const Nmgk3 = (resolve) => {
  import("@/components/Help/Nmgk3").then((module) => {
    resolve(module)
  })
}
const Fjk3 = (resolve) => {
  import("@/components/Help/Fjk3").then((module) => {
    resolve(module)
  })
}
const Hubk3 = (resolve) => {
  import("@/components/Help/Hubk3").then((module) => {
    resolve(module)
  })
}
const Bjk3 = (resolve) => {
  import("@/components/Help/Bjk3").then((module) => {
    resolve(module)
  })
}
const Jlk3 = (resolve) => {
  import("@/components/Help/Jlk3").then((module) => {
    resolve(module)
  })
}
const Shk3 = (resolve) => {
  import("@/components/Help/Shk3").then((module) => {
    resolve(module)
  })
}
const Gsk3 = (resolve) => {
  import("@/components/Help/Gsk3").then((module) => {
    resolve(module)
  })
}
const Bj28 = (resolve) => {
  import("@/components/Help/Bj28").then((module) => {
    resolve(module)
  })
}
const Gxklsf = (resolve) => {
  import("@/components/Help/Gxklsf").then((module) => {
    resolve(module)
  })
}
const p404 = (resolve) => {
  import("@/components/p404").then((module) => {
    resolve(module)
  })
}
const six = (resolve) => {
  import('@/components/Help/six').then((module) => {
    resolve(module)
  })
}
const ssheader = (resolve) => {
  import('@/components/ssheader').then((module) => {
    resolve(module)
  })
}
//代理
const daili = (resolve) => {
  import('@/components/daili').then((module) => {
    resolve(module)
  })
}
//防劫持
const fjc = (resolve) => {
  import('@/components/fjc').then((module) => {
    resolve(module)
  })
}
//额度转换
const transRecord = (resolve) => {
  import('@/components/userinfo/transRecord').then((module) => {
    resolve(module)
  })
}
Vue.use(Router)
Vue.use(VueAwesomeSwiper)

const route = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Header',
      default: home,
      components: {
        default: home
      }
    },
    {
      path: '/lottery/:id',
      name: 'lottery',
      component: Lottery
    },
    {
      path: '/ssheader',
      name: 'ssheader',
      component:ssheader
    },
    {
      path: '/fjc',
      name: 'fjc',
      component:fjc
    },
    {
      path: '/daili',
      name: 'daili',
      component: daili
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/Games',
      name: 'Games',
      component: Games
    },
    {
      path: '/live',
      name: 'live1',
      component: live
    },
    {
      path: '/Activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/Help',
      // redirect:'/Generalq',
      name:'Help',
      component:Help,
      children: [
        {
          path: '/Generalq',
          name:'Generalq',
          component:Generalq
        },
        {
          path:'/six',
          name:'six',
          component:six
        },
        {
          path: '/Deposit',
          name:'Deposit',
          component:Deposit
        },{
          path:'/Teller',
          name:'Teller',
          component:Teller
        },
        {
          path:'/Cqssc',
          name:'Cqssc',
          component:Cqssc
        },
        {
          path:'/Tjssc',
          name:'Tjssc',
          component:Tjscc
        },
        {
          path:'/Xjssc',
          name:'Xjssc',
          component:Xjssc
        },
        {
          path:'/Gdklsf',
          name:'Gdklsf',
          component:Gdklsf
        },
        {
          path:'/Cqklsf',
          name:'Cqklsf',
          component:Cqklsf
        },
        {
          path:'/Tjklsf',
          name:'Tjklsf',
          component:Tjklsf
        },
        {
          path:'/Hnklsf',
          name:'Hnklsf',
          component:Hnklsf
        },
        {
          path:'/Gd11x5',
          name:'Gd11x5',
          component:Gd11x5
        },
        {
          path:'/Bjkl8',
          name:'Bjkl8',
          component:Bjkl8
        },
        {
          path:'/Bjpk10',
          name:'Bjpk10',
          component:Bjpk10
        },
        {
          path:'/Xyft',
          name:'Xyft',
          component:Xyft
        },
        {
          path:'/Tcpl3',
          name:'Tcpl3',
          component:Tcpl3
        },
        {
          path:'/Fc3d',
          name:'Fc3d',
          component:Fc3d
        },
        {
          path:'/Shssl',
          name:'Shssl',
          component:Shssl
        },
        {
          path:'/Jsk3',
          name:'Jsk3',
          component:Jsk3
        },
        {
          path:'/Gxk3',
          name:'Gxk3',
          component:Gxk3
        },
        {
          path:'/Ahk3',
          name:'Ahk3',
          component:Ahk3
        },
        {
          path:'/Hbk3',
          name:'Hbk3',
          component:Hbk3
        },
        {
          path:'/Nmgk3',
          name:'Nmgk3',
          component:Nmgk3
        },
        {
          path:'/Fjk3',
          name:'Fjk3',
          component:Fjk3
        },
        {
          path:'/Hubk3',
          name:'Hubk3',
          component:Hubk3
        },
        {
          path:'/Bjk3',
          name:'Bjk3',
          component:Bjk3
        },
        {
          path:'/Jlk3',
          name:'Jlk3',
          component:Jlk3
        },
        {
          path:'/Shk3',
          name:'Shk3',
          component:Shk3
        },
        {
          path:'/Gsk3',
          name:'Gsk3',
          component:Gsk3
        },
        {
          path:'/Bj28',
          name:'Bj28',
          component:Bj28
        },
        {
          path:'/Gxklsf',
          name:'Gxklsf',
          component:Gxklsf
        }
      ]
    },
    {
      path: '/UserCenter',
      redirect: '/recharge',
      name: 'UserCenter',
      component: USERCENTER,
      children: [
        {
          path: '/sportsgame',
          name: 'sportsgame',
          component: sportsgame
        },
        {
          path: '/videogame',
          name: 'videogame',
          component: videogame
        },
        {
          path: '/recharge',
          name: 'recharge',
          component: recharge
        },
        {
          path: '/withdrawal',
          name: 'withdrawal',
          component: withdrawal
        },
        {
          path: '/lotterygame',
          name: 'lotterygame',
          component: lotterygame
        },
        {
          path: '/depositrecord',
          name: 'depositrecord',
          component: depositrecord
        },
        {
          path: '/conversionchange',
          name: 'conversionchange',
          component: conversionchange
        },
        {
          path: '/UserInfo',
          name: 'UserInfo',
          component: UserInfo
        },
        {
          path: '/PasswordManagement',
          name: 'PasswordManagement',
          component: PasswordManagement
        },
        {
          path: '/moneymanagemen',
          name: 'moneymanagemen',
          component: moneymanagemen
        },
        {
          path:'/transRecord',
          name:'transRecord',
          component:transRecord
        },
        {
          path: '/Notice',
          name: 'Notice',
          component: Notice
        },
        {
          path: '/Messge',
          name: 'Messge',
          component: Messge
        },
        {
          path: '/bet_record',
          name: 'bet_record',
          component: bet_record
        },
        {
          path: '/charge_record',
          name: 'charge_record',
          component: charge_record
        },
        {
          path: '/week_statistic',
          name: 'week_statistic',
          component: week_statistic
        },
        {
          path: '/msg_list',
          name:"msg_list",
          component: msg_list
        }
      ]
    }
    ,{
      path: '/lottery_result',
      name: 'lottery_result',
      component: lottery_result
    },
    ,{
      path: '*',
      name: 'not_found',
      component: p404
    },
  ]
});
route.beforeEach((to, from, next) => {
  let virtualUserDisRoterNames=["recharge","withdrawal","charge_record","PasswordManagement"];
    if(store.state.userinfo&&store.state.userinfo.virtual===1&&virtualUserDisRoterNames.indexOf(to.name)>-1){
      window.wAlert("试玩用户无法进行此操作!");
    }else{
      next();
    }
    
  window.scrollTo(0, 0)
})
route.afterEach((to) => {
  let disDL = ['UserCenter','Help','lottery_result','lottery'];
    if(disDL.indexOf(to.matched&&to.matched.length>0?to.matched[0].name:to.name)===-1){
      store.commit("SHOWDLLEFT",true);
      store.commit("SHOWDLRIGHT",true);
      store.commit("SHOWBOTTOM",true);
    }else{
      store.commit("SHOWDLLEFT",false);
      store.commit("SHOWDLRIGHT",false);
      store.commit("SHOWBOTTOM",false);
  }
})
export default route;
