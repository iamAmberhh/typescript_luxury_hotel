import axiosReq from './api'

export const postLoginRequest = (loginForm:{
  email: string,
  password: string
}) => {
  return axiosReq({
    url: '/user/login',
    data: loginForm,
    method: 'post'
  })
}

export const postRegisterRequest = (registerForm:{
  email: string,
  password: string,
  confirmPassword: string,
  name: string,
  phone: string,
  bornYear: undefined,
  bornMonth: undefined,
  bornDay: undefined,
  birthday?: string,
  address:{
    zipcode: number | undefined, 
    city: string,
    country:string,
    detail:string
  }
}) => {
  return axiosReq({
    url: '/user/signup',
    data: registerForm,
    method: 'post'
  })
}