<template>
  <section>
   <Father />
  </section>
</template>

<script>
import Father from './father';
// import Bus from './bus';

export default {
  components: {
    Father
  },

  data () {
    return {

    };
  },

  computed: {
  },

  watch: {},

  methods: {},

  // 生命周期 - 创建完成（访问当前this实例）
  created () {},

  // 生命周期 - 挂载完成（访问DOM元素）
  mounted () {},
  };
</script>
<style scoped>

</style>