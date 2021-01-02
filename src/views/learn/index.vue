<template>
  <div class="learn">
    <h1>Learn</h1>
    <section>
      <h2>Vue.use()</h2>
      <Loading></Loading>
    </section>
    <section>
      <h2>Message</h2>
      <Message></Message>
    </section>
    <section>
      <h2>Solt</h2>
      <SlotFather></SlotFather>
    </section>
    <section>
      <h2>directive</h2>
      <h3>v-focus</h3>
      <input type="text" placeholder="我是全局自定义指令" v-focus />
      <input type="text" placeholder="我是局部自定义指令" v-focusNative />
      <h3>v-imgLazy</h3>
      <ul class="imglist">
        <li v-for="img in imgList" :key="img.id">
          <img v-imgLazy="img.url" />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Vue from 'vue';
import SlotFather from './slot/father';
import Message from './message';

// 全局注册指令
Vue.directive('focus', {
  inserted: el => {
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
      inserted: el => {
        el.focus();
      }
    }
  },
  components: {
    SlotFather,
    Message,
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
      ]
    };
  },
  methods: {},
  mounted () {},
  beforeDestroy () {}
};
</script>

<style scoped>
section {
  margin: 15px;
  padding: 15px;
  border: 1px solid #ddd;
}
h1 {
  font-size: 42px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
}
h2 {
   font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
}
h3 {
   font-size: 16px;
  font-weight: bold;
  margin-top: 15px;
  margin-bottom: 15px;
}
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
