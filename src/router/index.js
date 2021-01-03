import Vue from 'vue';
import Router from 'vue-router';
import Todo from '@/views/todo';
import Pos from '@/views/pos';
import shortkey from '@/views/shortkey';
import learn from '@/views/learn';

Vue.use(Router);

export default new Router({
  routes: [
    { 
      path: '/', 
      redirect: '/learn'
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
