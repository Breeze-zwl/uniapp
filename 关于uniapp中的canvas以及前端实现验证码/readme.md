# uniapp => canvas
uniapp对于canvas封装了一些api，这里直罗列我碰到的坑，关于verify-code组件，由于开发关系还没完善，后续复盘会完善细节，但是目前可以复制粘贴了😄

uniapp对canvas原生方法封装的地址（太多了，一点点查吧）：

 https://uniapp.dcloud.net.cn/api/canvas/CanvasContext.html



- canvas标签必须要有 'canvas-id' 
- canvas画布宽高不能直接写，不然不生效，要写内联样式（:style="{ width: state.width + 'px', height: state.height + 'px' }"），不要问我为什么，
- 获取canvas要用uni.createCanvasContext()，    
- 当你把canvas当自定义组件（子组件）的时候，uni.createCanvasContext()的第二个参数this必须传，vue3的setup写法获取this用getCurrentInstance()