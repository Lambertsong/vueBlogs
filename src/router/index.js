import Vue from 'vue'
import Router from 'vue-router'
import homeContent from '@/components/homeContent' //首页内容
import prefecture from '@/components/prefecture' // 专区页
import contentSubregion from '@/components/contentSubregion' //个人笔记
import template from '@/components/template' //小故事
import Registered from '@/page/Registered' //独立页面不带有头部和尾部（未填写内容）
import contentsArticle from '@/components/contentsArticle' //文章内容
import privacySpace from '@/components/privacySpace' //隐私内容
import privacySpaceContent from '@/components/privacySpaceContent' //文章内容
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import home from '@/page/home'  // 首页（放有头部和尾部）
import LetItSnow from 'vue-let-it-snow';
Vue.use(LetItSnow);
Vue.use(Router);
Vue.use(ElementUI, {
  size: 'small',
  menuType: 'text'
});
export default new Router({
  // mode: 'history',
  // base: '/',
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
        },
        {
          path: '/prefecture',
          name: 'prefecture',
          component: prefecture
        },
        {
          path: '/contentsArticle',
          name: 'contentsArticle',
          component: contentsArticle
        }
      ],
    },
    {
      path: '/Registered',
      name: 'Registered',
      component: Registered,
    },
    {
      path: '/privacySpace',
      name: 'privacySpace',
      components:{
        default: privacySpace,
      },
      children: [
        {
          path: '/',
          name: 'privacySpaceContent',
          components:{
            as: privacySpaceContent,
          },
        }
      ],
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
