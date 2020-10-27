const mutations = {
  getClients (state, payload) {
    state.clients = payload
  },
  newClient (state, payload) {
    state.clients.push(payload)
  }
}

export default mutations
