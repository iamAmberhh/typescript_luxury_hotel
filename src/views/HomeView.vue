<template>
  <main>
    <div class="banner-bg">
      <div class="banner-shadow">
        <Navbar></Navbar>
        <div class="container-fluid">
          <div class="row banner-session">
            <div
              class="col-lg-6 text-primary d-flex flex-column justify-content-center align-items-center align-items-lg-start"
            >
              <h1 class="display-5 fw-bold">享樂酒店</h1>
              <p class="fw-bold text-primary">Enjoyment Luxury Hotel</p>
              <div class="banner-title-deco-line"></div>
            </div>
            <div class="col-lg-6">
              <div class="banner-title-opacity-bg">
                <h2 class="display-1 fw-bold mb-4">高雄<br />豪華住宿之選</h2>
                <p class="fs-5 mb-5" style="font-weight: 600;">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
                <a href="#" class="btn btn-white py-3 index-width-btn fw-bold fs-5">立即訂房</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 最新消息 -->
    <section class="bg-light position-relative">
      <div class="deco-dot deco-dot-news-section"></div>
      <div class="container news-section">
        <div class="row gy-5">
          <div class="col-6 col-lg-2">
            <h2 class="fs-1 fw-bold text-primary mb-4 mb-lg-5">最新<br />消息</h2>
            <div class="sub-title-deco-line"></div>
          </div>
          <div class="col-12 col-lg-10">
            <div class="d-md-flex align-items-center mb-5">
              <img
                src="../assets/img/news1.png"
                class="card-img-top rounded mb-3 mb-md-0 me-md-4"
                alt="news"
              />
              <div class="card-body text-black">
                <h3 class="card-title fw-bold mb-lg-4">秋季旅遊，豪華享受方案</h3>
                <p class="card-text text-black">
                  秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
                </p>
              </div>
            </div>
            <div class="d-md-flex align-items-center mb-5">
              <img
                src="../assets/img/news2.png"
                class="card-img-top rounded mb-3 mb-md-0 me-md-4"
                alt="news"
              />
              <div class="card-body text-black">
                <h3 class="card-title fw-bold mb-lg-4">輕鬆住房專案</h3>
                <p class="card-text text-black">
                  我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。
                </p>
              </div>
            </div>
            <div class="d-md-flex align-items-center mb-5">
              <img
                src="../assets/img/news3.png"
                class="card-img-top rounded mb-3 mb-md-0 me-md-4"
                alt="news"
              />
              <div class="card-body text-black">
                <h3 class="card-title fw-bold mb-lg-4">耶誕快樂，住房送禮</h3>
                <p class="card-text text-black">
                  聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 關於我們 -->
    <section class="position-relative">
      <div class="deco-dot deco-dot-about-section"></div>
      <div class="about-bg">
        <div class="row">
          <div class="col-lg-9 offset-lg-2">
            <div class="about-content">
              <div class="d-flex align-items-center mb-5">
                <h2 class="fs-1 fw-bold me-5">關於<br />我們</h2>
                <div class="about-section-deco-line"></div>
              </div>
              <p>
                享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br />
                我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
              </p>
              <br />
              <p>
                我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br />
                我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
              </p>
              <br />
              <p>
                在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
              </p>
              <br />
              <p>
                享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 房型 -->
    <section class="position-relative">
      <div class="room-section-deco-line"></div>
      <div class="room-section-deco-wave"></div>
      <div class="container-fluid ps-md-0">
        <div class="row text-white gx-0 gx-md-4 gy-3 align-items-end">
          <div class="col-md-6 mb-4 mb-lg-0">
            <img
              src="../assets/img/room1.png"
              class="img-fluid"
              alt="room"
            />
          </div>
          <div class="col-md-5">
            <h3 class="fs-2 fw-bold">尊爵雙人房</h3>
            <p class="fs-sm mb-3 mb-lg-5">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
            <p class="fs-2 fw-bold mb-4">NT$ 10,000</p>
            <div>
              <a href="#" class="w-100 btn btn-white py-3 index-width-btn">查看更多</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 美饌佳餚 -->
    <section class="bg-light position-relative">
      <div class="deco-dot deco-dot-food-section"></div>
      <div class="deco-line-food-section"></div>
      <div class="container">
        <div class="d-flex align-items-center mb-5">
          <h2 class="fs-1 fw-bold text-primary me-5">佳餚<br />美饌</h2>
          <div class="sub-title-deco-line"></div>
        </div>
        <div class="food-section">
          <swiper
            :slidesPerView="foodSectionSlides"
            :spaceBetween="24"
            :freeMode="true"
            :loop="true"
            class="food-section-swiper"
          >
            <swiper-slide>
              <div class="card text-white">
                <img
                  src="../assets/img/food1.png"
                  class="card-img"
                  alt="picture"
                />
                <div class="card-img-overlay card-bg p-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="card-title fw-bold">海霸</h3>
                    <div>
                      <span class="me-3">SUN-MON</span>
                      <span>11:00 - 20:30</span>
                    </div>
                  </div>
                  <p class="card-text">
                    以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card text-white">
                <img
                  src="../assets/img/food2.png"
                  class="card-img"
                  alt="picture"
                />
                <div class="card-img-overlay card-bg p-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="card-title fw-bold">日食</h3>
                    <div>
                      <span class="me-3">SUN-MON</span>
                      <span>17:00 - 22:00</span>
                    </div>
                  </div>
                  <p class="card-text">
                    為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card text-white">
                <img
                  src="../assets/img/food3.png"
                  class="card-img"
                  alt="picture"
                />
                <div class="card-img-overlay card-bg p-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="card-title fw-bold">山臻</h3>
                    <div>
                      <span class="me-3">SUN-MON</span>
                      <span>11:30 - 20:30</span>
                    </div>
                  </div>
                  <p class="card-text">
                    帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card text-white">
                <img
                  src="../assets/img/food4.png"
                  class="card-img"
                  alt="picture"
                />
                <div class="card-img-overlay card-bg p-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="card-title fw-bold">月永</h3>
                    <div>
                      <span class="me-3">SUN-MON</span>
                      <span>11:00 - 20:00</span>
                    </div>
                  </div>
                  <p class="card-text">
                    從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。
                  </p>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="card text-white">
                <img
                  src="../assets/img/food5.png"
                  class="card-img"
                  alt="picture"
                />
                <div class="card-img-overlay card-bg p-4">
                  <div class="d-flex justify-content-between align-items-center">
                    <h3 class="card-title fw-bold">天潮</h3>
                    <div>
                      <span class="me-3">SUN-MON</span>
                      <span>14:00 - 19:30</span>
                    </div>
                  </div>
                  <p class="card-text">
                    我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。
                  </p>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <!-- 交通方式 -->
    <section class="position-relative mb-5">
      <div class="deco-line-traffic-section"></div>
      <div class="container pb-5">
        <div class="d-flex align-items-center mb-5">
          <h2 class="fs-1 fw-bold text-primary me-5">交通<br />方式</h2>
          <div class="sub-title-deco-line"></div>
        </div>
        <p class="text-white mb-3">台灣高雄市新興區六角路123號</p>
        <div class="traffic-map mb-5"></div>
        <div class="row text-white gy-4 gy-lg-0 gx-lg-5">
          <div class="col-md-4">
            <span class="text-primary">icon</span>
            <h4 class="my-2">自行開車</h4>
            <p>
              如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
            </p>
          </div>
          <div class="col-md-4">
            <span class="text-primary">icon</span>
            <h4 class="my-2">高鐵/火車</h4>
            <p>
              如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
            </p>
          </div>
          <div class="col-md-4">
            <span class="text-primary">icon</span>
            <h4 class="my-2">禮賓車服務</h4>
            <p>
              承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
            </p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <footer class="container">
        <div class="row text-white justify-content-between" style="margin-bottom: 80px;">
          <div class="col-lg-2 mb-5 mb-lg-0">
            <img
              src="../assets/img/logo.png"
              style="width: 196px"
              class="img-fluid d-block mb-4"
              alt="logo"
            />
            <ul class="d-flex ps-0">
              <li class="footer-social-icon me-2"><i class="bi bi-facebook fs-4"></i></li>
              <li class="footer-social-icon"><i class="bi bi-instagram fs-4"></i></li>
            </ul>
          </div>
          <div class="col-lg-5 d-lg-flex justify-content-end">
            <ul class="ps-0 me-lg-5">
              <li class="mb-3">
                <p class="fw-bold">TEL</p>
                <span>+886-7-1234567</span>
              </li>
              <li class="mb-3">
                <p class="fw-bold">FAX</p>
                <span>+886-7-1234567</span>
              </li>
            </ul>
            <ul class="ps-0">
              <li class="mb-3">
                <p class="fw-bold">MAIL</p>
                <span>elh@hexschool.com</span>
              </li>
              <li>
                <p class="fw-bold">WEB</p>
                <span>www.elhhexschool.com.tw</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="d-lg-flex justify-content-between align-items-center">
          <p class="mb-2 mb-lg-0">806023 台灣高雄市新興區六角路123號</p>
          <p>© 享樂酒店 2023 All Rights Reserved.</p>
        </div>
      </footer>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from 'vue'
