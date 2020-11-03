<!--
 * @Author: your name
 * @Date: 2020-10-30 11:34:08
 * @LastEditTime: 2020-10-30 14:20:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shopping\src\pages\card\index.vue
-->
<template>
  <div>card
      <div v-for="item in 50" :key="item">{{item}}</div>
      <my-tabbar :list="tabbarList" :is_sel="'card'"/>
  </div>
  

</template>

<script>
import myTabbar from "@/components/tabbar"
export default {
    components:{
        myTabbar
    },
    data() {
        return {
            tabbarList: [
                 {
                    txt: "首页",
                    page: "",
                    normalImg: require("../../../static/home.png"),
                    activeImg: require("../../../static/homeH.png"),
                },
                {
                    txt: "微咨询",
                    page: "card",
                    normalImg: require("../../../static/business.png"),
                    activeImg: require("../../../static/businessH.png"),
                },
                {
                    txt: "个人中心",
                    page: "person",
                    normalImg: require("../../../static/mall.png"),
                    activeImg: require("../../../static/mallH.png"),
                }
            ]
        };
    },
}
</script>

<style>

</style>