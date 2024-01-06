<template>
  <Navbar />
  <div class="pt-lg-5 px-lg-5 bg-light">
    <swiper
      :modules="modules"
      :loop="true"
      :pagination="pagination"
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
    </swiper>
  </div>
  <section class="bg-light">
    <div class="container">
      <div class="row gx-lg-5 mb-5 mb-lg-0">
        <div class="col-lg-7">
          <h1 class="text-primary fw-bold">尊爵雙人房</h1>
          <p class="text-black" style="margin-bottom: 80px;">
            享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
          </p>
          <div class="mb-5">
            <h3 class="fs-4 subtitle-deco mb-4 fw-bold">房型基本資訊</h3>
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
          </div>
          <div class="mb-5">
            <h3 class="fs-4 subtitle-deco mb-4 fw-bold">房間格局</h3>
            <ul class="row bg-white g-0 p-3">
              <li class="col-4 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>市景
              </li>
              <li class="col-4 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>獨立衛浴
              </li>
              <li class="col-4 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>客廳
              </li>
              <li class="col-4 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>書房
              </li>
              <li class="col-4 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>樓層電梯
              </li>
            </ul>
          </div>
          <div class="mb-5">
            <h3 class="fs-4 subtitle-deco mb-4 fw-bold">房內設備</h3>
            <ul class="row g-0 mb-0 p-3 bg-white">
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>平面電視
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>吹風機
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>冰箱
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>熱水壺
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>檯燈
              </li>
              <li class="d-none d-lg-block col-lg-2 d-flex align-items-center"></li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>衣櫃
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>除濕機
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>浴缸
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>書桌
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>音響
              </li>
            </ul>
          </div>
          <div class="mb-5">
            <h3 class="fs-4 subtitle-deco mb-4 fw-bold">備品提供</h3>
            <ul class="row g-0 mb-0 p-3 bg-white">
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>衛生紙
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>拖鞋
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>沐浴用品
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>清潔用品
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>刮鬍刀
              </li>
              <li class="d-none d-lg-block col-lg-2 d-flex align-items-center"></li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>吊衣架
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>浴巾
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>刷牙用品
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>罐裝水
              </li>
              <li class="col-6 col-lg-2 d-flex align-items-center">
                <i class="bi bi-check fs-3 text-primary me-1"></i>梳子
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5 sidebar-sticky">
          <div class="huge-card">
            <p class="fw-bold mb-4">預訂房型</p>
            <div class="mb-4">
              <h2 class="fw-bold">尊爵雙人房</h2>
              <p>享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            </div>
            <p class="text-primary mb-4 fs-4 fw-bold">NT$ 10,000</p>
            <a href="#" class="btn btn-primary w-100 text-white">立即預訂</a>
          </div>
        </div>
      </div>
      <div>
        <h3 class="fs-4 subtitle-deco mb-4 fw-bold">訂房須知</h3>
        <ol>
          <li>入住時間為下午3點，退房時間為上午12點。</li>
          <li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
          <li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
          <li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
          <li>請愛惜我們的房間與公共空間，並保持整潔。</li>
          <li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
          <li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
          <li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
          <li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
          <li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
        </ol>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup>
import Navbar from '@/components/NavbarComponent.vue'
import Footer from '@/components/FooterComponent.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import '@/style/all.scss'

const modules = [Pagination]
 
const pagination = {
  clickable: true,
  el:'.swiper-pagination'
}
</script>

<style lang="scss" scoped>
@import '../style/all.scss';
.subtitle-deco {
  border-left: 4px solid #bf9d7d;
  padding-left: 12px;
}

.text-black {
  color: black;
}

.room-detail-icon {
  border-radius: 10px;
  padding: 20px;
  border: 2px solid #f1eae4;
  background: white;
}

.sidebar-sticky{
  position: sticky;
  top: 50px;
  height: 100%;
}

.swiper {
  width: 100%;
  height: auto;
  border-radius: 20px;
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
</style>
