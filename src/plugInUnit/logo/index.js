

import Vue from 'vue'
import logoLoading from './logo.vue'

const LogoLoading = Vue.extend(logoLoading)

logoLoading.install = function (data) {
        let instance = new LogoLoading({
          data
        }).$mount()
        let logo_loading_box = document.body.getElementsByClassName('logo_loading_box');
        for (let i = 0; i < logo_loading_box.length; i++) {
          //删除元素 元素.parentNode.removeChild(元素);
          if (logo_loading_box[i] != null)
            logo_loading_box[i].parentNode.removeChild(logo_loading_box[i]);
        }
        document.body.appendChild(instance.$el)
        // 在Vue的原型上添加组件内方法，以全局调用
        Vue.prototype.$logo = instance;
        return  instance
}

export default logoLoading;