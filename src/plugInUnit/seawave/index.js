

import Vue from 'vue'
import myLoading from './seawave.vue'

const MyLoadingBox = Vue.extend(myLoading)

myLoading.install = function (data) {
        let instance = new MyLoadingBox({
          data
        }).$mount()
        let seawave_box = document.body.getElementsByClassName('seawave_box');
        for (let i = 0; i < seawave_box.length; i++) {
          //删除元素 元素.parentNode.removeChild(元素);
          if (seawave_box[i] != null)
            seawave_box[i].parentNode.removeChild(seawave_box[i]);
        }
        document.body.appendChild(instance.$el)
        // 在Vue的原型上添加组件内方法，以全局调用
        Vue.prototype.$seawave = instance;
        return  instance
}

export default myLoading;