import Vue from 'vue';
let Main = Vue.extend(require('./main.vue'));

let instance;
let index = 1;

let Dialog = function (options) {
  options = options || {};
  if (!instance) {
    instance = new Main({
      data: options
    });
    instance.vm = instance.$mount();
    window.document.body.appendChild(instance.vm.$el);
  }
  let id = 'global_dialog_keyword_' + index++;
  instance.id = id;
  return instance.vm;
};

export default Dialog;
