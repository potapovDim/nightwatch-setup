import Editor from './components/editor/index.vue'
import InitialPage from './components/initial-page.vue'
import Cabinet from './components/cabinet/cabinet.vue'
import App from './app.vue'

import { localStorageService, getData } from './utils'

export default (VueRouter) => {

  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      {
        name: 'main',
        path: '/', component: App,
        children: [{
          name: 'registration',
          path: '',
          component: InitialPage
        }
        ],
        beforeEnter: (to, from, next) => {
          console.log(localStorageService.get('token'))
          const headers = { token: localStorageService.get('token') }
          const url = 'http://localhost:4422/whoami'
          getData({
            url, headers, callback: (status) => {
              status == 200 ? next({ path: '/cabinet' }) : next(true)
            }
          })
        }
      },
      {
        name: 'cabinet',
        path: '/cabinet',
        component: Cabinet,
        beforeEnter: (to, from, next) => {
          console.log(to, from)
          next(true)
        }
      },
      { path: '/editor', component: Editor }
    ]
  })
  return router
}