<template>
  <div class="todo">

    <div class="todo-form">
      <el-input
        placeholder="请输入内容"
        class="todo-input-value"
        v-model="inputValue"
      ></el-input>
      <el-button type="primary" @click="handleAddTodo">添加事项</el-button>
    </div>

    <a-list bordered :dataSource="list" class="todo-list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox
          :checked="item.done"
          @change="(e) => {
            handleChangeStatus(e, item.id)
          }">{{ item.info }}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click="delTodo(item.id)">删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div slot="footer" class="todo-footer">
        <!-- 未完成的任务个数 -->
        <span>0条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button type="primary">全部</a-button>
          <a-button>未完成</a-button>
          <a-button>已完成</a-button>
        </a-button-group>
        <!-- 把已经完成的任务清空 -->
        <a>清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      inputValue: ''
    }
  },
  created () {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
    handleAddTodo () {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.error('内容不能为空')
      }
      this.$store.commit('setInputValue', this.inputValue)
      this.$store.commit('addTodo')
    },
    delTodo (id) {
      this.$store.commit('delTodo', id)
    },
    handleChangeStatus (e, id) {
      console.log('===handleChangeStatus===', e.target.checked, id)
      const payload = {
        id,
        status: e.target.checked
      }
      this.$store.commit('changeStatus', payload)
    },
    ...mapMutations(['setInputValue'])
  },
  mounted () {
    console.log('===mounted===', this.inputValue)
  }
}
</script>

<style scoped>
.todo {
  padding: 30px;
  width: 860px
}
.todo-form {
  display: flex;
}

.todo-input-value {
  flex: 1;
  margin-right: 10px;
}

.todo-list {
  margin-top: 10px;
}

.todo-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
