<template>
  <footer class="container">
    <div class="row text-white justify-content-between g-0" style="margin-bottom: 80px;">
      <div class="col-lg-2 mb-5 mb-lg-0">
        <img
          src="../assets/img/logo.png"
          style="width: 196px"
          class="img-fluid d-block mb-4"
          alt="logo"
        />
        <ul class="d-flex ps-0">
          <li class="footer-social-icon me-3"><i class="bi bi-facebook fs-5"></i></li>
          <li class="footer-social-icon"><i class="bi bi-instagram fs-5"></i></li>
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
    <div class="d-lg-flex justify-content-between align-items-center text-white">
      <p class="mb-2 mb-lg-0">806023 台灣高雄市新興區六角路123號</p>
      <p>© 享樂酒店 2023 All Rights Reserved.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer{
  padding: 80px 0;
  @media (min-width: 996px) {
    padding: 120px 0;
  }
}

.footer-social-icon{
  width: 40px;
  height: 40px;
  border-radius:50%;
  border: 1px solid white;
  padding: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>