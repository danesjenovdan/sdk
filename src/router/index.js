import Vue from 'vue';
import Router from 'vue-router';
import Build from '@/components/pages/Build.vue';
import Oglasi from '@/components/pages/Oglasi.vue';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: '/sdk/',
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

router.beforeEach((to, from, next) => {
  if (from.name === 'Build') {
    window.scrollTo(0, 0);
  }
  next();
});

export default router;
