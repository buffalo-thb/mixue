/**
 * Created by thb
 */
import picUrlFilter from './picUrlFilter';

exports.install = (Vue) => {
  Vue.filter('picUrlFilter', picUrlFilter);
};
