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
          <span v-if="registerStep === 1" class="text-primary mb-2 fs-6"> 享樂酒店，誠摯歡迎</span>
          <h2 class="mb-4 subtitle">立即註冊</h2>
          <div class="row mb-5">
            <div class="col-4 text-center">
              <span class="step-bg step-bg-active">1</span>
              <span>輸入信箱及密碼</span>
            </div>
            <div class="col-4 text-secondary step-line"></div>
            <div class="col-4 text-center text-secondary">
              <span class="step-bg" :class="registerStep === 2 ? 'step-bg-active' : 'none'">2</span>
              <span>填寫基本資料</span>
            </div>
          </div>
          <!-- step 1 -->
          <div v-if="registerStep === 1">
            <div class="mb-3">
              <label for="email" class="form-label">電子信箱</label>
              <input
                v-model="registerForm.email"
                type="email"
                class="form-control mb-3"
                id="email"
                aria-describedby="emailHelp"
                placeholder="hello@exsample.com"
                required
              />
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">密碼</label>
              <input
                v-model="registerForm.password"
                type="password"
                class="form-control"
                id="password"
                placeholder="請輸入密碼"
                required
              />
            </div>
            <div class="mb-5">
              <label for="confirmPassword" class="form-label">確認密碼</label>
              <input
                v-model="registerForm.confirmPassword"
                type="password"
                class="form-control"
                id="confirmPassword"
                placeholder="請再輸入一次密碼"
                required
              />
            </div>
            <button class="btn w-100 p-3 mb-5 light-btn" @click="handleNextStep">
              下一步
            </button>
          </div>
          <div v-else>
            <div class="mb-3">
              <label for="name" class="form-label">姓名</label>
              <input
                v-model="registerForm.name"  
                type="text"
                class="form-control mb-3"
                id="name"
                placeholder="請輸入姓名"
                required
              />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">手機號碼</label>
              <input
                v-model="registerForm.phone"
                type="text"
                class="form-control"
                id="phone"
                placeholder="請輸入手機號碼"
                required
              />
            </div>
            <div class="mb-3">
              <label for="birth_year" class="form-label">生日</label>
              <div class="d-flex">
                <input
                  v-model="registerForm.bornYear"  
                  type="text"
                  class="form-control me-2"
                  id="birth_year"
                  placeholder="1990年"
                  required
                />
                <input
                  v-model="registerForm.bornMonth"
                  type="text"
                  class="form-control me-2"
                  placeholder="8月"
                  required
                />
                <input
                  v-model="registerForm.bornDay"
                  type="text"
                  class="form-control"
                  placeholder="15日"
                  required
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">地址</label>
              <div class="d-flex mb-2">
                <VueTwZipCodeSelector
                  @getSelectedZone="getSelectedZone"
                />
                <!-- <input
                v-model="registerForm.address.city"
                  type="text"
                  class="form-control me-2"
                  id="address"
                  placeholder="高雄市"
                />
                <input
                  v-model="registerForm.address.country"
                  type="text"
                  class="form-control"
                  placeholder="新興區"
                /> -->
              </div>
              <input
                v-model="registerForm.address.detail"
                type="text"
                class="form-control me-2"
                placeholder="請輸入詳細地址"
              />
            </div>
            <div class="mb-5">
              <input type="checkbox" class="form-check-input" id="agree" />
              <label class="form-check-label" for="agree">我已閱讀並同意本網站個資使用規範</label>
            </div>
            <button
              type="submit"
              class="btn btn-primary w-100 p-3 mb-5 text-white"
              @click="handleRegister"
            >
              完成註冊
            </button>
          </div>
          <p>已經有會員了嗎? <RouterLink to="/login" class="text-primary">立即登入</RouterLink></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/NavbarComponent.vue"
import { postRegisterRequest } from '@/api/users'
import { RouterLink,useRouter } from 'vue-router'
import { ref } from 'vue'

interface registerData {
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
}

const router = useRouter()
const registerStep = ref<number>(1)
const registerForm = ref<registerData>({
  email: '',
  password: '',
  confirmPassword:'',
  name: '',
  phone: '',
  bornYear: undefined,
  bornMonth: undefined,
  bornDay: undefined,
  address:{
    zipcode: undefined,
    city: '',
    country:'',
    detail:''
  }
})

const handleNextStep = (e :Event) => {
  e.preventDefault()
  if(registerForm.value.email == ''){
    alert('請填寫Email')
    return
  }
  if(!registerForm.value.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){
    alert('密碼至少 8 碼以上，須包含英文字母和數字')
    return
  }
  if(registerForm.value.password !== registerForm.value.confirmPassword){
    alert('密碼與確認密碼不同')
    return
  }
  registerStep.value = 2
}

const handleRegister = () => {
  registerForm.value.birthday = `${registerForm.value.bornYear}/${registerForm.value.bornMonth}/${registerForm.value.bornDay}`
  postRegisterRequest(
    registerForm.value
  ).then(() => {
    alert('已完成註冊')
    router.push('/login')
  }).catch((err) => {
    alert (err.response.data.message)
  })
}

interface CustomEventWithValue {
  value: {
    zipCode: string,
    countryName: string,
    name: string,
  };
}

const getSelectedZone = (e: CustomEventWithValue) => {
  registerForm.value.address.zipcode = Number(e.value.zipCode)
  registerForm.value.address.city = e.value.countryName
  registerForm.value.address.country = e.value.name
}
</script>

<style scoped lang="scss">
@import '../style/all.scss';

.step-bg-active {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 5px auto;
}

.step-bg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #909090;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 5px auto;
  &-active{
    background-color: #bf9d7d;
  }
}

.step-line {
  background: #909090;
  max-width: 133px;
  height: 2px;
  margin: auto;
}
</style>
