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
  import * as mutationParams from './store/mutation-types'

  export default {
    name: 'app',
    data () {
      return {
        meetingId: 0
      }
    },
    components: {
      VideoBox, Tab, Logo
    },
    beforeCreate () {
      console.log('%c beforeCreate route: ----------', 'background:#000;color:#fff', this.$route)
    },
    created () {
      console.log('%c created route: ----------', 'background:#000;color:#fff', this.$route)
      if (this.$route.query.meetingId) {
        this.meetingId = this.$route.query.meetingId
        this.getPageData()
      } else {
        this.commitToState(apiConfig.emptyData)
      }
    },
    mounted () {
      console.log('%c mounted route: ----------', 'background:#000;color:#fff', this.$route)
    },
    watch: {
      meetingId () {
        console.log('000-------', this.meetingId)
      },
      $route: function () {
        console.log('%c route has changed: ----------', 'background:#000;color:#fff', this.$route)
      }
    },
    methods: {
      getPageData () {
//        api.getData(apiConfig.connector.getMeetingDetail, 'get', 'meetingId=' + this.meetingId)
        api.getData('/news/index', 'get', 'meetingId=' + this.meetingId)
          .then(res => {
            console.log('res data: ', res)
            console.log('%c meeting id:', 'color:#f00;background:#000', this.meetingId)
            this.commitToState(res)
          })
      },
      commitToState (res) {
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
