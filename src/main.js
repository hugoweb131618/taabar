/*
 * @Author: your name
 * @Date: 2020-10-26 18:34:31
 * @LastEditTime: 2020-11-03 14:20:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shopping\src\main.js
 */

import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;

import seawave from '@/plugInUnit/seawave/index';
import logo from '@/plugInUnit/logo/index';


Vue.use(seawave);
Vue.use(logo);

seawave.mounted({
  mask: false, // 遮罩层
  showdindow: false, 
  speel: 5, // 速度
  animal: true,
  minHeight: 80, //  最小 0
  bolangHeight: 3 // 波浪高度 
})

logo.mounted({
  mask: true, // 遮罩层
  showdindow: false, 
  speel: 1.5, // 动画时间
  minHeight: 100, //  最小 0
})

Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
