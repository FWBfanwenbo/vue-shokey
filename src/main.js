// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from "./store"
import {post,get} from "./util/http"
import ElementUI from 'element-ui'
import "./assets/css/base.css"
import 'element-ui/lib/theme-chalk/icon.css'
import 'element-ui/lib/theme-chalk/index.css'
import VueAreaLinkage from 'vue-area-linkage';
import 'vue-area-linkage/dist/index.css'
import 'swiper/dist/css/swiper.min.css';
import 'swiper/dist/js/swiper.min'
import VueAwesomeSwiper from 'vue-awesome-swiper';

Vue.use(VueAwesomeSwiper);
Vue.use(VueAreaLinkage);

Vue.prototype.$post=post;
Vue.prototype.$get=get;
Vue.prototype.$http = axios;


Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
