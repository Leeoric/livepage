import * as types from './mutation-types'

const mutions = {
  [types.SET_MEETING_TITLE] (state, meetingTitle) {
    state.meetingTitle = meetingTitle
  },
  [types.SET_SPEAKER] (state, speaker) {
    state.meetingId = speaker
  },
  [types.SET_MEETING_ID] (state, meetingId) {
    state.meetingId = meetingId
  },
  [types.SET_SERVER_TIME_STAMP] (state, serverTimeStmp) {
    state.serverTimeStmp = serverTimeStmp
  },
  [types.SET_START_TIME] (state, startTime) {
    state.startTime = startTime
  },
  [types.SET_PREVIEW] (state, preview) {
    state.preview = preview
  },
  [types.SET_VIDEO] (state, video) {
    state.video = video
  },
  [types.SET_INTRODUCE] (state, introduce) {
    state.introduce = introduce
  },
  [types.SET_DOCUMENTS] (state, documents) {
    state.documents = documents
  },
  [types.SET_MORE_VIDEO] (state, moreVideo) {
    state.moreVideo = moreVideo
  },
  [types.SET_COMMENT] (state, comment) {
    state.comment = comment
  }
}

export default mutions
