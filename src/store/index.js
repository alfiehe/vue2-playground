import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    inputValue: 'init...'
  },
  mutations: {
    // 修改列表数据
    initList (state, list) {
      state.list = list
    },
    setInputValue (state, val) {
      state.inputValue = val
    }
  },
  actions: {
    // 获取JSON数据
    getList (context) {
      axios.get('/static/mock/todoList.json').then(res => {
        console.log('===getList===res===', res)
        context.commit('initList', res.data)
      })
    }
  },
  getters: {
  }
})
