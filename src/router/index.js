import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../views/Home.vue');
const About = () => import('../views/About.vue');
const Jobs = () => import('../views/Jobs.vue');
const JobDetail = () => import('../views/JobsDetail.vue');
const NotFound = () => import('../views/NotFound.vue');

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobsDetail',
    component: JobDetail
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: NotFound
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
