//axios封装处理

import axios from 'axios'

//1. 根域名配置
//2. 超时时间
//3. 请求拦截器
//4. 响应拦截器

// 创建axios实例
const http = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// 添加请求拦截器
// 在发送请求之前做一些处理，比如设置 headers、token 等。
http.interceptors.request.use((config)=> {
    return config
  }, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器
// 在接收到响应数据之后做一些处理，比如根据状态码做一些操作。
http.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  }, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
})

export { http }