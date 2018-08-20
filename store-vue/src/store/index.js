import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal: false
  },
  mutations: {
    modalFlag (state, flag) {
      state.showModal = flag
    }
  }
})
