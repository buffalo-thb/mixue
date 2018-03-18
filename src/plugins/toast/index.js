import Vue from 'vue';
let Main = Vue.extend(require('./main.vue'));

let instance;
let index = 1;

let Toast = function (options) {
  options = options || {};
  if (!instance) {
    instance = new Main({
      data: options
    });
    instance.vm = instance.$mount();
    window.document.body.appendChild(instance.vm.$el);
  }
  let id = 'Singleton_Toast' + index++;
  instance.id = id;
  return instance.vm;
};

export default Toast;
