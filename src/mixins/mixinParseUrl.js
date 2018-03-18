/**
 * Created by thb on 2018/3/6.
 */
import qs from "qs";

export default {
  props: {
    url: {
      type: String,
      default: '',
    }
  },
  methods: {
    parseUrl(valueObj, excludeNameArr = ['key', 'xiaoQu']){
      if (valueObj != undefined && valueObj != null && typeof(valueObj) == "object") {
        let _search = (this.url.match(/(\?.*$)/) || [''])[0];
        let _url = this.url.replace(_search, '');

        let _searchObj = {};
        if (_search) {
          _searchObj = qs.parse(_search, {ignoreQueryPrefix: true});
        }
        for (let [key, value] of Object.entries(valueObj)) {
          _searchObj[key] = value;
        }

        _search = qs.stringify(_searchObj, {
          addQueryPrefix: true,
          filter: (name, value) => {
            if (value == '' || value == null) {
              return;
            }
            if (excludeNameArr.length > 0) {
              for (let index in excludeNameArr) {
                let _excludeName = excludeNameArr[index];
                if (name == _excludeName) {
                  return;
                }
              }
            }
            return value;
          }
        });

        return `${_url}${_search}`;
      }
      return this.url;
    },
  }
};
