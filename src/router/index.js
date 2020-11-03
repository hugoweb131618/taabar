/*
 * @Author: your name
 * @Date: 2020-10-26 18:34:31
 * @LastEditTime: 2020-10-30 14:14:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shopping\src\router\index.js
 */

import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import card from '@/pages/card'
import setting from '@/pages/setting'
import person from '@/pages/person'

Vue.use(Router)
// router文件夹-->index.js文件
//cv以下代码解决路由地址重复的报错问题(一劳永逸)
const originalPush = Router.prototype.push
   Router.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/card',
      name: 'card',
      component: card
    },{
      path: '/setting',
      name: 'setting',
      component: setting
    },{
      path: '/person',
      name: 'person',
      component: person
    },
  ]
})
