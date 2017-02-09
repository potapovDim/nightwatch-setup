import Vue from 'vue'
import App from './app.vue'
import Cabinet from './components/cabinet/cabinet.vue'
import InitialPage from './components/initial-page.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: App , 
    children :[
      { path: '', component: InitialPage },
      { path: 'cabinet', component: Cabinet }
      ]
    }
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