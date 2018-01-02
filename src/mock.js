// 引入mockjs
import Mock from 'mockjs'
// mock一组数据
const testData = {
  'meetingId': 1101,
  'serverTimeStmp': 1514535607930,
  'startTime': 1614535618461,
  'preview': '@string',
  'meetingTitle': '@ctitle(10.30)',
  'speaker': '@string(2,8)',
  'data': {
    'video': {
      'image': 'http://3c-share.wind.com.cn/UnitedWeb/cmsapp/Sites/3cvideopreloadpic/preload.jpg',
      'display': false,
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
      'display': true,
      'detail': '@string(1000,3000)'
    },
    'documents': {
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
    },
    'comment': {
      'display': false
    }
  }
}
// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/news/index', 'get', testData)
