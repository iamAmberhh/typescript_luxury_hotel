<template>
  <Navbar />

  <section>
    <div class="container py-4">
      <div class="row gx-lg-5 gy-5">
        <div class="col-lg-7">
          <div class="border-bottom border-1 pb-5 mb-5">
            <div class="d-lg-flex align-items-center mb-4">
              <span class="success-icon mb-3 mb-lg-0 me-lg-3"
                ><i class="bi bi-check fs-1"></i
              ></span>
              <h2 class="text-white">恭喜，Jessica！<br />您已預訂成功</h2>
            </div>
            <p class="text-white">
              我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。
            </p>
          </div>
          <div class="border-bottom border-1 pb-5 mb-5">
            <h3 class="fs-5 text-white mb-4">立即查看你的訂單紀錄</h3>
            <a href="#" class="btn btn-primary text-white px-5">前往我的訂單</a>
          </div>
          <div>
            <h2 class="mb-4 text-white">訂房人資訊</h2>
            <ul class="text-white">
              <li class="mb-3">
                <p>姓名<br />Jessica Wang</p>
              </li>
              <li class="mb-3">
                <p>手機號碼<br />+886 912 345 678</p>
              </li>
              <li>
                <p>電子信箱<br />jessica@sample.com</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="huge-card">
            <div class="mb-4">
              <span class="text-dark-gray">預訂參考編號： HH2302183151222</span>
              <p class="fw-bold fs-3 mb-0">即將來的行程</p>
            </div>
            <img
              src="../assets/img/room2-1.png"
              class="card-img-top rounded-3 mb-3 mb-lg-4"
              alt="img"
            />
            <div>
              <p class="text-dark-gray fs-5 mb-4">
                尊爵雙人房，1 晚 <span class="mx-3 fs-6 align-top">|</span>住宿人數：2 位
              </p>
              <ul class="mb-4">
                <li class="subtitle-deco subtitle-deco-primary mb-3">
                  入住：6 月 10 日星期二，15:00 可入住
                </li>
                <li class="subtitle-deco subtitle-deco-secondary">
                  退房：6 月 11 日星期三，12:00 前退房
                </li>
              </ul>
              <p
                class="fw-bold mb-4 text-dark-gray border-bottom border-1 pb-4 pb-lg-5 mb-4 mb-lg-5"
              >
                NT$ 10,000
              </p>
              <div class="mb-4 mb-lg-5">
                <h3 class="fs-4 subtitle-deco subtitle-deco-primary fw-bold mb-4">房內設備</h3>
                <ul class="row g-0 mb-0 p-3 bg-white border border-1 rounded">
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>平面電視
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>吹風機
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>冰箱
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>熱水壺
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>檯燈
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>衣櫃
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>除濕機
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>浴缸
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>書桌
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>音響
                  </li>
                </ul>
              </div>
              <div>
                <h3 class="fs-4 subtitle-deco subtitle-deco-primary fw-bold mb-4">備品提供</h3>
                <ul class="row g-0 mb-0 p-3 bg-white border border-1 rounded">
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>衛生紙
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>拖鞋
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>沐浴用品
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>清潔用品
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>刮鬍刀
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>吊衣架
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>浴巾
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>刷牙用品
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>罐裝水
                  </li>
                  <li class="col-6 col-lg-4 d-flex align-items-center">
                    <i class="bi bi-check fs-3 text-primary"></i>梳子
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Footer />
</template>

<script setup>
import Navbar from '@/components/NavbarComponent.vue'
import Footer from '@/components/FooterComponent.vue'
</script>

<style lang="scss" scoped>
@import '../style/all.scss';

.success-icon {
  width: 56px;
  height: 56px;
  padding: 8px;
  border-radius: 50%;
  background: #52dd7e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-dark-gray {
  color: #4b4b4b;
}

.subtitle-deco {
  border-left: 4px solid;
  padding-left: 12px;

  &-primary {
    border-color: #bf9d7d;
  }
  &-secondary {
    border-color: #909090;
  }
}
</style>
