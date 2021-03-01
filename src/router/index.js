import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Nav from '../components/Nav.vue'
import Course from '../components/Course.vue'
import Blackboard from '../components/Blackboard.vue'
import Attention from '../components/Attention.vue'
import Me from '../components/Me.vue'
import Live from '../components/LiveBroadcast.vue'
import AfterVideo from '../components/AfterVideo.vue'
import BeforeVideo from '../components/BeforeVideo.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/nav',
      component: Nav,
      redirect: '/home', // "导航"
      children: [
        { path: '/home', component: Home }, // "主页"
        {
          path: '/course',
          component: Course,
          redirect: '/blackboard/CS285', // "课程"
          children: [
            { path: '/blackboard/:id', name: 'blackboard', component: Blackboard }
          ]
        },
        { path: '/attention', component: Attention }, // “专注”
        { path: '/me', component: Me }// “我的”
      ]
    },
    { path: '/livebroadcast', component: Live }, // "直播"
    { path: '/afterVideo', component: AfterVideo }, // "回放视频"
    { path: '/beforeVideo', component: BeforeVideo }// "预习视频"
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  return next()
})

export default router
