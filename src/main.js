import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store/index'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)
Vue.use(VueRouter)
window.axios = require('axios')

const router = new VueRouter({
    routes,
    linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {  
    next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
