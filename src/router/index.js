import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Todo from '@/components/todo';
import Pos from '@/views/pos';
import shortkey from '@/views/shortkey';
import learn from '@/views/learn';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    {
      path: '/learn',
      name: 'learn',
      component: learn
    }
  ]
});
