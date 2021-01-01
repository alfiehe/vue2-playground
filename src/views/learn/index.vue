<template>
  <div class="learn">
    <h1>learn</h1>
    <h2>directive 自定义指令</h2>
    <input type="text" placeholder="我是全局自定义指令" v-focus />
    <input type="text" placeholder="我是局部自定义指令" v-focusNative />
    <ul class="imglist">
      <li v-for="img in imgList" :key="img.id">
        <img v-imgLazy="img.url" />
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';

// 全局注册指令
Vue.directive('focus', {
  inserted: (el) => {
    el.focus();
  }
});

Vue.directive('image', {
  inserted: (el, binding) => {
    console.log('===v-image===', el, binding);
    setTimeout(() => {
      el.setAttribute('src', binding.value);
    }, Math.random * 20000);
  }
});

export default {
  name: 'learn',
  // 局部注册指令
  directives: {
    focusNative: {
      inserted: (el) => {
        el.focus();
      }
    }
  },
  data () {
    return {
      imgList: [
        {
          id: 1,
          url: '//inews.gtimg.com/newsapp_ls/0/12986771526_485350/0'
        },
        {
          id: 2,
          url: '//inews.gtimg.com/newsapp_ls/0/12986751034_485350/0'
        },
        {
          id: 3,
          url: '//inews.gtimg.com/newsapp_ls/0/12986379673_485350/0'
        }
      ],
    };
  },
  methods: {
   
  },
  mounted () {
  },
  beforeDestroy () {
  }
};
</script>

<style scoped>
.imglist {
  display: flex;
  justify-content: center;
  list-style: none;
}
.imglist > li {
  margin: 5px;
}
.imglist > li img {
  display: block;
  width: 150px;
  height: 150px;
  object-fit: cover;
}
</style>
