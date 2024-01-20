<template>
  <Navbar />
  <div class="member-section d-flex align-items-center ">
  <div class="container d-lg-flex align-items-center">
    <img src="../assets/img/user1.png" class="img-fluid mb-3 mb-lg-0 me-lg-3" alt="user-img">
    <h2 class="text-white">Hello，Jessica</h2>
  </div>
</div>

<section>
  <div class="container">
    <ul class="nav nav-pills mb-5" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">個人資料</button>
      </li>
      <li class="nav-item" role="presentation">
        <button class="nav-link" id="order-tab" data-bs-toggle="tab" data-bs-target="#order" type="button" role="tab" aria-controls="order" aria-selected="false">我的訂單</button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <div class="row gy-3 g-lg-5">
          <div class="col-lg-5">
            <div class="huge-card">
              <h3 class="d-flex justify-content-between mb-5 fw-bold">帳號資料
                <button class="btn btn-outline-primary">重設密碼</button>
              </h3>
              <form class="w-75">
                <div class="mb-3">
                  <label>電子信箱</label>
                  <p class="fw-bold">Jessica@exsample.com</p>
                </div>
                <div class="mb-3">
                  <label for="oldPassword" class="form-label">舊密碼</label>
                  <input type="password" class="form-control" id="oldPassword" placeholder="請輸入舊密碼">
                </div>
                <div class="mb-3">
                  <label for="newPassword" class="form-label">新密碼</label>
                  <input type="password" class="form-control" id="newPassword" placeholder="請輸入新密碼">
                </div>
                <div class="mb-3">
                  <label for="confirmPassword" class="form-label">確認新密碼</label>
                  <input type="password" class="form-control" id="confirmPassword" placeholder="請再輸入一次新密碼">
                </div>
                <a href="#" class="btn btn-light">儲存設定 </a>
              </form>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="huge-card">
              <h3 class="d-flex justify-content-between mb-5 fw-bold">基本資料
                <button class="btn btn-outline-primary">編輯資料</button>
              </h3>
              <ul class="d-none">
                <li class="mb-3">
                  <span class="text-dark-gray">姓名</span>
                  <br />
                  <span class="fw-bold">Jessica Wang</span>
                </li>
                <li class="mb-3">
                  <span class="text-dark-gray">手機號碼</span>
                  <br />
                  <span class="fw-bold">+886 912 345 678</span>
                </li>
                <li class="mb-3">
                  <span class="text-dark-gray">生日</span>
                  <br />
                  <span class="fw-bold">1990 年 8 月 15 日</span>
                </li>
                <li>
                  <span class="text-dark-gray">地址</span>
                  <br />
                  <span class="fw-bold">高雄市新興區六角路 123 號</span>
                </li>
              </ul>
              <form class="w-75">
                <div class="mb-3">
                  <label for="name" class="form-label">姓名</label>
                  <input type="email" class="form-control mb-3" id="name" placeholder="請輸入姓名">
                </div>
                <div class="mb-3">
                  <label for="phone" class="form-label">手機號碼</label>
                  <input type="text" class="form-control" id="phone" placeholder="請輸入手機號碼">
                </div>
                <div class="mb-3">
                  <label for="birth_year" class="form-label">生日</label>
                  <div class="d-flex">
                    <input type="password" class="form-control me-2" id="birth_year" placeholder="1990年">
                    <input type="password" class="form-control me-2" placeholder="8月">
                    <input type="password" class="form-control" placeholder="15日">
                  </div>
                </div>
                <div class="mb-3">
                  <label for="address" class="form-label">地址</label>
                  <div class="d-flex mb-2">
                    <input type="text" class="form-control me-2" id="address" placeholder="高雄市">
                    <input type="text" class="form-control" placeholder="新興區">
                  </div>
                  <input type="text" class="form-control me-2" placeholder="請輸入詳細地址">
                </div>
                <a href="#" class="btn btn-light">儲存設定</a>
              </form>
            </div>
          </div>
        </div>

      </div>
      <div class="tab-pane fade" id="order" role="tabpanel" aria-labelledby="order-tab">
        <div class="row gy-3 g-lg-5">
          <div class="col-lg-7">
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
              <div class="mb-4 mb-lg-5">
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
              <div class="d-flex">
                <a href="#" class="btn btn-primary text-white w-100 me-3">取消預定</a>
                <a href="#" class="btn btn-primary text-white w-100">查看詳情</a>
              </div>
            </div>
          </div>
          </div>
          <div class="col-lg-5">
            <div class="huge-card">
              <p class="fw-bold fs-3 mb-4">歷史訂單</p>
              <ul>
                <li class="d-lg-flex border-bottom pb-4 mb-4">
                  <img src="../assets/img/room4-4.png" style="width:120px; height:80px;" class="rounded me-3" alt="img">
                  <div>
                    <p class="mb-2">預訂參考編號： HH2302183151222</p>
                    <p class="text-dark-gray fw-bold mb-2">尊爵雙人房</p>
                    <ul class="mb-3">
                      <li class="mb-1">住宿天數：1晚</li>
                      <li>住宿人數：2位</li>
                    </ul>
                    <ul class="mb-3">
                      <li class="subtitle-deco subtitle-deco-primary mb-1">
                        入住：6 月 10 日星期二，15:00 可入住
                      </li>
                      <li class="subtitle-deco subtitle-deco-secondary">
                        退房：6 月 11 日星期三，12:00 前退房
                      </li>
                    </ul>
                    <p class="text-dark-gray">
                      NT$ 10,000
                    </p>
                  </div>
                </li>
                <li class="d-lg-flex border-bottom pb-4 mb-4">
                  <img src="../assets/img/room4-4.png" style="width:120px; height:80px;" class="rounded me-3" alt="img">
                  <div>
                    <p class="mb-2">預訂參考編號： HH2302183151222</p>
                    <p class="text-dark-gray fw-bold mb-2">尊爵雙人房</p>
                    <ul class="mb-3">
                      <li class="mb-1">住宿天數：1晚</li>
                      <li>住宿人數：2位</li>
                    </ul>
                    <ul class="mb-3">
                      <li class="subtitle-deco subtitle-deco-primary mb-1">
                        入住：6 月 10 日星期二，15:00 可入住
                      </li>
                      <li class="subtitle-deco subtitle-deco-secondary">
                        退房：6 月 11 日星期三，12:00 前退房
                      </li>
                    </ul>
                    <p class="text-dark-gray">
                      NT$ 10,000
                    </p>
                  </div>
                </li>
                <li class="d-lg-flex pb-4 mb-4">
                  <img src="../assets/img/room4-4.png" style="width:120px; height:80px;" class="rounded me-3" alt="img">
                  <div>
                    <p class="mb-2">預訂參考編號： HH2302183151222</p>
                    <p class="text-dark-gray fw-bold mb-2">尊爵雙人房</p>
                    <ul class="mb-3">
                      <li class="mb-1">住宿天數：1晚</li>
                      <li>住宿人數：2位</li>
                    </ul>
                    <ul class="mb-3">
                      <li class="subtitle-deco subtitle-deco-primary mb-1">
                        入住：6 月 10 日星期二，15:00 可入住
                      </li>
                      <li class="subtitle-deco subtitle-deco-secondary">
                        退房：6 月 11 日星期三，12:00 前退房
                      </li>
                    </ul>
                    <p class="text-dark-gray">
                      NT$ 10,000
                    </p>
                  </div>
                </li>
              </ul>
              <a href="#" class="btn btn-outline-primary w-100 py-3">查看更多<i class="bi bi-chevron-down ms-3"></i></a>
            </div>

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

.nav-link{
  color: white;
}

.nav-item .active{
  position: relative;
  background-color: transparent;
  &::after{
    content: "";
    position: absolute;
    bottom: -5px;
    left: 25%;
    background: #bf9d7d;
    width: 50%;
    height: 4px;
  }
}
.member-section{
  background: url(../assets/img/hero.png) no-repeat center/cover ;
  height: 206px;
   img{
    width: 72px;
    height: 72px;
  }
  @media(min-width:768px){
    height: 384px;
    img{
       width: 144px;
      height: 144px;
    }
  }
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