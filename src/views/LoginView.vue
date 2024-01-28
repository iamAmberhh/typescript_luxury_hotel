<template>
  <Navbar />

  <div class="text-white">
    <div class="row g-0" style="height: calc(100dvh - 120px)">
      <div class="col-6 d-none d-lg-block">
        <div class="login-bg"></div>
      </div>
      <div
        class="col-12 col-lg-6 bg-dark d-flex justify-content-center align-items-center title-deco-bg-line"
      >
        <form class="w-75 p-5">
          <span class="text-primary mb-2 fs-6"> 享樂酒店，誠摯歡迎 </span>
          <h2 class="mb-4 fw-bold" style="font-size: 32px">立即開始旅程</h2>
          <div class="mb-3">
            <label for="email" class="form-label"> 電子信箱 </label>
            <input
              v-model="loginData.email"
              type="email"
              class="form-control mb-3"
              id="email"
              placeholder="hello@exsample.com"
              required
            />
          </div>
          <div class="mb-3">
            <label for="password" class="form-label"> 密碼 </label>
            <input
              v-model="loginData.password"
              type="password"
              class="form-control"
              id="password"
              placeholder="請輸入密碼"
              required
            />
          </div>
          <div class="mb-5 form-check d-flex justify-content-end align-items-center">
            <a
              href="#"
              class="text-primary"
              @click="handleForgetPassword"
            >
              忘記密碼?
            </a>
          </div>
          <button
            type="submit"
            class="btn w-100 p-3 mb-5 light-btn"
            @click="handleLogin"
          >
            會員登入
          </button>
          <p>
            沒有會員嗎?
            <RouterLink to="/register" class="text-primary"> 前往註冊 </RouterLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue'
import { ref } from 'vue'
import { postLoginRequest, postForgetPasswordRequest } from '@/api/users.js'
import { postGenerateEmailCodeRequest } from '@/api/verify.js'
import { RouterLink, useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const router = useRouter()

interface LoginData {
  email: string;
  password: string;
}

interface ForgetData {
  email: string,
  code: string,
  newPassword: string
}

const loginData = ref<LoginData>({
  email: '',
  password: ''
})

const userEmailRef = ref<string>('')

const handleLogin = ():void => {
  postLoginRequest(
    loginData.value
  ).then(({ data }) => {
    Swal.fire({
      title: "登入成功",
      text: "開始挑選喜歡的房型吧",
      icon: "success"
    }).then(() => {
      localStorage.setItem('token', data.token)
      router.push('/')
    })
  }).catch((err) => {
    Swal.fire({
      title: "登入失敗",
      text: err.response.data.message,
      icon: "error"
    })
  })
}

const handleForgetPassword = (e:Event) => {
  e.preventDefault()
  Swal.fire({
    title: "請輸入您的Email",
    input: "text",
    inputAttributes: {
      autocapitalize: "off"
  },
  confirmButtonText: "送出",
  showLoaderOnConfirm: true,
  preConfirm: async (email) => {
    // console.log(email)
    userEmailRef.value = email
    postGenerateEmailCodeRequest(
      email
    ).then(() => {
      Swal.fire({
        title: "已將驗證信發送到您的信箱",
        text: "請設定新密碼",
        icon: "success",
        preConfirm: () => {
          setNewPassword()
        }
      })
    }).catch((err) => {
      Swal.fire({
        title: "驗證失敗，請確認Email",
        text: err.response.data.message,
        icon: "error"
      })
    })
  },
  allowOutsideClick: () => !Swal.isLoading()
})
}

const setNewPassword = () => {
  Swal.fire({
    title: "請輸入新密碼及驗證碼",
    html: `
    <label for="swal-input1">請輸入驗證碼</label>
    <input id="swal-input1" class="swal2-input">
    <label for="swal-input2">請輸入新密碼</label>
    <input id="swal-input2" class="swal2-input" type="password">
  `,
    inputAttributes: {
      autocapitalize: "off"
    },
    confirmButtonText: "送出",
    showLoaderOnConfirm: true,
    preConfirm: () => {
      const code = document.getElementById("swal-input1") as HTMLInputElement
      const newPassword = document.getElementById("swal-input2") as HTMLInputElement
      const forgetPasswordData:ForgetData = {
        email: userEmailRef.value,
        code: code.value,
        newPassword: newPassword.value,
      }
      postForgetPasswordRequest(
        forgetPasswordData
      ).then(() => {
        Swal.fire({
          title: "密碼重設成功",
          text: "請使用新密碼登入",
          icon: "success",
        })
      }).catch((err) => {
        console.log(err.response)
        Swal.fire({
        title: "密碼重設失敗",
        text: err.response.data.message,
        icon: "error",
        preConfirm: () => {
          setNewPassword()
        }
      })
      })
    },
    allowOutsideClick: () => !Swal.isLoading()
  })
}
</script>

<style scoped lang="scss">
@import '../style/all.scss';
</style>
