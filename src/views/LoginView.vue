<template>
  <div class="text-white">
    <div
      class="row g-0"
      style="height: calc( 100dvh - 120px);"
    >
      <div class="col-6 d-none d-lg-block">
        <div class="login-bg"></div>
      </div>
      <div
        class="col-12 col-lg-4 offset-lg-1 bg-dark d-flex justify-content-center align-items-center"
      >
        <form class="w-75">
          <span
            class="text-primary mb-2 fs-6"
          >
            享樂酒店，誠摯歡迎
          </span>
          <h2
            class="mb-4 fw-bold"
            style="font-size: 32px"
          >
            立即開始旅程
          </h2>
          <div class="mb-3">
            <label
              for="email"
              class="form-label"
            >
              電子信箱
            </label>
            <input
              type="email"
              class="form-control mb-3"
              id="email"
              placeholder="hello@exsample.com"
            />
          </div>
          <div class="mb-3">
            <label
              for="password"
              class="form-label"
            >
              密碼
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="請輸入密碼"
            />
          </div>
          <div class="mb-5 form-check d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" class="form-check-input" id="accountRemember" />
              <label class="form-check-label" for="accountRemember">記住帳號</label>
            </div>
            <a href="#" class="text-primary">忘記密碼?</a>
          </div>
          <RouterLink
            to="/member"
            class="btn btn-light w-100 p-3 mb-5 login-btn"
          >
            會員登入
          </RouterLink>
          <p>
            沒有會員嗎?
            <RouterLink
              to="/register"
              class="text-primary"
            >
              前往註冊
            </RouterLink>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
.login-bg {
  width: 100%;
  height: 100%;
  background: url(https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/register.png?raw=true) center/cover no-repeat;

}

.login-btn {
  color: #909090;
  &:hover {
    background: #bf9d7d;
    color: #fff;
  }
}
</style>
