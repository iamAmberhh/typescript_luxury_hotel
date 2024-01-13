import axiosReq from './api'

export const postLoginRequest = (loginForm) => {
  return axiosReq({
    url: '/user/login',
    data: loginForm,
    method: 'post'
  })
}

export const postRegisterRequest = (registerForm) => {
  return axiosReq({
    url: '/user/signup',
    data: registerForm,
    method: 'post'
  })
}