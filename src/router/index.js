import Vue from 'vue'
import Router from 'vue-router'
import homeContent from '@/components/homeContent'
import contentSubregion from '@/components/contentSubregion'
import Registered from '@/page/Registered'
import home from '@/page/home'
Vue.use(Router);
export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      children: [
        {
          path: '/homeContent',
          name: 'homeContent',
          component: homeContent
        },
        {
          path: '/contentSubregion',
          name: 'contentSubregion',
          component: contentSubregion
        }
      ]
    },
    {
      path: '/Registered',
      name: 'Registered',
      component: Registered,
    }
  ]
})
