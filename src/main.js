// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VueVideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'
import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'
// import fastclick from 'fastclick'
import App from './App'
import router from './router'

import './common/stylus/index.styl'
require('./mock.js')

Vue.use(MintUI)
Vue.use(VueVideoPlayer)
Vue.config.productionTip = false

// fastclick.attach(document.body)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {App}
})
