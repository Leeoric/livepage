<template>
  <div class="video-box">
    <div class="video-container" ref="videoContainer">
      <video-player class="video-player-box"
                    ref="videoPlayer"
                    :options="playerOptions"
                    :playsinline="true"
                    customEventName="customstatechangedeventname"
                    @play="onPlayerPlay($event)"
                    @pause="onPlayerPause($event)"
                    @ended="onPlayerEnded($event)"
                    @waiting="onPlayerWaiting($event)"
                    @playing="onPlayerPlaying($event)"
                    @loadeddata="onPlayerLoadeddata($event)"
                    @timeupdate="onPlayerTimeupdate($event)"
                    @canplay="onPlayerCanplay($event)"
                    @canplaythrough="onPlayerCanplaythrough($event)"
                    @statechanged="playerStateChanged($event)"
                    @ready="playerReadied">
      </video-player>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import api from 'api/api'

  export default {
    name: 'VideoBox',
    data () {
      return {
        streams: {
          rtmp: '',
          hls: ''
        },
        playerOptions: {
          overNative: true,
          autoplay: false,
          controls: true,
          width: '375',
          height: '320',
          techOrder: ['flash', 'html5'],
          sourceOrder: true,
          flash: {hls: {withCredentials: false}},
          html5: {hls: {withCredentials: false}},
          sources: []
//          poster: '/vue-videojs-demo/static/images/logo.png',
//          controlBar: {
//            timeDivider: false, // 时间分割线
//            durationDisplay: false, // 总时间
//            progressControl: true, // 进度条
//            customControlSpacer: true, // 未知
//            fullscreenToggle: true // 全屏
//          }
        }
      }
    },
    beforeCreate () {
    },
    created () {
      this.setNewsApi()
    },
    computed: {
      player () {
        return this.$refs.videoPlayer.player
      }
    },
    mounted () {
      const domId = document.querySelector('.video-player-box').children[0].id
      document.querySelector('#' + domId).style.width = '100%'
    },
    methods: {
      setNewsApi () {
        api.JH_news('/news/index', 'type=top&key=123456')
          .then(res => {
//            console.log('mock data is : ----', res)
//            console.log('mock video url is : ----', res.data.video.detail)
            if (res.data.video.display === true) {
              this.playerOptions.sources = res.data.video.detail
              this.playerOptions.autoplay = true
              this.playerOptions.width = getComputedStyle(this.$refs.videoContainer).width
            }
          })
      },
      onPlayerPlay (event) {
        console.log(event)
      },
      onPlayerPause (event) {
        console.log(event)
      },
      onPlayerEnded (event) {
        console.log(event)
      },
      onPlayerWaiting (event) {
        console.log(event)
      },
      onPlayerPlaying (event) {
        console.log(event)
      },
      onPlayerLoadeddata (event) {
        console.log(event)
      },
      onPlayerTimeupdate (event) {
        console.log(event)
      },
      onPlayerCanplay (event) {
        console.log(event)
      },
      onPlayerCanplaythrough (event) {
        console.log(event)
      },
      playerStateChanged (event) {
        console.log(event)
      },
      playerReadied () {
        console.log('playerReadied')
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .video-box
    position: relative
    width: 100%
    height: 320px
    text-align: center
    color: $color-theme
    font-size: 0
    .video-container
      position: absolute
      top: 0
      width: 100%
      height: 320px
      .video-player-box
        width: 100%
        height: 100%
</style>
