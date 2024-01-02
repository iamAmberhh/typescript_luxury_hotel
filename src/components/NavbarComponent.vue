<template>
   <nav class="navbar navbar-dark navbar-expand-lg" style="height: 120px;">
      <div class="container-fluid">
        <RouterLink
          to="/"  
          class="navbar-brand"
        >
          <img src="@/assets/img/logo.png" alt="logo" class="img-fluid logo">
        </RouterLink>
        <button type="button" class="navbar-toggler" data-bs-toggle="modal" data-bs-target="#mobileNavLink">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="d-none d-lg-flex" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item me-lg-3">
              <RouterLink
                to="/rooms"
                class="nav-link active text-white p-3"
              >
                客房旅宿
              </RouterLink>
            </li>
            <li class="nav-item me-lg-3">
              <RouterLink
                to="/login"
                class="nav-link text-white p-3"
              >
                會員登入
              </RouterLink>
            </li>
            <li class="nav-item">
              <a class="link-white btn btn-primary p-3 px-4 text-white" href="#">立即訂房</a>
            </li>
          </ul>
        </div>
        <div class="d-lg-none modal fade" id="mobileNavLink" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header bg-dark p-4 border-bottom-0">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body bg-dark">
              <ul class="h-100 d-flex flex-column justify-content-center align-items-center text-center">
                <li class="mb-3" data-bs-dismiss="modal" aria-label="Close">
                  <RouterLink
                    to="/rooms"
                    class="nav-link active link-white p-3"
                  >
                  客房旅宿
                  </RouterLink>
                </li>
                <li class="mb-3" data-bs-dismiss="modal" aria-label="Close">
                  <RouterLink
                    to="/login"
                    class="nav-link link-white p-3"
                  >
                    會員登入
                  </RouterLink>
                </li>
                <li class="w-100" data-bs-dismiss="modal" aria-label="Close">
                  <RouterLink
                    to="/rooms"
                    class="d-block btn btn-primary p-3 px-4 text-white"
                  >
                    立即訂房
                  </RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>


<style scoped lang="scss">
.navbar-dark{
  background-color: none !important;
}
.navbar-brand {
  max-width: 300px;
}
</style>