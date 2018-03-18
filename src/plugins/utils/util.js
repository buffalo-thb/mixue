/**
 * Created by thb
 */
/**
 * 从当前URL里面提取参数值
 * @param name 参数名称
 * @returns {string} 参数值
 */
function getUrlParam(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  var r = window.location.search.substr(1).match(reg);
  if (r != null) {
    return unescape(r[2]);
  } else {
    return '';
  }
}

/**
 * desc:获取名字为name的Cookie值
 * @param name
 * @returns {string}
 */
function getCookie(name) {
  let value = '';
  if (window.document.cookie.length > 0 && name) {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
    const arr = window.document.cookie.match(reg);
    if (arr) {
      value = decodeURIComponent(arr[2]);
    }
  }
  return value;
};

/**
 * 从cookie中取用户id
 * @returns {string}
 */
function getCookieUserId() {
  let ppu = getCookie('PPU');
  let userId = (ppu.match(/UID=(\d*)&/)) ? RegExp.$1 : '';
  return userId;
}

/**
 * desc:px转rem
 * @param px 没有单位
 * @returns {string}
 */
function px2rem(px = 0) {
  let rem = px / 75 + 'rem';
  return rem;
};

/**
 * 图片链接格式化 默认图片大小：140*105
 * @param url
 * @param width
 * @param height
 */
function picUrl(url, width = 140, height = 105, crop = 1) {
  let _url = url || '//img.58cdn.com.cn/n/images/list/noimg2.gif';
  if (_url) {
    let _search = (_url.match(/(\?.*$)/) || [''])[0];
    if (_search) {
      _url = _url.replace(_search, "");
    }
  }
  _url = `${_url}?w=${width}&h=${height}&crop=${crop}`;
  return _url;
}

/**
 * 检测返回值code是否合法
 * @param res
 * @returns {boolean}
 */
function checkCode(res) {
  if ((!res || res.code == undefined || res.code == null || res.code == '') && res.code != 0) {
    return false;
  } else {
    return true;
  }
}

/*获取class name*/
function getClass(elem) {
  return elem && elem.getAttribute && elem.getAttribute('class') || '';
}

// 将 class name 进行处理
function stripAndCollapse(cls) {
  return cls.match(/[^\x20\t\r\n\f]+/g) || [];
}

function addClass(elem, cls) {
  if (elem && cls) {
    let _cls = getClass(elem);
    let _clsArr = stripAndCollapse(_cls);
    let _has = false;
    for (let i = 0, len = _clsArr.length; i < len; i++) {
      if (_clsArr[i] == cls) {
        _has = true;
      }
    }
    if (!_has) {
      _clsArr.push(cls);
      elem.setAttribute('class', _clsArr.join(' '));
    }
  }
}

function removeClass(elem, cls) {
  if (elem && cls) {
    let _cls = getClass(elem);
    let _clsArr = stripAndCollapse(_cls);
    let _clsNewArr = [];
    for (let i = 0, len = _clsArr.length; i < len; i++) {
      if (_clsArr[i] != cls) {
        _clsNewArr.push(_clsArr[i]);
      }
    }
    elem.setAttribute('class', _clsNewArr.join(' '));
  }
}

/**
 * 是否是空值： undefined、null、''
 * @param value
 * @returns {boolean}
 */
function isEmpty(value) {
  if (typeof value !== "undefined" && value !== null && value !== '') {
    return false;
  } else {
    return true;
  }
}

/**
 * 是否是数组
 * @param value
 * @returns {boolean}
 */
function isArray(value) {
  if (typeof value === 'object' && Object.prototype.toString.call(value) == '[object Array]') {
    return true;
  } else {
    return false;
  }
}

/**
 * 是否是字符串
 * @param value
 * @returns {boolean}
 */
function isString(value) {
  if (typeof value === 'string') {
    return true;
  } else {
    return false;
  }
}

/**
 * 重置对象属性，null -> ''
 * @param obj
 * @returns {{}}
 */
function resetNullToEmpty(obj = {}) {
  if (obj && typeof obj === "object") {
    for (let key in Object.keys(obj)) {
      if (key && obj[key] == null) {
        obj[key] = '';
      }
    }
  }
  return obj;
}

function addStopScrollClass() {
  let _html = window.document.getElementsByTagName('html');
  if (_html && _html.length > 0) {
    _html[0].style.overflow = "hidden";
  }
  let _body = window.document.getElementsByTagName('body');
  if (_body && _body.length > 0) {
    _body[0].style.overflow = "hidden";
  }

}
function removeStopScrollClass() {
  let _html = window.document.getElementsByTagName('html');
  if (_html && _html.length > 0) {
    _html[0].style.overflow = "auto";
  }
  let _body = window.document.getElementsByTagName('body');
  if (_body && _body.length > 0) {
    _body[0].style.overflow = "auto";
  }
}


export default {
  getUrlParam,
  getCookie,
  getCookieUserId,
  px2rem,
  picUrl,
  checkCode,
  addClass,
  removeClass,
  isEmpty,
  isArray,
  isString,
  resetNullToEmpty,
  addStopScrollClass,
  removeStopScrollClass,
}
