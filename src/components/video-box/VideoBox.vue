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
          width: '700',
          height: '320',
          techOrder: ['flash', 'html5'],
          sourceOrder: true,
          flash: {hls: {withCredentials: false}},
          html5: {hls: {withCredentials: false}},
          sources: []
//          poster: 'src/assets/preview.jpg'
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
    },
    computed: {
      ...mapState(['video'])
    },
    watch: {
      video: function () {
        console.log('watched video had changed', this.video)
        this.showVideo()
      }
    },
    mounted () {
      this.setPlayerStyle()
      this.showVideo()
      console.log('video info: ----', this.video)
    },
    methods: {
      setPlayerStyle () {
        this.playerOptions.width = window.getComputedStyle(this.$refs.videoContainer).width
        const domId = document.querySelector('.video-player-box').children[0].id
        document.querySelector('#' + domId).style.width = '100%'
      },
      showVideo () {
        console.log('show video function', this.video)
        this.display = this.video.display
        if (this.video.display) {
          this.playerOptions.sources = this.video.detail
          this.playerOptions.autoplay = this.video.display
        } else {
          if (this.video.image) {
            this.$refs.videoImg.children[0].src = this.video.image
          } else {
            this.$refs.videoImg.children[0].src = 'static/images/preview.jpg'
          }
        }
      },
      Countdown () {
        // TODO 倒计时功能
      },
      playerReadied (e) {
        console.log('playerReadied', e)
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
        overflow: hidden
        img
          width: 100%
      .video-player-box
        width: 100%
        height: 100%
</style>
