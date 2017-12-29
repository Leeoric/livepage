<template>
  <div class="video-box" id="videoBox">
    <div class="video-container" ref="videoContainer">
      <div class="video-img" ref="videoImg" v-show="!display">
        <img src="">
      </div>
      <video-player class="video-player-box"
                    v-show="display"
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
  import { mapState } from 'vuex'

  export default {
    name: 'VideoBox',
    data () {
      return {
        display: true,
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
          sources: [],
          poster: './../../assets/preview.png'
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
      this.display = this.video.display
    },
    computed: {
      ...mapState(['video'])
    },
    mounted () {
      this.setPlayerStyle()
      this.showVideo()
    },
    methods: {
      setPlayerStyle () {
        this.playerOptions.width = window.getComputedStyle(this.$refs.videoContainer).width
        const domId = document.querySelector('.video-player-box').children[0].id
        document.querySelector('#' + domId).style.width = '100%'
      },
      showVideo () {
        if (this.display) {
          this.playerOptions.sources = this.video.detail
          this.playerOptions.autoplay = true
        } else {
          if (this.video.image) {
            this.$refs.videoImg.children[0].src = this.video.image
          } else {
            this.$refs.videoImg.children[0].src = 'src/assets/preview.jpg?v=' + new Date().getTime()
          }
        }
      },
      Countdown () {
        // TODO 倒计时功能
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
      .video-img
        width: 100%
        height: 100%
        position: relative
        z-index: 9999
        img
          width: 100%
      .video-player-box
        width: 100%
        height: 100%
</style>
