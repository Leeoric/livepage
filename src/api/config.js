const baseUrl = '47.104.6.119'
const basePort = '8081'

export const connector = {
  getMeetingDetail: '//' + baseUrl + ':' + basePort + '/getMeetingDetail'
}

export const emptyData = {
  meetingId: 0,
  serverTimeStmp: 0,
  startTime: 0,
  preview: '',
  meetingTitle: '这场会议消失在宇宙深处了...',
  speaker: '',
  data: {
    video: {
      image: 'static/images/preview.jpg',
      display: false,
      detail: []
    },
    introduce: {
      display: true,
      detail: ''
    },
    documents: {
      display: '',
      detail1: [{
        type: '',
        url: ''
      }]
    },
    moreVideo: {
      display: '',
      detail: [
        {
          preview: '',
          title: '',
          speaker: '',
          date: ''
        }
      ]
    },
    comment: {
      display: false
    }
  }
}
