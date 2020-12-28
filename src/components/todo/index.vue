<template>
  <div class="todo">

    <div class="todo-form">
      <a-input
        placeholder="请输入任务"
        class="todo-input-value"
      />
      <a-button type="primary">添加事项</a-button>
    </div>

    <a-list bordered :dataSource="list" class="todo-list">
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox>{{ item.info }}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions">删除</a>
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
import { mapState } from 'vuex'

export default {
  name: 'app',
  data () {
    return {}
  },
  created () {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['list'])
  },
  methods: {
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
