<template>
  <the-header></the-header>
  <router-view></router-view>
  <scroll-to-top></scroll-to-top>
  <the-footer></the-footer>
</template>
<script>
import TheHeader from "./components/global/TheHeader.vue";
import TheFooter from "./components/global/TheFooter.vue";
import AOS from "aos";
import ScrollToTop from "./components/Helper/ScrollToTop.vue";
export default {
  components: {
    TheHeader,
    TheFooter,
    ScrollToTop,
  },

  mounted() {
    AOS.init();
  },
};
</script>
<style >
.my-scroll-up {
  align-items: center;
  background-color: rgba(192, 33, 33, 0.658);
  border: rgba(200, 62, 62, 0.658);
  border-radius: 100px;
  bottom: 100px;
  color: white;
  cursor: pointer;
  display: flex;
  height: 55px;
  justify-content: center;
  position: fixed;
  right: 10px;
  width: 55px;
  z-index: 99;
}

.my-scroll-up::after {
  border: 2px solid white;
  border-radius: 10px;
  content: "";
  display: block;
  height: 25px;
  margin: 0 auto;
  width: 10px;
}

.my-scroll-up::before {
  animation: 2s top infinite;
  border: 1px solid white;
  border-radius: 10px;
  content: "";
  display: block;
  height: 10px;
  left: 49%;
  position: absolute;
  width: 0;
}

@keyframes top {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@media screen and (max-width: 450px) {
  .vue-scroll-up {
    bottom: 10px;
    transform: translateX(5px) scale(0.7);
  }
}
* {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Poppins", sans-serif;
  background: #4834d4;
  overflow-x: hidden;
  background: -webkit-linear-gradient(to right, #4834d4, #341f97);
  background: -webkit-linear-gradient(left, #4834d4, #341f97);
  background: linear-gradient(to right, #4834d4, #341f97);
}
.darker-blue {
  background: linear-gradient(
    180deg,
    #240044 0,
    #0f0240 25%,
    #400959 40%,
    #0f0240 65%,
    #0f0240
  );
}
.darker {
  background: #03091f;
}
.darker2 {
  background: #090134;
}
.darkest {
  background: #111028;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
  color: #fff;
  line-height: 1.4;
  font-weight: 500;
}

a,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  outline: none;
}

li {
  list-style: none;
}

p {
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
}

img {
  max-width: 100%;
  height: auto;
}

ul,
ol {
  margin: 0;
  padding: 0;
}
.section-header {
  position: relative;
  margin-bottom: 50px;
}
.section-title {
  font-size: 44px;
  margin-bottom: 20px;
  margin-top: 0;
  position: relative;
  text-align: center;
  color: #fff;
}
.section-header .desc {
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
}
.bg-title {
  margin-bottom: -37px;
  margin-left: -30px;
  font-size: 66px;
  opacity: 0.04;
  font-weight: bold;
  text-align: center;
  line-height: 1;
  text-transform: uppercase;
}
.has-print {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 90px;
  height: 90px;
  background: transparent no-repeat;
}
.header-area .light.classy-nav-container a {
  color: #fff;
}
/*
.header-area.sticky .light.classy-nav-container a{
    color: #333
}
*/
.header-area.sticky .classy-navbar-toggler .navbarToggler span {
  background: #333 !important;
}

.mt-15 {
  margin-top: 15px;
}
.mt-20 {
  margin-top: 20px;
}
.mt-30 {
  margin-top: 30px;
}

.mt-40 {
  margin-top: 40px;
}

.mt-50 {
  margin-top: 50px;
}

.mt-100 {
  margin-top: 100px;
}

.mt-150 {
  margin-top: 150px;
}
.mr-5p {
  margin-right: 5px;
}
.mr-10p {
  margin-right: 10px;
}
.mr-15 {
  margin-right: 15px;
}

.mr-30 {
  margin-right: 30px;
}

.mr-50 {
  margin-right: 50px;
}

.mr-100 {
  margin-right: 100px;
}
.no-padding-right {
  padding-right: 0 !important;
}
.no-padding-left {
  padding-left: 0 !important;
}
@media (max-width: 767px) {
  .no-padding-right {
    padding-right: 15px !important;
  }
  .no-padding-left {
    padding-left: 15px !important;
  }
}
.mb-0 {
  margin-bottom: 0 !important;
}
.mb-15 {
  margin-bottom: 15px;
}

.mb-30 {
  margin-bottom: 30px !important;
}

.mb-40 {
  margin-bottom: 40px;
}

.mb-50 {
  margin-bottom: 50px;
}

.mb-100 {
  margin-bottom: 100px;
}

.ml-15 {
  margin-left: 15px !important;
}

.ml-30 {
  margin-left: 30px;
}

.ml-50 {
  margin-left: 50px;
}

.ml-100 {
  margin-left: 100px;
}
.pt-30 {
  padding-top: 30px;
}
.pt-60 {
  padding-top: 60px;
}
@media (max-width: 992px) {
  .double-bg {
    background-size: cover !important;
  }
  .mt-s {
    margin-top: 30px !important;
  }
  .padding-t-md-0 {
    padding-top: 0 !important;
  }
}
@media (max-width: 767px) {
  .mt-x {
    margin-top: 30px !important;
  }

  .main-ilustration-5 {
    height: 65vh !important;
  }
}
@media (max-width: 480px) {
  .welcome_area.ico {
    height: 100vh !important;
  }
  .main-ilustration-5 {
    display: none;
  }
  .integration-text {
    font-size: 12px;
  }
  .integration-icon .badge {
    display: none;
  }
  .spons {
    border-top: 1px solid #eee;
  }
  .spons img {
    width: 80%;
  }
}
.section-padding-100 {
  padding-top: 100px;
  padding-bottom: 100px;
}
.section-padding-100-70 {
  padding-top: 100px;
  padding-bottom: 70px;
}
.section-padding-0-70 {
  padding-top: 0px;
  padding-bottom: 70px;
}
.section-padding-100-85 {
  padding-top: 100px;
  padding-bottom: 85px;
}
.section-padding-0-100 {
  padding-top: 0px;
  padding-bottom: 100px;
}
.b-text {
  color: #272e3a !important;
}
.w-text {
  color: #fff !important;
}
.g-text {
  color: #d8d0d0 !important;
}
.gray-text {
  color: #949292 !important;
}
.bold {
  font-weight: 600 !important;
}
.p-text {
  color: blueviolet !important;
}
.normal {
  font-weight: 500;
}
.width-100 {
  width: 100%;
}
</style>
