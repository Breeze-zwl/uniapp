<template>
  <div>
    <canvas
      ref="verify"
      canvas-id="verify"
      :style="{ width: state.width + 'px', height: state.height + 'px' }"
      @click="handleDraw"
    ></canvas>
  </div>
</template>
<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import { reactive, onMounted, defineProps, getCurrentInstance } from 'vue'
const _that = getCurrentInstance()
let verify = uni.createCanvasContext('verify', _that)
const state = reactive({
  pool: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890', // 字符串
  width: 70,
  height: 30,
  imgCode: '',
})
const handleDraw = () => {
  state.imgCode = draw()
}
// 随机数
const randomNum = (min: any, max: any) => {
  return parseInt(Math.random() * (max - min) + min)
}
const randomColor = (min: any, max: any) => {
  const r = randomNum(min, max)
  const g = randomNum(min, max)
  const b = randomNum(min, max)
  return `rgb(${r},${g},${b})`
}
// 绘制图片
const draw = () => {
  // 填充颜色
  verify.setFillStyle(randomColor(180, 230))
  // 填充的位置
  verify.fillRect(0, 0, state.width, state.height)
  // 定义paramText
  let imgCode = ''
  // 4.随机产生字符串，并且随机旋转
  for (let i = 0; i < 4; i++) {
    // 随机的四个字
    const text = state.pool[randomNum(0, state.pool.length)]
    imgCode += text
    // 随机的字体大小
    const fontSize = randomNum(18, 22)
    // 字体随机的旋转角度
    const deg = randomNum(-30, 30)
    /*
     * 绘制文字并让四个文字在不同的位置显示的思路 :
     * 1、定义字体
     * 2、定义对齐方式
     * 3、填充不同的颜色
     * 4、保存当前的状态（以防止以上的状态受影响）
     * 5、平移translate()
     * 6、旋转 rotate()
     * 7、填充文字
     * 8、restore出栈
     * */
    verify.font = fontSize + 'px Simhei'
    verify.setTextBaseline('top')
    verify.setFillStyle(randomColor(80, 150))
    /*
     * save() 方法把当前状态的一份拷贝压入到一个保存图像状态的栈中。
     * 这就允许您临时地改变图像状态，
     * 然后，通过调用 restore() 来恢复以前的值。
     * save是入栈，restore是出栈。
     * 用来保存Canvas的状态。save之后，可以调用Canvas的平移、放缩、旋转、错切、裁剪等操作。 restore：用来恢复Canvas之前保存的状态。防止save后对Canvas执行的操作对后续的绘制有影响。
     *
     * */
    verify.save()
    verify.translate(16 * i + 15, 18)
    verify.rotate((deg * Math.PI) / 180)

    // fillText() 方法在画布上绘制填色的文本。文本的默认颜色是黑色。
    verify.fillText(text, -15 + 5, -15)
    verify.restore()
  }
  // 5.随机产生5条干扰线,干扰线的颜色要浅一点
  for (let i = 0; i < 5; i++) {
    verify.beginPath()
    verify.moveTo(randomNum(0, state.width), randomNum(0, state.height))
    verify.lineTo(randomNum(0, state.width), randomNum(0, state.height))
    verify.setStrokeStyle(randomColor(180, 230))
    verify.closePath()
    verify.stroke()
  }
  // 6.随机产生40个干扰的小点
  for (let i = 0; i < 40; i++) {
    verify.beginPath()
    verify.arc(
      randomNum(0, state.width),
      randomNum(0, state.height),
      1,
      0,
      2 * Math.PI
    )
    verify.closePath()
    verify.setFillStyle(randomColor(150, 200))
    verify.fill()
  }
  console.log(imgCode)
  verify.draw()
  return imgCode
}
onShow(() => {
  uni.hideHomeButton()
})
onMounted(() => {
  state.imgCode = draw()
})
</script>
