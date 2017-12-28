import Vue from 'vue'
import Router from 'vue-router'
import Introduce from 'components/introduce/Introduce'
import MoreVideo from 'components/more-video/MoreVideo'
import Comment from 'components/comment/Comment'
import DocumentList from 'components/document-list/DocumentList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/introduce',
      name: 'Introduce',
      component: Introduce
    },
    {
      path: '/more-video',
      name: 'MoreVideo',
      component: MoreVideo
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/document-list',
      name: 'DocumentList',
      component: DocumentList
    }
  ]
})
