import Vue from 'vue'
import Router from 'vue-router'
import Epoch from '../components/Epoch/Epoch'


Vue.use(Router)

export default new Router({
  hash: true,
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Epoch',
      component: Epoch,
    },
  ]
})
