<template>
    <div class="logo_loading_box" v-show="showdindow">
        <div class="loading">
            <!--Waves Container-->
            <img src="../../../static/logo.png" alt="" />
            <!-- :style="boLangStyle" -->
            <div class="bolang" :style="boLangStyle">
                <svg
                    class="editorial"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 
                            58-18 88-18s
                            58 18 88 18 
                            58-18 88-18 
                            58 18 88 18
                            v44h-352z"
                        ></path>
                    </defs>
                    <g class="parallax">
                        <use
                            xlink:href="#gentle-wave"
                            x="50"
                            y="0"
                            fill="#4579e2"
                        />
                        <use
                            xlink:href="#gentle-wave"
                            x="50"
                            y="3"
                            fill="#3461c1"
                        />
                        <use
                            xlink:href="#gentle-wave"
                            x="50"
                            y="6"
                            fill="#2d55aa"
                        />
                    </g>
                </svg>
                <!-- :style="myStyle" -->
                <div class="content"></div>
            </div>
            <!--Waves end-->
        </div>
        <div class="mask" @click.stop="isClickMask()" v-if="mask"></div>
    </div>
</template>
<script>
let _self = this;
export default {
    data() {
        return {
            t: null,
            animal: false, // 是否加载动画
            mask: false, // 遮罩层
            showdindow: false, // 是否显示
            speel: 0, // 速度
            heightH: 0, // 高度
            minHeight: 0, // 最小高度
            maxHeight: 0,
            bolang: true, // 控制波浪显示
            myStyle: {},
            boLangStyle: {},
        };
    },
    beforeCreate() {},
    created() {
        let self = this;
        setTimeout(() => {
            let  maxHeight = 100;
            if (_self.myConfig != undefined && _self.myConfig != null) {
                // if (_self.myConfig.heightH)
                //     self.heightH = _self.myConfig.heightH;
                if (_self.myConfig.animal) self.animal = _self.myConfig.animal;
                if (_self.myConfig.mask) self.mask = _self.myConfig.mask;
                if (_self.myConfig.showdindow)
                    self.showdindow = _self.myConfig.showdindow;
                if (_self.myConfig.speel) self.speel = _self.myConfig.speel;
                if (_self.myConfig.minHeight <= 100 && _self.myConfig.minHeight > 0) {
                    let minHeight =
                        maxHeight - _self.myConfig.minHeight; // 最小高度相反；
                    self.heightH = minHeight;
                    self.minHeight = minHeight;
                } else {
                    let minHeight = 0; // 最小高度相反；
                    self.heightH = minHeight;
                    self.minHeight = minHeight;
                }
                if (_self.maxHeight <= 100) {
                    self.maxHeight = maxHeight;
                } else {
                    self.maxHeight = 100;
                }
                console.log(self.maxHeight);
                self.my_style();
            }
        }, 300);
    },
    destroyed() {
        this.hide();
    },
    mounted(config) {
        _self.myConfig = config;
    },
    methods: {
        my_style() {
            let self = this;
            this.boLangStyle = {
                transform: `translate3d(0,100px, 0)`,
                transition: `transform ${self.speel}s linear 0s`,
            };
        },
        isClickMask() {
            console.log("点到遮罩层了");
        },
        hide() {
            let self = this;
            clearTimeout(this.t);
            self.t = null;
            self.boLangStyle = {
                transform: `translate3d(0,100px, 0px)`,
                transition: `transform ${self.speel}s linear 0s`,
            };
            
            self.heightH = 100;
            console.log(self.boLangStyle, "this.showdindow====");
            setTimeout(() => {
                self.bolang = false;
                self.showdindow = false;
            }, 300);
        },
        show() {
            let self = this;
            self.heightH = self.minHeight;
            self.startTime();
        },
        // 重复调取刷新页面
        startTime() {
            let self = this;
            if (self.t) clearTimeout(self.t);
            if (self.heightH < self.maxHeight) {
            console.log(self.heightH, self.maxHeight, self.minHeight);
                self.bolang = false;
                self.heightH = self.maxHeight;
            } else {
                self.bolang = true;
                self.heightH = self.minHeight;
            }
            self.boLangStyle = {
                transform: `translate3d(0, ${self.heightH}px, 0px)`,
                transition: `transform ${self.speel/2}s linear 0s`,
            };

            self.showdindow = true;
            self.t = setTimeout(() => {
                self.startTime();
            }, self.speel * 1000);
        },
    },
};
</script>
<style scoped>
.logo_loading_box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 100000;
    top: 0;
}

.logo_loading_box .mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.7);
}

.logo_loading_box .bolang {
    position: absolute;
    width: 100%;
}
.logo_loading_box .bolang:hover {
    transform: translate3d(0, 0, 0px);
    transition: transform 0.1s linear 0s;
}

.logo_loading_box .loading {
    position: relative;
    top: 0;
    text-align: center;
    width: 100px;
    height: 100px;
    background: linear-gradient(
        75deg,
        rgba(0, 0, 0, 0.1) 0%,
        rgba(0, 0, 0, 0.2) 100%
    );
    overflow: hidden;
    border-radius: 50%;
    z-index: 10;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
}
.logo_loading_box .loading img {
    position: absolute;
    z-index: 1;
    top: 10px;
    left: 10px;
    width: 80px;
    height: 80px;
}
::selection {
    background-color: salmon;
    color: white;
}

.logo_loading_box .parallax > use {
    animation: move-forever 12s linear infinite;
}
.logo_loading_box .parallax > use:nth-child(1) {
    animation-delay: -2s;
}
.logo_loading_box .parallax > use:nth-child(2) {
    animation-delay: -2s;
    animation-duration: 5s;
}
.logo_loading_box .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 3s;
}

@keyframes move-forever {
    0% {
        transform: translate(-90px, 0%);
    }
    100% {
        transform: translate(85px, 0%);
    }
}
.logo_loading_box .editorial {
    display: block;
    width: 100%;
    height: 1rem;
    max-height: 100vh;
    margin: 0;
}

.logo_loading_box .content {
    text-align: center;
    background-color: #2d55aa;
    height: 95px;
    /* transition-timing-function: ease-in; */
    /* transition-delay: 1s; */
}
</style>
