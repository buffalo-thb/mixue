/**
 * Created by thb
 */

let host = 'http://m.mixue.com';
// if (process && process.env && process.env.NODE_ENV == 'dev') {
//   host = 'http://localhost:8080';
// }

export default {
  /**
   * 说明: 首页路由地址
   * 参数:
   * 返回值:
   */
  pageIndex : {
    url: host + '/index'
  },
  /**
   * 说明: 推荐房源
   * 参数:
   * 返回值:y
   */

  apiGetNews : {
    url: host + '/index/cms/'
  },
  
};