import Navbar from "@/components/NavbarComponent.vue"
import { Swiper, SwiperSlide } from 'swiper/vue'
// import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const foodSectionSlides = ref(3)
const windowWidth = ref(window.innerWidth)

onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

watch(
  windowWidth, 
  (value) => {
    foodSectionSlides.value = value <= 996 ? 1.2 : 3
  }, 
  { immediate: true }
)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}
</script>

<style scoped lang="scss">
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
  &:hover{
    .index-width-btn{
      z-index:5;
      &:hover{
        background: #BF9D7D;
        border-color: #BF9D7D;
        color: white;
        &::after {
          content: "";
          background: white;
        }
      }
    }
  }
  
}

 .index-width-btn {
  position: relative;
  text-align: right;
  padding-right: 30%;
  width: 90%;
  color: black;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    background: black;
    width: 20%;
    height: 1px;
    right: 8%;
  }
  &:hover{
    background: #BF9D7D;
    border-color: #BF9D7D;
    color: white;
    &::after {
      content: "";
      background: white;
    }
  }
}

section {
  padding: 80px 0;
  @media (min-width: 996px) {
    padding: 120px 0;
  }
}

.sub-title-deco-line {
  width: 140px;
  height: 2px;
  background: linear-gradient(to right, #be9c7c, #fff);
}

.deco-dot{
  background: url(../assets/img/dot.png) no-repeat center/cover;
  position: absolute;
  width: 100px;
  height: 100px;
  @media (min-width: 996px) {
    width: 200px;
    height: 200px;
  }

  &-news-section{
    top: 40px;
    right: 24px;
    @media (min-width: 996px) {
      top: 100px;
      right: 180px;
    }
  }

  &-about-section{
    top: -5%;
    left: 24px;
    @media (min-width: 996px) {
      top: -15%;
    }
  }

  &-food-section{
    display: none;
    @media (min-width: 996px) {
      display: block;
      top: -30px;
      right: 80px;
    }
  }
}

.news-section {
  img {
    @media (min-width: 768px) {
      max-width: 350px;
    }
    @media (min-width: 996px) {
      max-height: 294px;
      max-width: 474px;
    }
  }
}

.about-bg {
  background: url(../assets/img/about.png) no-repeat center/cover;
  padding: 40px 40px 0px 40px;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: #140F0A;
    height: 40px;
    z-index: 1;
  }

  @media (min-width: 996px) {
    padding: 80px 80px 0px 80px;
    &::after {
      height: 80px;
    }
  }
}

