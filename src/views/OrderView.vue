<template>
  <Navbar />
  <section class="bg-light">
    <div class="container">
      <div class="row gx-lg-5 mb-5 mb-lg-0">
        <div class="col-lg-7">
          <p class="fw-bold fs-3 mb-5">
            <span class="material-symbols-outlined fw-bold"> keyboard_arrow_left </span>
            確認訂房資訊
          </p>
          <div class="border-bottom border-2 pb-5 mb-5">
            <h2 class="fw-bold mb-4">訂房資訊</h2>
            <ul class="mb-0">
              <li class="d-flex justify-content-between align-items-center mb-4">
                <div class="d-flex flex-column">
                  <span class="subtitle-deco mb-1 fw-bold">選擇房型</span>
                  <span>尊爵雙人房</span>
                </div>
                <a href="#" class="text-black">編輯</a>
              </li>
              <li class="d-flex justify-content-between align-items-center">
                <div class="d-flex flex-column">
                  <span class="subtitle-deco mb-1 fw-bold">房客人數</span>
                  <span>2 人</span>
                </div>
                <a href="#" class="text-black">編輯</a>
              </li>
            </ul>
          </div>
          <div class="border-bottom border-2 pb-5 mb-5">
            <h2 class="mb-4 d-flex justify-content-between align-items-center fw-bold">
              訂房人資訊
              <a href="#" class="fs-6 primary">套用會員資料</a>
            </h2>
            <form class="fw-bold">
              <div class="mb-3">
                <label for="name" class="form-label">姓名</label>
                <input type="email" class="form-control mb-3" id="name" placeholder="請輸入姓名" />
              </div>
              <div class="mb-3">
                <label for="phone" class="form-label">手機號碼</label>
                <input type="text" class="form-control" id="phone" placeholder="請輸入手機號碼" />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">電子信箱</label>
                <input
                  type="email"
                  class="form-control mb-3"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="請輸入電子信箱"
                />
              </div>
              <div class="mb-3">
                <label for="address" class="form-label">地址</label>
                <div class="d-flex mb-2">
                  <input type="text" class="form-control me-2" id="address" placeholder="高雄市" />
                  <input type="text" class="form-control" placeholder="新興區" />
                </div>
                <input type="text" class="form-control me-2" placeholder="請輸入詳細地址" />
              </div>
            </form>
          </div>
          <div class="mb-5">
            <h2 class="fw-bold mb-5">房間資訊</h2>
            <h3 class="fs-4 subtitle-deco mb-4 fw-bold">房型基本資訊</h3>
            <ul class="d-flex text-black">
              <li class="room-detail-icon me-3">
                <span class="material-symbols-outlined text-primary">fit_screen</span>
                <br />24 坪
              </li>
              <li class="room-detail-icon me-3">
                <span class="material-symbols-outlined text-primary">bed</span>
                <br />1 張大床
              </li>
              <li class="room-detail-icon">
                <span class="material-symbols-outlined text-primary">person</span>
                <br />2-4 人
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
            <img
              src="../assets/img/room2-1.png"
              class="card-img-top rounded-3 mb-3 mb-lg-5"
              alt="img"
            />
            <div>
              <p class="fs-3 fw-bold mb-3">價格詳情</p>
              <p class="card-text d-flex justify-content-between mb-2">
                <span>NT$ 10,000 X 2 晚</span>
                <span>NT$ 20,000</span>
              </p>
              <p class="card-text d-flex justify-content-between pb-4 mb-4 border-bottom">
                <span>住宿折扣</span>
                <span class="text-primary">-NT$ 1,000</span>
              </p>
              <p class="card-text d-flex justify-content-between mb-4 fw-bold">
                <span>總價</span>
                <span>NT$ 19,000</span>
              </p>
              <a href="#" class="w-100 btn btn-primary text-white py-3">確認訂房</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer />
</template>

<script setup lang="ts">
import Navbar from '@/components/NavbarComponent.vue'
import Footer from '@/components/FooterComponent.vue'

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

.sidebar-sticky {
  position: sticky;
  top: 50px;
  height: 100%;
}
</style>
