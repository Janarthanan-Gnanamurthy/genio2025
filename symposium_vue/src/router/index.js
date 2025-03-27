import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TechnicalEvents from '../views/TechnicalEvents.vue';
import NonTechnicalEvents from '../views/NonTechnicalEvents.vue';
import FunRoom from '../views/FunRoom.vue';
import Workshop from '../views/Workshop.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/technical',
    name: 'TechnicalEvents',
    component: TechnicalEvents
  },
  {
    path: '/non-technical',
    name: 'NonTechnicalEvents',
    component: NonTechnicalEvents
  },
  {
    path: '/fun-room',
    name: 'FunRoom',
    component: FunRoom
  },
  {
    path: '/workshop',
    name: 'Workshop',
    component: Workshop
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router; 