<template>
  <section>
    <button @click="sendMsg">send to father</button>
    <slot></slot>
    <slot name="daiboy"></slot>
    <slot name="list" :data="data"></slot>
  </section>
</template>

<script>
export default {
  components: {},

  data () {
    return {
      data: ['山不在高','有仙则名','水不在深','有龙则灵']
    };
  },

  computed: {},

  watch: {},

  methods: {
    sendMsg: function () {
      this.$emit('customEvent', '儿子给老子传点啥东西');
    }
  },

  // 生命周期 - 创建完成（访问当前this实例）
  created () {},

  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {
    
  }
};
</script>
<style scoped>
section {
  display: inline-block;
  vertical-align: top;
  margin: 5px;
  padding: 10px;
  border: 1px solid #eee;
}
</style>
