import axiosReq from './api'

export const postVerifyEmailRequest = (email: string) => {
  return axiosReq({
    url: '/verify/email',
    data: {
      email
    },
    method: 'post'
  })
}

export const postGenerateEmailCodeRequest = (email: string) => {
  return axiosReq({
    url: '/verify/generateEmailCode',
    data: {
      email
    },
    method: 'post'
  })
}