<template>
  <div id="app">
    <transition :name="transitionName">
      <navigation>
        <router-view class="router" />
      </navigation>
    </transition>
  </div>
</template>
<script>
import 'element-ui/lib/theme-chalk/base.css'
export default {
  data() {
    return {
      transitionName: 'el-fade-in-linear'
    }
  },
  created() {
    this.$navigation.on('forward', () => {
      this.transitionName = 'el-fade-in-linear'
    })
    this.$navigation.on('back', () => {
      this.transitionName = 'el-fade-in'
    })
  }
}
</script>

<style lang="less">
#app {
  height: 100vh;
  font-family: PingFangSC-Regular;
  background-color: #f1f3f5;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/** 解决路由切换动画上下闪动问题 */
.router {
  position: absolute;
  top: safe-area-inset-top;
  top: env(safe-area-inset-top);
  width: 100%;
  transition: all 0.377s ease;
  backface-visibility: hidden;
}
</style>
