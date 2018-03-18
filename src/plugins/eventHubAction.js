/**
 * 用于eventHub的静态事件名
 */
exports.install = (Vue) => {
    /*单独的事件中心管理组件间的通信*/
    let actions = {
        FORM_ITEM_ADD:'FORM_ITEM_ADD',
        INPUT_FOCUS: 'INPUT_FOCUS',
        INPUT_BLUR: 'INPUT_BLUR',
    };
    Object.defineProperty(Vue.prototype, '$eventAction', {value: actions});
};