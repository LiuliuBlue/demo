import request from './request'

// 获取验证码
export const getCaptcha = () => {
  return request.get('/captcha')
}
// 登录
export const getLogin = (model) => {
  return request.post(
    `/login?username=${model.username}&password=${model.password}&code=${model.code}&token=${model.token}`
  )
}
// 获取用户信息
export const getUserInfo = () => {
  return request.get('/sys/userInfo')
}
