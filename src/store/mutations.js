export default {
  changeHost: function (state, payload) {
    console.debug('mutation: ', state, payload)
    state.hostString.currentHost.value = payload.value
  }
}
