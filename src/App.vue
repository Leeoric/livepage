<template>
  <div id="app">
    <video-box></video-box>
    <router-view/>
  </div>
</template>

<script type="text/ecmascript-6">
  import VideoBox from 'components/video-box/VideoBox'

  export default {
    name: 'app',
    components: {
      VideoBox
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
