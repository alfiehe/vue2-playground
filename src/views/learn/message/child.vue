<template>
  <section>
    <h4>Child</h4>
    <slot></slot>
    <p><button @click="sendMsg">send to father</button></p>
    <p><button @click="sendMsgBus">send to father bus</button></p>
  </section>
</template>

<script>
import Bus from '../../../components/bus';

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
      this.$emit('customEvent', this.data.join(' '));
    },
    sendMsgBus: function () {
      Bus.$emit('busEvent', this.data.join(' '));
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
h4 {
  font-weight: bold;
}
</style>
