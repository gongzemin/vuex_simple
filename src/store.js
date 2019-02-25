import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    testMsg: '原始文本',
    childText: '子组件原始文本'
  },
  mutations: {
    changeTestMsg (state, str) {
      state.testMsg = str
    },
    changeChildText (state, str) {
      state.childText = str
    }
  }
})
