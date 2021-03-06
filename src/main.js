// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Login from './components/Login'
import Register from './components/Register'
import Forgot from './components/Forgot'
import Main from './components/Main'
import Setting from './components/Setting'
import Eqcode from './components/Eqcode'
import Meetting from './components/Meetting'
import EditMeetting from './components/EditMeetting'
import MyMeetting from './components/MyMeetting'
import store from './store'

Vue.use(VueRouter)
require("./common/api.js")
require("./common/common.css")
var moment = require('moment');

const routes = [{
  path: '/',
  component: Login
},{
  path: '/Login',
  component: Login
},{
  path: '/Register',
  component: Register
},{
  path: '/Forgot',
  component: Forgot
},{
  path: '/Main',
  component: Main
},{
  path: '/Setting',
  component: Setting
},{
  path: '/Eqcode',
  component: Eqcode
},{
  path: '/Meetting',
  component: Meetting
},{
  path: '/EditMeetting',
  component: EditMeetting
},{
  path: '/MyMeetting',
  component: MyMeetting
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
