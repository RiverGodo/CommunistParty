import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/notice',
      name: "notice",
      meta:{
        title:'通知早知道'
      },
      component: () => import('@/views/notice')
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'登录'
      },
      component:() => import('@/views/login')
    },
    {
      path:'/myparty',
      name:'myparty',
      meta:{
        title:'我的党建'
      },
      component:() => import('@/views/myparty')
    },
    {
      path:'/newseye',
      name:'newseye',
      meta:{
        title:'信工新闻眼'
      },
      component:() => import('@/views/newsList')
    },
    {
      path:'/oneclick',
      name:'oneclick',
      meta:{
        title:'党建一点通'
      },
      component:() => import('@/views/newsList')
    },
    {
      path:'/showidentity',
      name:'showidentity',
      meta:{
        title:'党员亮身份'
      },
      component:() => import('@/views/newsList')
    },
    {
      path:'/study',
      name:'study',
      meta:{
        title:'政治学习'
      },
      component:() => import('@/views/newsList')
    },
    {
      path:'/auditStatus/0/1',
      name:'auditStatus01',
      meta:{
        title:'思想汇报'
      },
      component:() => import('@/views/auditStatus')
    },
    {
      path:'/auditStatus/0/2',
      name:'auditStatus02',
      meta:{
        title:'心得总结'
      },
      component:() => import('@/views/auditStatus')
    },
    {
      path:'/LifeChoice',
      name:'LifeChoice',
      meta:{
        title:'民主评议'
      },
      component:() => import('@/views/LifeChoice')
    },
    {
      path:'/findorg',
      name:'findorg',
      meta:{
        title:'流动党员找组织'
      },
      component:() => import('@/views/findorg')
    },
    {
      path:'/anytimestudy',
      name:'anytimestudy',
      meta:{
        title:'随时随地学'
      },
      component:() => import('@/views/newsList')
    },
    {
      path:'/System',
      name:'System',
      meta:{
        title:'制度建设'
      },
      component:() => import('@/views/newsList')
    },
    {
      path:'/activity',
      name:'activity',
      meta:{
        title:'特色活动'
      },
      component:() => import('@/views/newsList')
    },
    {
      path:'/anytimephoto',
      name:'anytimephoto',
      meta:{
        title:'随时随地拍'
      },
      component:() => import('@/views/anytimephoto')
    },
    {
      path:'/life',
      name:'life',
      meta:{
        title:'掌上组织生活'
      },
      component:() => import('@/views/life')
    },
    {
      path:'/interaction',
      name:'interaction',
      meta:{
        title:'党员云互动'
      },
      component:() => import('@/views/interaction')
    },
    {
      path:'/today',
      name:'today',
      meta:{
        title:'党史上的今天'
      },
      component:() => import('@/views/today')
    },
    {
      path:'/newsDetail/:id',
      name:'newsDetail',
      meta:{
        title:''
      },
      component:() => import('@/views/newsDetail')
    },
    {
      path:'/score',
      name:'score',
      meta:{
        title:'个人量化积分'
      },
      component:() => import('@/views/score')
    },
    {
      path:'/scoredetail',
      name:'scoredetail',
      meta:{
        title:'积分明细'
      },
      component:() => import('@/views/scoredetail')
    },
    {
      path:'/info',
      name:'info',
      meta:{
        title:'个人信息'
      },
      component:() => import('@/views/info')
    },
    {
      path:'/updateInfo',
      name:'updateInfo',
      meta:{
        title:'修改个人信息'
      },
      component:() => import('@/views/updateInfo')
    },
    {
      path:'/interDetail',
      name:'interDetail',
      meta:{
        title:'党员云互动'
      },
      component:() => import('@/views/interDetail')
    },
    {
      path:'/uppass',
      name:'uppass',
      meta:{
        title:'修改密码'
      },
      component:() => import('@/views/uppass')
    },
    {
      path:'/pay',
      name:'pay',
      meta:{
        title:'缴纳党费'
      },
      component:() => import('@/views/pay')
    }
  ]
})
