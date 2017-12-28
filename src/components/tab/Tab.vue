<template>
  <div>
    <div class="tab">
      <router-link tag="div" class="tab-item" to="/introduce">
        <span class="tab-link">简介</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/comment">
        <span class="tab-link">评论</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/document-list">
        <span class="tab-link">文档</span>
      </router-link>
      <router-link tag="div" class="tab-item" to="/more-video">
        <span class="tab-link">更多</span>
      </router-link>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
      }
    },
    components: {
    },
    methods: {
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
