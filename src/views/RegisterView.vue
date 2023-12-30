<template>
  <div class="text-white">
    <div class="row g-0" style="height: calc(100dvh - 120px)">
      <div class="col-6 d-none d-lg-block">
        <div class="login-bg"></div>
      </div>
      <div
        class="col-12 col-lg-6 bg-dark d-flex justify-content-center align-items-center title-deco-bg-line"
      >
        <form class="w-75">
          <span v-if="registerStep === 1" class="text-primary mb-2 fs-6"> 享樂酒店，誠摯歡迎</span>
          <h2 class="mb-4 subtitle">立即註冊</h2>
          <div class="row mb-5">
            <div class="col-4 text-center">
              <span class="step-active-bg">1</span>
              <span>輸入信箱及密碼</span>
            </div>
            <div class="col-4 text-secondary step-line"></div>
            <div class="col-4 text-center text-secondary">
              <span class="step-bg">2</span>
              <span>填寫基本資料</span>
            </div>
          </div>
          <!-- step 1 -->
          <div v-if="registerStep === 1">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">電子信箱</label>
              <input
                type="email"
                class="form-control mb-3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="hello@exsample.com"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">密碼</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="請輸入密碼"
              />
            </div>
            <div class="mb-5">
              <label for="exampleInputPassword1" class="form-label">確認密碼</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="請再輸入一次密碼"
              />
            </div>
            <button class="btn btn-light w-100 p-3 mb-5 light-btn" @click="handleNextStep">
              下一步
            </button>
          </div>
          <div v-else>
            <div class="mb-3">
              <label for="name" class="form-label">姓名</label>
              <input type="email" class="form-control mb-3" id="name" placeholder="請輸入姓名" />
            </div>
            <div class="mb-3">
              <label for="phone" class="form-label">手機號碼</label>
              <input type="text" class="form-control" id="phone" placeholder="請輸入手機號碼" />
            </div>
            <div class="mb-3">
              <label for="birth_year" class="form-label">生日</label>
              <div class="d-flex">
                <input
                  type="password"
                  class="form-control me-2"
                  id="birth_year"
                  placeholder="1990年"
                />
                <input type="password" class="form-control me-2" placeholder="8月" />
                <input type="password" class="form-control" placeholder="15日" />
              </div>
            </div>
            <div class="mb-3">
              <label for="address" class="form-label">地址</label>
              <div class="d-flex mb-2">
                <input type="text" class="form-control me-2" id="address" placeholder="高雄市" />
                <input type="text" class="form-control" placeholder="新興區" />
              </div>
              <input type="text" class="form-control me-2" placeholder="請輸入詳細地址" />
            </div>
            <div class="mb-5">
              <input type="checkbox" class="form-check-input" id="agree" />
              <label class="form-check-label" for="agree">我已閱讀並同意本網站個資使用規範</label>
            </div>
            <button type="submit" class="btn btn-primary w-100 p-2 mb-5">完成註冊</button>
          </div>
          <p>已經有會員了嗎? <RouterLink to="/login" class="text-primary">立即登入</RouterLink></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const registerStep = ref(1)

const handleNextStep = (e) => {
  e.preventDefault()
  registerStep.value = 2
}
</script>

<style scoped lang="scss">
@import '../style/all.scss';

.step-active-bg {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #bf9d7d;
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
}

.step-line {
  background: #909090;
  max-width: 133px;
  height: 2px;
  margin: auto;
}
</style>
