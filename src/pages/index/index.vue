<!--
 * @Author: your name
 * @Date: 2020-10-26 18:34:31
 * @LastEditTime: 2020-11-03 14:26:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shopping\src\pages\index\index.vue
-->

<template>
    <div class="index-wrap">
        <button @click="show()">开始</button>
        <button @click="close()">关闭</button>
        <!-- <div v-for="item in 100"  :key="item">{{item}}</div> -->
        <my-tabbar :list="tabbarList"/>
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
    mounted() {
        // this.$logo.show();
    },
    created() {
        // setTimeout(() => {
        //     this.$logo.hide();
        // }, 3000);
    },
    
    destroyed() {
        // this.$myLoading.hide();
    },
    methods: {
        show() {
            // this.$seawave.show();
            this.$logo.show();
        },
        close() {
             this.$logo.hide();
            // this.$seawave.hide();
        },
    },
};
</script>

<style scoped>
.index-wrap {
    width: 100%;
    position: relative;
    z-index: 2222222;
    padding: 30px 0;
    text-align: center;
}


</style>
