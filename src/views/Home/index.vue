<template>
  <div>
    <h1>Home</h1>
    <h2 ref="msgRef">{{ msg }}</h2>
    <button @click="updateMessage">update message</button>
  </div>
</template>

<script>
export default {
  components: {},

  data () {
    return {
      msg: '123',
      hours: []
    };
  },

  computed: {},

  watch: {},

  methods: {
    updateMessage () {
      this.msg = 'updated';
      console.log('===updateMessage===01===', this.$refs.msgRef.textContent);
      this.$nextTick(() => {
        console.log('===updateMessage===02===', this.$refs.msgRef.textContent);
      });
    }
  },

  // 生命周期 - 创建完成（访问当前this实例）
  created () {
    // 使用 Array.from 快速生成数组
    this.hours = Array.from({ length: 20 }, (value, index) => index + '时');
  },

  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    console.log('===hours===', this.hours);
  }
};
</script>
<style scoped></style>
