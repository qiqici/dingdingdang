// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import MintUI from 'mint-ui'
import '../node_modules/mint-ui/lib/style.css'

Vue.use(MintUI)

import "./assets/mui/css/mui.css"

import "./assets/mui/css/icons-extra.css"

import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

import store from "./store"



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h=>h(App),
  store
})
