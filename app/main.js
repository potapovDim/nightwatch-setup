import Vue from 'vue'
import App from './app.vue'
import Login from './components/login-user/index.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = { template: '<div><h2>Home</h2></div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App },
    { path: '/login', component: Login }
  ]
})
new Vue({
    router,
    template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')