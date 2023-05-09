### 原因：Uchart画出图表以后，点击展示提示窗的位置不准确，有的时候不展示提示窗，

### 解决办法，Ucharts的父元素一定不能有定位， 有切只能有position: inherit;，否则就会出现提示窗位置混乱的问题，适用于所有类别的图表

我是因为用了van-tabs，由于vant weapp的这个组件里面有position: relative;导致了我提示窗问题混乱，设置成position: inherit，然后在自己调整样式就解决了