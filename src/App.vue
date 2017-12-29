<template>
  <div id="app">
    <video-box></video-box>
    <logo></logo>
    <tab></tab>
    <transition>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import api from 'api/api'
  import * as apiConfig from 'api/config'
  import VideoBox from 'components/video-box/VideoBox'
  import Tab from 'components/tab/Tab'
  import Logo from 'components/logo/Logo'

  export default {
    name: 'app',
    components: {
      VideoBox, Tab, Logo
    },
    beforeCreate () {
      if (this.$route.path === '/') {
        this.$router.push({path: '/introduce'})
      }
    },
    created () {
      this.getPageData()
    },
    mounted () {
    },
    methods: {
      getPageData () {
        api.getData(apiConfig.connector.getMeetingDetail, 'GET', '')
          .then(res => {
            console.log('mock data is : ----', res)
            console.log('mock video url is : ----', res.data.video.detail)
            if (res.data.video && res.data.video.display === true) {
              // TODO 提交结果到state
            }
          })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/variable"

  #app {
    color: $color-theme
  }
</style>
