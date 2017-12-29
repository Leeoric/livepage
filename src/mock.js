// 引入mockjs
import Mock from 'mockjs'
// mock一组数据
const testData = {
  'data': {
    'video': {
      'display': true,
      'detail': [
        {
          'type': 'rtmp/mp4',
          'src': 'rtmp://live.hkstv.hk.lxdns.com/live.hks'
        },
        {
          'type': 'application/x-mpegURL',
          'src': 'http://live.hkstv.hk.lxdns.com/live/hks/playlist.m3u8'
        }
      ]
    },
    'introduce': {
      'display': '@boolean',
      'detail': '@string(100,1000)'
    },
    'document': {
      'display': '@boolean',
      'detail|1-5': [{
        'type': 'doc',
        'url': '@url'
      }]
    },
    'moreVideo': {
      'display': '@boolean',
      'detail|2-10': [
        {
          'preview': '@string',
          'title': '@ctitle',
          'speaker': '@string(2,8)',
          'date': '@datetime'
        }
      ]
    }
  }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'post', testData)
