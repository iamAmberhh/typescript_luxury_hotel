<template>
  <Navbar />

  <div class="text-white">
    <div
      class="row g-0"
      style="height: calc( 100dvh - 120px);"
    >
      <div class="col-6 d-none d-lg-block">
        <div class="login-bg"></div>
      </div>
      <div
        class="col-12 col-lg-6 bg-dark d-flex justify-content-center align-items-center title-deco-bg-line"
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
            class="btn w-100 p-3 mb-5 light-btn"
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
import Navbar from "@/components/NavbarComponent.vue"
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
@import '../style/all.scss';
</style>
