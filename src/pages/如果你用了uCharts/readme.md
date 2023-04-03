### 如果你的uniapp中有图表、折线图、柱状图而你恰好用的uCharts，

图表是用canvas画的，那么我们首先要注意的是原生组件的层级问题，<br />

### 下面两个是比较重要的

- 画布的宽高，虽然他的基本配置里面给我们提供了width、height的设置，但是如果你不是构造函数的方法构建画布而是属性的方法传入的话，设置width和height是不起作用的，此时我们要控制他的宽高就要给他外层加一个盒子（view）标签，设置这个盒子（view）标签的width/height，这个画布会自动获取外层盒子的宽高并充满，

- 条件展示，如果我们的画布一开始不展示，要靠某个条件展示，那么他就一直不展示了，因为他获取不到他父元素的宽高，此时就要用到，官方提供的，reshow和reload，最常见的便是在tab中使用，下面举个简单列子

  ```javascript
  <template>
    <van-tabs :active="active" bind:change="onChange">
      <van-tab :name='0' title="内容">内容 1</van-tab>
      <van-tab :name='1' title="图表">
        <qiun-data-charts :reshow="reshowChart == 1" />
      </van-tab>
    </van-tabs>
  </template>
  <script setup lang="ts">
    const active = ref<number>(0)
    const reshowChart = ref<number>(0)
    const onChange = (e: any) => {
      reshowChart.value = e.detail.name
    }
  </script>
  ```

  官方说明：https://www.ucharts.cn/v2/#/help/index  <br />

​	   官方文档：https://www.ucharts.cn/v2/#/document/index