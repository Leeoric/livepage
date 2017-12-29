<template>
  <div class="column introduce" ref="introduce" v-show="display">
    <div class="meeting-title">
      <h1 ref="meetingTitle"></h1>
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
      ...mapState(['introduce'])
    },
    beforeCreat () {
    },
    created () {
      this.display = this.introduce.display
    },
    mounted () {
      if (this.display) {
        this.showMeetingDetail()
      }
    },
    methods: {
      showMeetingDetail () {
        if (!this.introduce.title) {
          this.$refs.meetingTitle.innerText = '暂无标题'
        } else if (!this.introduce.detail) {
          this.$refs.meetingDetail.innerHTML = '暂无内容'
        }
        this.$refs.meetingTitle.innerText = this.introduce.title
        this.$refs.meetingDetail.innerHTML = this.introduce.detail
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
</style>
