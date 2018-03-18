/**
 * Created by thb
 */
import AXIOS from "axios";
import JSONP from "jsonp";
import qs from "qs";

class Request {
  constructor() {
    this._initAxios();
    //请求错误统一返回值
    this.resError = {
      message: "请求数据异常，请稍后再试！",
    };
  }

  /**
   * 初始化axios配置、请求、响应拦截器
   * @private
   */
  _initAxios() {
    let _this = this;

    //初始化配置
    _this.Axios = AXIOS.create({
      responseType: "json",
      withCredentials: true,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
      }
    });

    //请求拦截器
    _this.Axios.interceptors.request.use(
      config => {
        if (!config.url) {
          throw new Error('url is error!');
        }

        let url = config.url;
        if (typeof url == 'object') {
          url = (url.host || '') + url.url;
        }
        config.url = url;

        return config;
      },
      err => {
        return Promise.reject(_this.resError);
      }
    );

    //响应拦截器
    _this.Axios.interceptors.response.use(
      res => {
        return res;
      },
      err => {
        return Promise.reject(_this.resError);
      }
    );
  }

  /**
   * axios get请求封装
   * @param url
   * @param data
   */
  get(url, data = {}, config = {}) {
    let _this = this;
    let _config = Object.assign({params: data}, config);
    return _this.Axios.get(url, _config)
      .then(res => {
        return res.data;
      })
      .catch(error => {
        return _this.resError;
      });
  }

  /**
   * axios post请求封装
   * @param url
   * @param data
   */
  post(url, data = {}, config = {}) {
    let _this = this;
    data = qs.stringify(data);
    return _this.Axios.post(url, data, config)
      .then(res => {
        return res.data;
      })
      .catch(error => {
        return _this.resError;
      });
  }

  /**
   * jsonp 请求封装
   * @param url
   * @param data
   * @param config
   * @returns {Promise}
   */
  jsonp(url, data = {}, config = {}) {
    let _this = this;
    return new Promise(function (resolve, reject) {
      if (typeof url == 'object') {
        url = (url.host || '') + url.url;
      }
      //提取url中?后面的参数
      let _urlSearch = (url.match(/(\?.*$)/) || [''])[0];
      if (_urlSearch) {
        let _urlSearchObj = qs.parse(_urlSearch, {ignoreQueryPrefix: true});
        data = Object.assign({}, _urlSearchObj, data);
      }
      //url参数处理
      let _data = qs.stringify(data);
      //jsonp配置
      let _config = Object.assign({prefix: "jp", param: "jsoncallback", timeout: 3000}, config);
      //数据请求
      JSONP(url + "?" + _data, _config, function (error, res) {
        if (error) {
          reject(_this.resError);
        } else {
          resolve(res)
        }
      });
    });
  }
}

export default new Request();
