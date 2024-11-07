import { createRouter, createWebHistory } from 'vue-router';
import AddTask from '../views/AddTask.vue';
import CombinedView from '@/views/CombinedView.vue';
import TaskList from '@/views/TaskList.vue';
import AboutView from '@/views/AboutView.vue';
import HomeView from '@/views/HomeView.vue';

const routes = [
  { path: '/AddTask', component: AddTask },
  { path: '/CombinedView', component: CombinedView },
  { path: '/TaskList', component: TaskList },
  { path: '/AboutView', component: AboutView },
  { path: '/Homeview', component: HomeView }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;