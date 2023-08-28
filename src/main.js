// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'; // 导入 Ant Design Vue 样式

const app = createApp(App)

app.use(ElementPlus)
app.use(Antd)


app.mount('#app')
