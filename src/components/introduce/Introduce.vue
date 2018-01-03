<template>
  <div class="column introduce" ref="introduce" v-show="display">
    <div class="meeting-title">
      <h1 ref="meetingTitleText"></h1>
    </div>
    <div class="meeting-detail" ref="meetingDetail"></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapState } from 'vuex'

  export default {
    name: 'introduce',
    data () {
      return {
        display: false,
        introduceDetail: ''
      }
    },
    computed: {
      ...mapState(['introduce', 'meetingTitle'])
    },
    watch: {
      introduce: function () {
        this.showMeetingDetail()
      },
      title: function () {
        this.showMeetingDetail()
      },
      $route: function () {
      }
    },
    beforeCreat () {
    },
    created () {
    },
    mounted () {
      this.showMeetingDetail()
    },
    methods: {
      showMeetingDetail () {
        this.display = this.introduce.display
        this.$refs.meetingTitleText.innerText = this.meetingTitle
        this.$refs.meetingDetail.innerHTML = this.introduce.detail
        console.log('introduce components title and detail: ---', this.meetingTitle, '---', this.introduce)
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .introduce
    .meeting-title
      border-bottom: 1px solid #797979
      margin-bottom: 10px
      h1
        font-size: 18px
        font-weight: normal
        line-height: 40px
    .meeting-detail
      word-wrap: break-word
</style>
