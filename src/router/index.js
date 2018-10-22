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
  ]
})
