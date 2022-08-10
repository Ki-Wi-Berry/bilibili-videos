import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import { ElCarouselItem, ElCarousel, ElButton, ElIcon, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { ElForm, ElFormItem, ElInput } from 'element-plus'
import App from './App.vue'
import './index.css'
import router from './router'
import {createPinia}  from 'pinia'

const pinia = createPinia()
app.use(pinia)

const app = createApp(App)

app.use(ElCarouselItem)
app.use(ElCarousel)
app.use(ElButton)
app.use(ElIcon)
app.use(ElDropdown)
app.use(ElDropdownMenu)
app.use(ElDropdownItem)
app.use(router)
app.use(ElForm)
app.use(ElFormItem)
app.use(ElInput)
// app.component('el-button',ElButton);
app.mount('#app')