.about-content {
  padding: 24px;
  color: white;
  background: linear-gradient(
    to bottom,
    rgba(20, 15, 10, 0.8),
    rgba(190, 156, 124, 0.8)
  );
  border-radius: 40px 40px 0px 40px;
  border-bottom: 1px solid white;
  border-left: 1px solid #f5f7f9;
  position: relative;
  z-index: 5;
  @media (min-width: 996px) {
    padding: 40px;
  }
}

.about-section-deco-line {
  width: 160px;
  height: 2px;
  background: white;
}

.room-section-deco-line {
  background: url(../assets/img/line3.png) no-repeat right top/100%;
  position: absolute;
  width: 80%;
  height: 84px;
  top: 0;
  right: 0;
  @media (min-width: 768px) {
    height: 187px;
    width: 55%;
    top: 15%;
  }
}

.room-section-deco-wave {
  background: url(../assets/img/bg.png) no-repeat right 0/contain;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 8%;
  height: 232px;
  @media (min-width: 768px) {
    background-size: cover;
    height: 450px;
    bottom: -10%;
  }
  @media (min-width: 996px) {
    bottom: 0;
  }
}

.deco-line-food-section{
  background: url(../assets/img/line.png) no-repeat 0/cover;
  position: absolute;
  @media (min-width: 996px) {
    width: 187px;
    height: 100%;
    top: 55px;
    bottom: -30px;
  }
}
.food-section {
  .food-section-swiper {
    width: 100%;
    height: 600px;
  }

  .swiper-slide {
    border-radius: 8px;
    overflow: hidden;
  }

  .card-img-overlay {
    top: auto !important;
  }
  .card-bg {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #140F0A 77.6%);
  }
}

.traffic-map{
  height: 360px;
  width: 100%;
  border-radius: 8px;
  background: url(../assets/img/map_mobile.png) no-repeat center/cover;
  @media(min-width:768px){
    background: url(../assets/img/map.png) no-repeat center/cover;
  }
}

.deco-line-traffic-section{
  background: url(../assets/img/line2.png) no-repeat center/cover;
  position: absolute;
  width: 100%;
  height: 188px;
  bottom: -10%;

  @media (min-width: 996px) {
    background-size: contain;
  }
}
.footer-social-icon{
  width: 40px;
  height: 40px;
  border-radius:50%;
  border: 1px solid white;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}



</style>
