/**
 * Created by thb
 * 图片链接格式化 默认图片大小：140*105 剪切
 */
function picUrlFilter(url, width = 140, height = 105, crop = 1) {
  let _url = url;
  if (_url) {
    let _search = (_url.match(/(\?.*$)/) || [''])[0];
    if (_search) {
      _url = _url.replace(_search, "");
    }
  }
  _url = `${_url}?w=${width}&h=${height}&crop=${crop}`;
  return _url;
}
export default picUrlFilter;
