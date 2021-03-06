const axios = require("axios");

const actions = {
  async getClients ({ commit }) {
    axios.get('http://127.0.0.1:3000/clients')
      .then(response => {
        commit('getClients', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  async newClient ({ commit }, client) {
    await axios.post('http://127.0.0.1:3000/clients', client)
      .then(response => {
        commit('newClient', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default actions
