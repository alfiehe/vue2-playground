<!--
 * @Author: alfiehe
 * @Date: 2021-01-07 08:06:56
 * @LastEditors: alfiehe
 * @LastEditTime: 2021-01-07 11:03:22
 * @Description: null
 * @FilePath: /vue2-playground/src/ui/button/index.vue
-->
<template>
  <button
    :class="ui-button"
    >
    <slot></slot>
  </button>
</template>

<script>

export default {

  name: 'UiButton',
  
  components: {},

  data () {
    return {

    };
  },

  computed: {},

  watch: {},

  methods: {},

  // 生命周期 - 创建完成（访问当前this实例）
  created () {},

  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {},
  };
</script>
<style scoped>
.ui-button {
  background-color: red;
}
</style>