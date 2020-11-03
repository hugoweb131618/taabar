<!--
 * @Author: your name
 * @Date: 2020-10-30 09:57:29
 * @LastEditTime: 2020-10-30 16:31:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \shopping\src\components\tabbar\index.vue
-->
<template>
    <div class="tabbar-wrap">
        <div class="seize-seat"></div>
        <div class="tabbar-wrap-content">
            <div class="warp">
                <my-item
                    :txt="item.txt"
                    :page="item.page"
                    @change="getVal"
                    v-for="item in tabbarList"
                    :key="item.txt"
                    :sel="selected"
                >
                    <img :src="item.normalImg" slot="normalImg" />
                    <img :src="item.activeImg" slot="activeImg" />
                </my-item>
            </div>
        </div>
    </div>
</template>

<script>
import myItem from "./item";
export default {
    name: "my-tabbar",
    components: {
        myItem,
    },
    props: {
        list: {
            type: Array,
            default: () => {
                return [];
            },
        },
        is_sel: {
            type: String,
            default:() => {
                return ''
            }
        }
    },
    created() {
        this.selected = this.is_sel;
       this.tabbarList = this.list;
    },
    data: function () {
        return {
            // 默认展示哪一个菜单
            selected: "",
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
                },
                {
                    txt: "设置",
                    page: "setting",
                    normalImg: require("../../../static/personal.png"),
                    activeImg: require("../../../static/personalH.png"),
                },
            ],
        };
    },
    methods: {
        getVal: function (res) {
            this.selected = res;
        },
    },
};
</script>

<style scoped>
.tabbar-wrap {
    width: 100%;
}
.tabbar-wrap .warp {
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.tabbar-wrap .warp img {
    width: 25px;
    height: 25px;
}

.tabbar-wrap .seize-seat {
    width: 100%;
    height: 65px;
}

.tabbar-wrap .tabbar-wrap-content  {
    width: 100%;
    height: 45px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding-bottom: 5px;
    padding-top: 5px;
    background: #fff;
    border-top: 1px solid rgba(100, 100, 100, 0.1);
    box-shadow: 0px -1px 1px rgba(150, 150, 150, 0.08);
}
</style>
