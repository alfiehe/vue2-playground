<template>
  <div>
    <h1>UI全局组件</h1>
    <section>
      <h2>Button</h2>
      <ui-button>按钮组件</ui-button>
    </section>
    <section>
      <h2>Input</h2>
      <ui-input />
    </section>
  </div>
</template>

<script>
export default {
  components: {},

  data () {
    return {
    };
  },

  computed: {},

  watch: {},

  methods: {
  },

  created () {
  },

  mounted () {
  }
};
</script>
<style scoped>
section {
  margin: 20px;
  padding: 20px;
  border: 1px solid #eee;
}
h1 {
  font-weight: bold;
  font-size: 48px;
}
h2 {
  font-weight: bold;
  font-size: 18px;
}
</style>

