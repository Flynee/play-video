<template>
    <div class="home">
        <HLSPlayer :mainVideo="mainVideo" :subVideo="subVideo"/>
    </div>
</template>
<script>
import HLSPlayer from '@/components/HLSPlayer.vue';

export default {
    name: 'Home',
    components: {
        HLSPlayer,
    },
    data: () => ({
        mainVideo: {
            width: 800,
            height: 600,
            videoSrc: `${window.location.href}static/video1/playlist.m3u8`,
        },
        subVideo: {
            width: 300,
            height: 150,
            videoSrc: `${window.location.href}static/video3/playlist.m3u8`,
        },
    }),
    method: {

    },
};
</script>
<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
    background-color: #333;
}
</style>
