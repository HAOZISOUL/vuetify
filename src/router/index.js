import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test1 from '@/components/Test'
import Navigation from '@/components/Navigation'
import Menus from '@/components/Menus'
import Start from '@/components/Start'
import Person from '@/components/Person'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Test',
      name: 'Test1',
      component: Test1
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: Navigation
    },
    {
      path: '/menus',
      name: 'Menus',
      component: Menus
    },
    {
      path: '/Start',
      name: 'Start',
      component: Start
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person
    }
  ]
})
