import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [],
    inputValue: ''
  },
  mutations: {
    // 修改列表数据
    initList (state, list) {
      state.list = list
    },
    setInputValue (state, val) {
      state.inputValue = val
    },
    addTodo (state) {
      const obj = {
        id: state.list.length,
        info: state.inputValue.trim(),
        done: false
      }
      state.list.push(obj)
      state.inputValue = ''
    },
    delTodo (state, id) {
      state.list = state.list.filter(item => {
        return item.id !== id
      })
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
