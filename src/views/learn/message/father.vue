<template>
  <section>
    <h4>Father</h4>
    <Child @customEvent="recvMsg">
      <p>{{ childMsg }}</p>
    </Child>
    <Child ref="childRef">
      <p>{{ childMsg }}</p>
    </Child>
  </section>
</template>

<script>
import Child from './child';
import Bus from '../../../components/bus';

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
      this.childMsg = msg;
    },
  },

  // 生命周期 - 创建完成（访问当前this实例）
  created () {
    Bus.$on('busEvent', (data) => {
      console.log('===busEvent===', data);
      this.childMsg = data;
    });
  },

  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    console.log('ref===', this.$refs.childRef);
  }
};
</script>
<style scoped>
section {
  display: inline-block;
  margin: 5px;
  padding: 10px;
  border: 1px solid #eee;
}
h4 {
  font-weight: bold;
  font-size: 18px;
}
</style>
