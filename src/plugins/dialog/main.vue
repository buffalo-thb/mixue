<style rel="stylesheet/less" lang="less">
    @import (reference) "../../assets/mixin";

    .auth-property-del-co-owner {
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.7);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
    }
    .auth-property-del-co-owner-inner {
        width: 100%;
        height: 100%;
        position: relative;
        .content {
            .center;
            top: 45.6%;
            width: px2rem(540px);
            background: #fff;
            .title {
              width: 100%;
              height: px2rem(156px);
              position: relative;
              .title-inner {
                width: 100%;
                text-align: center;
                padding: 0 px2rem(20px);
                color: #666;
                .mix-box-sizing;
                .center;
                .fz28;
              }
            }
            .btn-container {
              width: 100%;
              height: px2rem(90px);
              line-height: px2rem(90px);
              
              .cancel-btn {
                float: left;
                width: 50%;
                color: #666;
                text-align: center;
                line-height: px2rem(90px);
                .fz34;
              }
              .confirm-btn {
                float: left;
                width: 50%;
                color: #015293;
                text-align: center;
                line-height: px2rem(90px);
                .fz34;
              }
            }
        }
    }
</style>

<template>
    <div class="auth-property-del-co-owner" v-show="visible">
        <div class="auth-property-del-co-owner-inner">
            <div class="content">
                <div class="title">
                  <div class="title-inner">{{title}}</div>
                </div>
                <div class="btn-container">
                    <div class="cancel-btn" @click="handleCancel">{{cancelBtnName}}</div>
                    <div class="confirm-btn" @click="handleConfirm">{{confirmBtnName}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        name: 'AuthPropertyDelCoOwner',
        props: {
            
        },
        data() {
            return {
                visible: false,
                cb: ''
            }
        },
        methods: {
          show(option, cb) {
            let _this = this;
            _this.title = option.title;
            _this.cancelBtnName = option.cancelBtnName;
            _this.confirmBtnName = option.confirmBtnName;
            _this.visible = true;
            _this.cb = cb;
          },
          handleCancel() {
            let _this = this;
            if (_this.cb && typeof(_this.cb) == 'function') {
                _this.cb('negative');
            }
            _this.visible = false;
          },
          handleConfirm() {
            let _this = this;
            if (_this.cb && typeof(_this.cb) == 'function') {
                _this.cb('positive');
            }
            _this.visible = false;
          },
        },
        watch: {
            visible(val) {
                if (val) {
                    this.$util.addStopScrollClass();
                } else {
                    this.$util.removeStopScrollClass();
                }
            },
        },
    };
</script>
