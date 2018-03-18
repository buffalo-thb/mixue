# mixue

## 项目安装与运行
``` bash
npm install
npm run dev
```

### 空页面组件
    路径：smart-houserent\src\components\empty
    参数：iconClass（图标），title（标题），subTitle（副标题），buttonTitle（按钮文字），isShowButton（是否显示按钮）
    使用：<empty></empty> -> 默认网络加载失败
        <empty :icon-class="'empty-collect'"></empty>  -> 暂无收藏
        <empty :icon-class="'empty-search'"></empty>  -> 暂无结果

