// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'; // 导入 Ant Design Vue 样式

// import echarts from 'echarts'
//需要挂载到Vue原型上
const app = createApp(App)
// app.config.globalProperties.$echarts = echarts; // 将echarts挂载到Vue实例的原型上
app.use(ElementPlus)
app.use(Antd)


app.mount('#app')
