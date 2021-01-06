import Vue from 'vue';
import Router from 'vue-router';
import Todo from '@/views/todo';
import Pos from '@/views/pos';
import shortkey from '@/views/shortkey';
import learn from '@/views/learn';

Vue.use(Router);

// 动态加载页面，懒加载
const Home = () => import('@/views/Home');

// Demo
const Demo = () => import('@/views/Demo');
const DirectiveDemo = () => import('@/views/Demo/DirectiveDemo');
const SlotDemo = () => import('@/views/Demo/DirectiveDemo');

export default new Router({
  routes: [
    { 
      path: '/', 
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo,
      children: [
        {
          path: '/demo/directive',
          name: 'DirectiveDemo',
          component: DirectiveDemo,
        },
        {
          path: '/demo/slot',
          name: 'SlotDemo',
          component: SlotDemo,
        },
      ]
    },
    {
      path: '/learn',
      name: 'learn',
      component: learn
    },
    {
      path: '/todo',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/pos',
      name: 'Pos',
      component: Pos
    },
    {
      path: '/shortkey',
      name: 'shortkey',
      component: shortkey
    },
  ]
});
