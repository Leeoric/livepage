import Vue from 'vue'
import Router from 'vue-router'
import Introduce from 'components/introduce/Introduce'
import MoreVideo from 'components/more-video/MoreVideo'
import Comment from 'components/comment/Comment'
import DocumentList from 'components/document-list/DocumentList'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/introduce'
    },
    {
      path: '/introduce',
      component: Introduce
    },
    {
      path: '/more-video',
      component: MoreVideo
    },
    {
      path: '/comment',
      component: Comment
    },
    {
      path: '/document-list',
      component: DocumentList
    }
  ]
})
