/**
 * Created by thb
 * 指令入口
 */
import track from './track';

exports.install = (Vue) => {
  /*日志埋点*/
  Vue.directive('track', track);
};
