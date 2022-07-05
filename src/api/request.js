import axios from 'axios'
import { ElMessage } from 'element-plus'
import store from '@/store'

// 创建axios实例
const service = axios.create({
  baseURL: 'https://www.markerhub.com/vueadmin-java',
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    _showError('请求超时')
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    if (response.headers.authorization) {
      store.commit('user/setToken', response.headers.authorization)
    }
    const {
      data: { data, code, msg }
    } = response

    if (code === 200) {
      return data
    } else {
      _showError(msg)
      return Promise.reject(msg)
    }
  },
  (error) => {
    // 响应失败进行信息提示
    _showError(error.message)
    return Promise.reject(error)
  }
)

// 响应提示信息
const _showError = (message) => {
  const info = message || '发生未知错误'
  ElMessage.error(info)
}

// 导出axios实例对象
export default service
