本人开发小程序用的内置的uni-ui，同时也用过vant为小程序提供的vant weapp的UI库，但是他们两个在用popup会出现同样的问题，就是穿透滚动问题，

<img src="./image/1.png">

这个时候就需要官方提供的page-meta标签，

上代码：<br />
```javascript
<template>
  <page-meta :page-style="popupShow ? 'overflow: hidden;' : ''"></page-meta>
  <view @click="handlecount"></view>
      <van-popup
      :show="popupShow"
      @close="onClosepopup">
				//这里是内容
    </van-popup>
</template>
<script setup lang="ts">
  const popupShow = ref(false)
  const onClosepopup = () => {
    popupShow.value = false
  }
  const handlecount = () => {
    popupShow.value = true
  }
</script>
```

原理很简单，定义一个变量，当popup展示的时候，让page-meta的over-flow:hidden，反之。uni-ui和vant weapp都可以用同样的方法### <font color="#FF0000">注意page-meta只能是页面内的第一个节点</font> <br />

uni-ui官方说明：https://uniapp.dcloud.net.cn/component/uniui/uni-popup.html#%E5%BE%AE%E4%BF%A1%E5%B0%8F%E7%A8%8B%E5%BA%8F-app <br />

vant weapp说明：https://vant-contrib.gitee.io/vant-weapp/#/popup  <br />

注意vue3和vue2写法，以及语法糖写法
