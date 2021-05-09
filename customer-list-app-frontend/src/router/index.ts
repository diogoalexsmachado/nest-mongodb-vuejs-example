import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import Home from '../views/Home.vue';
import EditComponent from '../components/customer/Edit.vue';
import CreateComponent from '../components/customer/Create.vue';

const routes: Array<RouteRecordRaw> = [
  {path: '/', redirect: 'home'},
  {path: '/home', name: 'home', component: Home},
  {path: '/create', name: 'Create', component: CreateComponent},
  {path: '/edit/:id', name: 'Edit', component: EditComponent},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
