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
//  import * as apiConfig from 'api/config'
  import VideoBox from 'components/video-box/VideoBox'
  import Tab from 'components/tab/Tab'
  import Logo from 'components/logo/Logo'
  import * as mutationParams from './store/mutation-types'

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
//        api.getData(apiConfig.connector.getMeetingDetail, 'GET', '')
        api.getData('/news/index', 'get', 'type=top&key=123456')
          .then(res => {
            console.log('mock data: ', res)
            // TODO 提交结果到state
            this.$store.commit(mutationParams.SET_MEETING_TITLE, res.meetingTitle)
            this.$store.commit(mutationParams.SET_SPEAKER, res.speaker)
            this.$store.commit(mutationParams.SET_PREVIEW, res.preview)
            this.$store.commit(mutationParams.SET_VIDEO, res.data.video)
            this.$store.commit(mutationParams.SET_INTRODUCE, res.data.introduce)
            this.$store.commit(mutationParams.SET_DOCUMENTS, res.data.documents)
            this.$store.commit(mutationParams.SET_MORE_VIDEO, res.data.moreVideo)
            this.$store.commit(mutationParams.SET_COMMENT, res.data.comment)
            this.$store.commit(mutationParams.SET_MEETING_ID, res.meetingId)
            this.$store.commit(mutationParams.SET_SERVER_TIME_STAMP, res.serverTimeStmp)
            this.$store.commit(mutationParams.SET_START_TIME, res.startTime)
          })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "./common/stylus/variable"

  #app {
    max-width: 750px
    color: $color-theme
    overflow: hidden
    margin: 0 auto
  }
</style>
