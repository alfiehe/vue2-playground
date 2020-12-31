<template>
  <span
    class="svgicon"
    :style="mapStyle"
    v-html="require(`!!html-loader!@/assets/svgicon/${name}.svg`)"
    v-once
  />
</template>

<style scoped>
.svgicon {
  display: inline-block;
  width: 18px;
  height: 18px;
  color: currentColor;
}
.svgicon >>> svg {
  display: inline-block;
  height: 100%;
  width: 100%;
  fill: currentColor;
}
</style>

<script>
export default {
  props: {
    name: {
      default: '',
      type: String
    },
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    size: {
      type: [Number, String],
      default: null
    },
    color: {
      type: String,
      default: null
    },
  },
  data () {
    return {
      mapClass: {

      },
      mapStyle: {
        width: this.size ? (this.size + 'px') : (this.width + 'px'), 
        height: this.size ? (this.size + 'px') : (this.height + 'px'), 
        color: this.color,
      }
    };
  },
  mounted () {
    const svgElement = this.$el.querySelector('svg');
    // 移除svg一些没用的属性和节点
    svgElement.removeAttribute('version');
    svgElement.removeAttribute('xmlns');
  }
};
</script>
