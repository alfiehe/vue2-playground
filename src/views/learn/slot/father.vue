<template>
  <section>
    <h4>Father</h4>
    <Child @customEvent="recvMsg">
      <h4>子传父</h4>
      <p>{{ childMsg }}</p>
    </Child>
    <Child>
      <h4>slot</h4>
      匿名插槽
      <div slot="daiboy">具名插槽</div>
    </Child>
    <Child>
       <h4>v-slot</h4>
      <template v-slot:daiboy>
        <div>v-slot 具名插槽</div>
      </template>
    </Child>
    <Child>
      <h4>slot-scope</h4>
      <template slot="list" slot-scope="list">
        <ul>
          <li v-for="item in list.data">{{item}}</li>
        </ul>
      </template>
    </Child>
  </section>
</template>

<script>
import Child from './child';

export default {
  components: {
    Child,
  },

  data () {
    return {
      childMsg: '',
    };
  },

  computed: {},

  watch: {},

  methods: {
    recvMsg: function (msg) {
      console.log('===老子接收儿子的数据===', msg);
      this.childMsg = msg;
    }
  },

  // 生命周期 - 创建完成（访问当前this实例）
  created () {},

  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {}
};
</script>
<style scoped>
section {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 1px solid #eee;
}
</style>
