<template>
    <div class="seawave_box" v-show="showdindow">
        <div class="loading">
            <!--Waves Container-->
            <div class="bolang" :style="boLangStyle">
                <svg
                    class="editorial"
                    :style="{ height: bolangHeight + 'rem' }"
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
                <!-- :style="{
                        height: animal ? heightH + 'vh' : '30vh',
                        'transition-duration': speel + 's',
                        'min-height': minHeight+'vh'
                    }" -->
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
            time: 2, // 升时间
            showdindow: false, // 是否显示
            speel: 0, // 速度
            heightH: 0, // 高度
            minHeight: 0, // 最小高度
            maxHeight: 0,
            bolangHeight: null,
            boLangStyle: {},
        };
    },
    beforeCreate() {},
    created() {
        let self = this;
        setTimeout(() => {
            let maxHeight = 100;
            if (_self.myConfig != undefined && _self.myConfig != null) {
                // if (_self.myConfig.heightH) {
                //     self.heightH = _self.myConfig.heightH;
                //     maxHeight = _self.myConfig.heightH;
                // }

                if (_self.myConfig.animal) self.animal = _self.myConfig.animal;
                if (_self.myConfig.bolangHeight)
                    self.bolangHeight = _self.myConfig.bolangHeight;
                self.bolangHeight = _self.myConfig.bolangHeight;
                if (_self.myConfig.time) self.time = _self.myConfig.time;
                if (_self.myConfig.showdindow)
                    self.showdindow = _self.myConfig.showdindow;
                if (_self.myConfig.speel) self.speel = _self.myConfig.speel;
                if (
                    _self.myConfig.minHeight <= 100 &&
                    _self.myConfig.minHeight > 0
                ) {
                    let minHeight = maxHeight - _self.myConfig.minHeight; // 最小高度相反；
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
            }
            self.my_style();
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
                transform: `translate3d(0,100vh, 0)`,
                transition: `transform ${self.speel}s linear 0s`,
            };
        },
        isClickMask() {
            console.log("点到遮罩层了");
        },
        hide() {
            // this.heightH = _self.myConfig.heightH ? _self.myConfig.heightH : 0;
            let self = this;
            clearTimeout(this.t);
            self.boLangStyle = {
                transform: `translate3d(0,100vh, 0px)`,
                transition: `transform ${self.speel}s linear 0s`,
            };

            self.heightH = 100;
            setTimeout(() => {
                this.showdindow = false;
                this.t = null;
            }, 200);
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
            if (self.animal) {
                if (self.heightH < self.maxHeight) {
                    self.heightH = self.maxHeight;
                } else {
                    self.heightH = self.minHeight;
                }
            } else {
                self.heightH = self.minHeight;
            }

            self.boLangStyle = {
                transform: `translate3d(0, ${self.heightH}vh, 0)`,
                transition: `transform ${self.speel}s linear 0s`,
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
.seawave_box {
    width: 100%;
}

.seawave_box .mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
}

.seawave_box .bolang {
    position: absolute;
    bottom: 0;
    width: 100%;
}

.seawave_box .loading {
    position: fixed;
    top: 0;
    text-align: center;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: linear-gradient(
        60deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 1) 100%
    );
    color: white;
}

::selection {
    background-color: salmon;
    color: white;
}

.seawave_box .parallax > use {
    animation: move-forever 12s linear infinite;
}
.seawave_box .parallax > use:nth-child(1) {
    animation-delay: -2s;
}
.seawave_box .parallax > use:nth-child(2) {
    animation-delay: -2s;
    animation-duration: 5s;
}
.seawave_box .parallax > use:nth-child(3) {
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
.seawave_box .editorial {
    display: block;
    width: 100%;
    height: 3em;
    max-height: 100vh;
    margin: 0;
}

.seawave_box .content {
    background-color: #2d55aa;
    height: 95vh;
    position: relative;
    top: -1px;
}
</style>
