<!--
  Created by thb
-->
<style rel="stylesheet/less" lang="less">
  @import (reference) '../../assets/mixin.less';

  .toast-box {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: 10;

    .mix-flex-center;

    .toast-content {
      max-width: 70%;
      min-width: px2rem(350px);
      padding: px2rem(28px) px2rem(46px);
      box-sizing: border-box;
      border-radius: px2rem(6px);
      background: rgba(0, 0, 0, 0.7);
      line-height: px2rem(45px);
      font-size: px2rem(32px);
      color: #fff;
      text-align: center;
      letter-spacing: 0;
      overflow: hidden;
    }
  }

  .toast-fade-enter-active, .toast-fade-leave-active {
    transition: opacity .5s;
  }

  .toast-fade-enter, .toast-fade-leave-to {
    opacity: 0;
  }
</style>
<template>
  <transition name="toast-fade">
    <section class="toast-box" v-show="visible">
      <div class="toast-content" v-html="content"/>
    </section>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        visible: false,
        content: '',
        timeId: 0,
        timeDelay: 1,
      }
    },
    methods: {
      show(content){
        let _this = this;
        _this.content = content || '';
        _this.visible = true;
        window.clearTimeout(_this.timeId);
        _this.timeId = window.setTimeout(function () {
          _this.hide();
        }, _this.timeDelay * 1000);

      },
      hide(){
        let _this = this;
        _this.visible = false;
      },
    }
  }
</script>
