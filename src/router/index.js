import { createRouter, createWebHistory } from 'vue-router';
import Bus from '../components/BusLocation.vue';
import Train from '../components/TrainLocation.vue';
import Info from '../components/TrainInfo.vue';
import Config from '../components/SiteConfig.vue';

const routes = [
  { path: '/', name: Bus, component: Bus },
  { path: '/train', name: Train, component: Train },
  { path: '/info', name: Info, component: Info },
  { path: '/config', name: Config, component: Config }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
