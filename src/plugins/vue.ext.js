import Lazyload from 'vue-lazyload'
import Api from './services/api'
import Request from './services/request'
import Util from './utils/util'
import Filters from './filters/index'
import Toast from './toast/index';
import Dialog from './dialog/index';
import EventHub from './eventHub';
import EventHubAction from './eventHubAction';

exports.install = (Vue) => {
  Vue.use(Lazyload);

  /*api接口*/
  Object.defineProperty(Vue.prototype, '$api', {value: Api});

  /*后端请求*/
  Object.defineProperty(Vue.prototype, '$request', {value: Request});

  /*帮助类*/
  Object.defineProperty(Vue.prototype, '$util', {value: Util});

  /*全局过滤器*/
  Vue.use(Filters);

  /*全局Toast*/
  Object.defineProperty(Vue.prototype, '$toast', {value: Toast()});

  /*全局Dialog*/
  Object.defineProperty(Vue.prototype, '$dialog', {value: Dialog()});
  
  /*事件中心*/
  Vue.use(EventHub);

  /*事件中心action*/
  Vue.use(EventHubAction);
}
