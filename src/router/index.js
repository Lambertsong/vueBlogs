import Vue from 'vue'
import Router from 'vue-router'
import homeContent from '@/components/homeContent'
import contentSubregion from '@/components/contentSubregion'
import template from '@/components/template'
import Registered from '@/page/Registered'
import home from '@/page/home'
import LetItSnow from 'vue-let-it-snow';
Vue.use(LetItSnow);
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
          path: '/',
          name: 'homeContent',
          component: homeContent
        },
        {
          path: '/contentSubregion',
          name: 'contentSubregion',
          component: contentSubregion
        },
        {
          path: '/template',
          name: 'template',
          component: template
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
