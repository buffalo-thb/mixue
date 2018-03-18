###弹窗插件

_this.$dialog.show({
    title: '确定要删除共有人吗？',//必传，显示的文案
    cancelBtnName: '暂不删除',//必传，取消按钮名字
    confirmBtnName: '确认删除'//必传，确认按钮名字
}, (res) => {
    if (res == 'negative') {
        //点击了取消按钮
    } else if (res == 'positive') {
        //点击了确认按钮
    }
});