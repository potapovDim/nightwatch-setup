import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import { VueDnd } from './utils/dnd'
import createRouting from './routing'
Vue.use(VueRouter)
Vue.use(Vuex)


new Vue({
  router: createRouting(VueRouter),
  template: `
    <div id="app">
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app')