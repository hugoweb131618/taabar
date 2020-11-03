
<template>
    <div class="item-wrap" @click="changePage">
        <span v-show="!change">
            <slot name="normalImg"></slot>
        </span>
        <span v-show="change">
            <slot name="activeImg"></slot>
        </span>
        <span v-text="txt"></span>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: {
        txt: {
            type: String,
            default: () => {
                return;
            },
        },
        page: {
            type: String,
        },
        sel: {
            type: String
        },
    },
    computed: {
        change: function () {
            if (this.sel  === this.page) {
                return true;
            } else {
                return false;
            }
        },
    },
    methods: {
        changePage: function () {
            // 点击跳转对应的页面
            this.$router.push("/" + this.page);
            this.$emit("change", this.page);
        },
    },
};
</script>

<style type="text/css">
  .item-wrap {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .item-wrap span {
    font-size: 12px;
  }
</style>