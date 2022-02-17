<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script>
export default {
    name: 'APP',
};
</script>

<style lang="scss">
@import url('~@/assets/scss/global.scss');

html,
body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
}

#app {
    width: 100%;
    height: 100%;
    color: #2c3e50;
    font-family: SourceHanSansCN, DIN-Regular, ALi-Puhuiti, sans-serif;
    user-select: none;
}
</style>
