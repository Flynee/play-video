<template>
    <div class="video-player" :style="{ width: width + 'px', height: height + 'px'}">
        <!-- 默认主窗口 -->
        <div class="main-box" :style="{width: mainData.width + 'px', height: mainData.height + 'px','z-index': mainData.zIndex}">
            <div class="container">
                <div class="play-container" ref="mainEl"></div>
                <div :class="['mask', clickKey === 'main' ? 'free-click' : '']" @click="switchToMain" ></div>
            </div>
        </div>
        <!-- 默认副窗口 -->
        <div class="sub-box" :style="{width: subData.width + 'px', height: subData.height + 'px','z-index': subData.zIndex}">
            <div class="container">
                <div class="play-container" ref="subEl"></div>
                <div :class="['mask', clickKey === 'sub' ? 'free-click' : '']"  @click="switchToMain" ></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'HLSPlayer',
    props: ['mainVideo', 'subVideo'],
    data: () => ({
        width: 800,
        height: 600,
        clickKey: 'sub',
        mainData: {
            width: 800,
            height: 600,
            zIndex: 1,
            pointerEvents: 'none',
        },
        subData: {
            width: 300,
            height: 150,
            zIndex: 2,
            pointerEvents: 'all',
        },
    }),
    watch: {
        mainVideo: {
            handler(newVal) {
                if (newVal) {
                    this.mainData = newVal;
                    this.mainData.zIndex = 1;
                    this.mainData.pointerEvent = 'none';

                    this.width = this.mainData.width;
                    this.height = this.mainData.height;
                }
            },
            deep: true,
            immediate: true,
        },
        subVideo: {
            handler(newVal) {
                if (newVal) {
                    this.subData = newVal;
                    this.subData.zIndex = 2;
                    this.subData.pointerEvent = 'all';
                }
            },
            deep: true,
            immediate: true,
        },
    },
    mounted() {
        this.$nextTick(() => {
            this.initVideo();
        });
    },
    methods: {
        initVideo() {
            const mainEl = this.$refs.mainEl || null;
            const mainSrc = this.mainData.videoSrc || null;
            const libPath = `${window.location.href}static/player/lib/`;

            this.mainPlayer = new GoldPlay(mainEl, {
                sourceURL: mainSrc,
                type: 'HLS',
                libPath,
                playBackRate: 1,
                autoPlay: true,
                preload: true,
                rateList: [],
            });

            const subEl = this.$refs.subEl || null;
            const subSrc = this.subData.videoSrc || null;

            this.subPlayer = new GoldPlay(subEl, {
                sourceURL: subSrc,
                type: 'HLS',
                libPath,
                playBackRate: 1,
                autoPlay: true,
                preload: true,
                rateList: [],
            });
        },
        // 将副窗口切换到主窗口
        switchToMain() {
            const tempData = this.mainData;
            this.mainData = this.subData;
            this.subData = tempData;

            if (this.clickKey === 'main') {
                this.clickKey = 'sub';
            } else {
                this.clickKey = 'main';
            }
        },
    },
};
</script>
<style lang="scss" scoped>
.video-player {
    position: relative;

    .main-box {
        box-sizing: border-box;
        position: absolute;
        background-color: #000;
        border: 1px solid red;
        margin-left: 100%;
        transform: translateX(-100%);

        .container {
            position: relative;
            width: 100%;
            height: 100%;

            .play-container {
                width: 100%;
                height: 100%;
            }

            .mask {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 10;
                cursor: pointer;
                pointer-events: none;
            }

            .free-click {
                pointer-events: all;
            }
        }
    }

    .sub-box {
        @extend .main-box;

        border: 1px solid green;
    }

}
</style>
