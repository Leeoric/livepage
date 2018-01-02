<template>
  <div>
    <div class="tab" v-show="showTab">
      <router-link tag="div" class="tab-item" to="/introduce">
        <span class="tab-link">简介</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/comment" v-show="showComment">
        <span class="tab-link">评论</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/document-list" v-show="showDocument">
        <span class="tab-link">文档</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/more-video" v-show="showMoreVideo">
        <span class="tab-link">更多</span>
      </router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        showTab: true,
        showDocument: true,
        showMoreVideo: true,
        showComment: true
      }
    },
    beforeCreate () {
    },
    created () {
      this.showTabColumn()
    },
    mounted () {
    },
    computed: {
      ...mapState(['documents', 'moreVideo', 'comment'])
    },
    watch: {
      documents: function () {
        this.showTabColumn()
      },
      moreVideo: function () {
        this.showTabColumn()
      },
      comment: function () {
        this.showTabColumn()
      }
    },
    components: {
    },
    methods: {
      showTabColumn () {
        console.log('tab column data: ---', this.documents.display, this.moreVideo.display, this.comment.display)
        this.showDocument = this.documents.display
        this.showMoreVideo = this.moreVideo.display
        this.showComment = this.comment.display
        if (!this.showDocument && !this.showMoreVideo && !this.showComment) {
          this.showTab = false
          this.$router.push({path: './introduce'})
        } else {
          this.showTab = true
        }
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 44px
    line-height: 44px
    font-size: $font-size-medium
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        padding-bottom: 5px
        color: $color-text-l
      &.router-link-active
        .tab-link
          color: $color-theme
          border-bottom: 2px solid $color-theme
</style>
