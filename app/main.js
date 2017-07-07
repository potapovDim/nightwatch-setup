import Vue from 'vue'
import App from './app.vue'
import Cabinet from './components/cabinet/cabinet.vue'
import Editor from './components/editor/index.vue'
import InitialPage from './components/initial-page.vue'
import VueRouter from 'vue-router'

import {VueDnd} from './utils/dnd'

Vue.use(VueRouter)
Vue.use(VueDnd)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/', component: App,
      children: [
        { path: '', component: InitialPage },
        { path: 'cabinet', component: Cabinet },
        { path: 'editor', component: Editor }
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