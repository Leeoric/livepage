<template>
  <div id="app">
    <video-box></video-box>
    <tab></tab>
    <transition>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import VideoBox from 'components/video-box/VideoBox'
  import Tab from 'components/tab/Tab'

  export default {
    name: 'app',
    components: {
      VideoBox, Tab
    },
    methods: {
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/variable"

  #app {
    color: $color-theme
  }
</style>
