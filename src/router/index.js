import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/dashboard.vue'
import DetailsOfShow from '../views/detailsOfShow.vue'
import SearchShow from '../components/searchShow.vue'
import FilterList from '../components/filterList.vue'
import PageNotFound from '../views/pageNotFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { hideNavigation: false }
  },
  {
    path: '/details/:showId',
    name: 'DetailsOfShow',
    component: DetailsOfShow,
    meta: { hideNavigation: false }
  },
  {
    path: '/search/:searchkey',
    name: 'SearchShow',
    component: SearchShow,
    meta: { hideNavigation: false }
  },
  {
    path: '/genres/:filterkey',
    name: 'FilterList',
    component: FilterList,
    meta: { hideNavigation: false }
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound,
    meta: { hideNavigation: true }
  }
]

const router = new VueRouter({
  routes
})

export default router
