import Vue from 'vue';
import VueRouter from 'vue-router';
import VueExt from '@/plugins/vue.ext';
import IndexView from './index.vue';

Vue.use(VueRouter);
Vue.use(VueExt);

new Vue({
  el: '#app',
  render: (h) => h(IndexView),
  mounted(){
    window._vm = this;
  },
});
