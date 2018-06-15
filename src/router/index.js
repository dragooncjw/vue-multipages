import Vue from 'vue'
import Router from 'vue-router'
import Personinfo from '@/components/person/person_info'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Personinfo',
      name: 'Personinfo',
      component: Personinfo
    }
  ]
})
