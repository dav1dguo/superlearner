import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Lesson from '@/components/Lesson'
import SignIn from '@/components/SignIn'
import Host from '@/components/Host'
import Participant from '@/components/Participant'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/host',
    name: 'Host',
    component: Host
  },
  {
    path: '/participant/:roomId',
    name: 'Participant',
    component: Participant,
    props: true,
  },
  {
    path: "/lessons/:id",
    name: "lessons",
    component: Lesson,
    props: true
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn,
    meta: {
      guest: true
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
