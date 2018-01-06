<template>
    <transition name="fade">
        <router-view class="view"></router-view>
    </transition>
</template>

<script>

</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
