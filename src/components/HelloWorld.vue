<template>
  <div class="hello">
    <h1>HelloWorld</h1>
    <SvgIcon name="ad" />
    <SvgIcon name="key" />
    <SvgIcon name="ad" color="red" size="36" />
    <SvgIcon name="key" color="green" size="36" />
    <SvgIcon name="ad" width="60" height="60" />
    <SvgIcon name="key" width="60" height="60" />
  </div>
</template>

<script>
import SvgIcon from '../components/svgicon';

export default {
  name: 'HelloWorld',
  components: {
    SvgIcon,
  },
  data () {
    return {
     
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
