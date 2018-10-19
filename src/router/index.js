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
      path: '/newsDetails',
      name: "newsDetails",
      component: () => import('@/views/newsDetails')
    },
    {
      path:'/login',
      name:'login',
      meta:{
        title:'登录'
      },
      component:() => import('@/views/login')
    }
  ]
})
