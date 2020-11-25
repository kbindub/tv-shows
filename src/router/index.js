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
    component: Dashboard
  },
  {
    path: '/details/:showId',
    name: 'DetailsOfShow',
    component: DetailsOfShow
  },
  {
    path: '/search/:searchkey',
    name: 'SearchShow',
    component: SearchShow
  },
  {
    path: '/genres/:filterkey',
    name: 'FilterList',
    component: FilterList
  },
  {
    path: '*',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
