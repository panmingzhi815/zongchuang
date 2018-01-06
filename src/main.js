// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Logo from './components/Logo'
import Register from './components/Register'
import Forgot from './components/Forgot'
import Main from './components/Main'
import AccessControl from './components/AccessControl'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Logo
},{
  path: '/Logo',
  component: Logo
},{
  path: '/Register',
  component: Register
},{
  path: '/Forgot',
  component: Forgot
},{
  path: '/Main',
  component: Main,
  children:[{
    path: 'AccessControl',
    component: AccessControl
  }]
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
