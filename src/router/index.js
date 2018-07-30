import Vue from 'vue';
import Router from 'vue-router';
import Build from '@/components/pages/Build';
import Oglasi from '@/components/pages/Oglasi';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Build',
      component: Build,
    },
    {
      path: '/oglasi/',
      name: 'Oglasi',
      component: Oglasi,
    },
    {
      path: '/oglas/:oglasId',
      name: 'Oglasi',
      component: Oglasi,
    },
  ],
});
