<template>
  <div class="banner-bg">
    <div class="banner-shadow">
      <Navbar/>
      <div class="container">
        <div class="row banner-session d-flex justify-content-center">
          <div
            class="col-lg-5 text-primary d-flex flex-column justify-content-center align-items-center align-items-lg-start"
          >
            <h1 class="display-5 fw-bold">享樂酒店</h1>
            <p class="fw-bold text-primary">Enjoyment Luxury Hotel</p>
            <div class="banner-title-deco-line"></div>
          </div>
          <div class="col-lg-4">
            <h2 class="display-1 fw-bold text-center text-white">客房旅宿</h2>
          </div>
        </div>
      </div>
    </div>
  </div>

  <section class="bg-light">
    <div class="container room-list">
      <p class="text-secondary fw-bold mb-3">房型選擇</p>
      <h2 class="text-primary fw-bold mb-5">各種房型，任您挑選</h2>
      <ul>
        <li class="card">
          <div class="row g-0 align-items-center">
            <div class="col-lg-7">
              <swiper
                :modules="modules"
                :loop="true"
                :pagination="pagination"
                :navigation="navigation"
                class="swiper"
              >
                <swiper-slide>
                  <img src="../assets/img/room2-1.png" class="card-img-top rounded-0" alt="room">
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/img/room2-2.png" class="card-img-top rounded-0" alt="room">
                </swiper-slide>
                <swiper-slide>
                  <img src="../assets/img/room2-4.png" class="card-img-top rounded-0" alt="room">
                </swiper-slide>
                <div class="swiper-pagination"></div>
                <div class="d-none d-lg-flex swiper-btn swiper-btn-prev">
                  <span class="material-symbols-outlined text-primary fw-bold">
                    keyboard_arrow_left
                  </span>
                </div>
                <div class="d-none d-lg-flex swiper-btn swiper-btn-next">
                  <span class="material-symbols-outlined text-primary fw-bold">
                    keyboard_arrow_right
                  </span>
                </div>
            </swiper>
            </div>
            <div class="col-lg-5">
              <div class="card-body p-4 px-lg-5">
                <h3 class="card-title text-black fw-bold">尊爵雙人房</h3>
                <p class="card-text text-secondary mb-5">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
                <ul class="d-flex text-black">
                  <li class="room-detail-icon me-3">
                    <span class="material-symbols-outlined text-primary">fit_screen</span>
                    <br>24 坪
                  </li>
                  <li class="room-detail-icon me-3">
                    <span class="material-symbols-outlined text-primary">bed</span>
                    <br>1 張大床
                  </li>
                  <li class="room-detail-icon">
                    <span class="material-symbols-outlined text-primary">person</span>
                    <br>2-4 人
                  </li>
                </ul>
                <div class="line-deco my-3 my-lg-5"></div>
                <div class="d-flex justify-content-between align-items-center">
                  <p class="mb-0 text-primary fs-3 fw-bold">NT$ 10,000</p>
                  <span class="material-symbols-outlined text-primary fs-3">
                    arrow_forward
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@/components/NavbarComponent.vue"
import Footer from "@/components/FooterComponent.vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '@/style/all.scss'

const modules = [Navigation, Pagination]
const navigation = {
  nextEl: '.swiper-btn-next',
  prevEl: '.swiper-btn-prev',
}
 
const pagination = {
  clickable: true,
  el:'.swiper-pagination'
}
</script>

<style lang="scss" scoped>

.banner-bg {
  min-height: 100dvh;
  background-image: url(../assets/img/banner.png);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}

.banner-shadow {
  background: rgba(0, 0, 0, 0.6);
  min-height: 100dvh;
}

.banner-session {
  min-height: 90dvh;
  align-items: center;
}

.banner-title-deco-line {
  width: 2px;
  height: 100px;
  background: linear-gradient(to bottom, #be9c7c, #fff);
  @media (min-width: 996px) {
    width: 90%;
    height: 2px;
    background: linear-gradient(to right, #be9c7c, #fff);
    margin-top: 40px;
  }
}

.banner-title-opacity-bg {
  position: relative;
  padding: 60px 30px;
  &::after {
    position: absolute;
    content: "";
    width: 80%;
    top: 0;
    left: 60px;
    bottom: 0;
    border-radius: 30px;
    border-block-start: 1px solid #f5f7f9;
    border-right: 1px solid #f5f7f9;
    background-image: linear-gradient(
      to bottom,
      transparent,
      rgba(256, 256, 256, 0.3)
    );
  }
  @media(min-width:756px){
    padding: 60px 30px 60px 0px;
    &::after {
      left: 40px;
    }
  }
}

.room-list {
  .card {
    border-radius: 15px;
    overflow: hidden;
    img {
      height: 200px;
      object-fit: cover;
    }
    @media (min-width: 996px) {
      img {
        height: 470px;
      }
    }
  }
}

.room-detail-icon {
  border-radius: 10px;
  padding: 16px 20px;
  border: 2px solid #f1eae4;
  color:black
}

.line-deco {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #be9c7c, #fff);
}

.swiper {
  width: 100%;
  height: auto;
}

.room-list .swiper-btn {
  position: absolute;
  cursor: pointer;
  z-index: 10;
  background-color: white;
  color: #be9c7c;
  font-size: 20px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  &-prev{
    top: 45%;
    left: 24px;
  }
  &-next{
    top: 45%;
    right: 24px;
  }
}

</style>