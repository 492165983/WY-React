import axios from 'axios'
import qs from 'qs'

// 公共请求头
// const baseURL = '/api'
// 请求超时时间
const timeout = 20000
// 
const axiosInstance = axios.create({
  // baseURL,
  timeout
})
// 请求拦截器
axiosInstance.interceptors.request.use(config => {
  // 结构获取method data
  const {
    method,
    data
  } = config
  // 对POST请求进行处理
  if (method.toUpperCase() === 'POST' && data instanceof Object) {
    // 把data转换为URLEncoding形式
    config.data = qs.stringify(data)
  }


  return config
})
// 响应拦截器
axiosInstance.interceptors.response.use(response => {
  // console.log(response);
  
  return response
}, error => {
  console.log(error);
  return new Promise(() => {

  })

})


export default axiosInstance