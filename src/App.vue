<template>
  <div id="app">
    <nav>
      <router-link v-for="route in routes" :key="route.path" :to="route.path">{{
        route.name
      }}</router-link>
    </nav>
    <article>
      <router-view />
    </article>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      routes: []
    };
  },
  created () {
    this.$router.options.routes.forEach((item, index) => {
      if (index === 0) {
        return;
      }
      this.routes.push({
        name: item.name,
        path: item.path
      });
    });
  },
  // computed: {
  //   routes () {
  //     return this.$router.options.routes.splice(0, 1);
  //   }
  // },
  mounted () {
    console.log('===app this===', this.$router.options.routes);
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Merienda&display=swap");
#app {
  font-family: "Merienda", Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #222;
}
</style>
<style scoped>
nav {
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
}
nav > a {
  display: block;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
  font-family: "Merienda", Helvetica, Arial;
}
article {
  padding: 30px;
}
</style>
