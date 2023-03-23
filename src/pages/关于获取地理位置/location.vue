<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import AMapWX from '@/common/amap-wx.js'
const AampWX = ref('这里是高德开放平台获得的key')
const amapPlugin = ref()
const popupShow = ref(false)
onLoad(() => {
  amapPlugin.value = new AMapWX({
    key: AampWX.value,
  })
})
const getRegeo = () => {
  amapPlugin.value.getRegeo({
    success: (data: any) => {
      console.log(data)
    },
  })
}
const getWeather = () => {
  amapPlugin.value.getWeather({
    success: (data: any) => {
      console.log(data)
    },
  })
}
</script>
