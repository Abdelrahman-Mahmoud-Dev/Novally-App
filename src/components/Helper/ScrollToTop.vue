<template>
  <div>
    <a @click="scrollToTop" v-show="isVisible" id="scroll" role="button"
      >Scroll Top
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll(event) {
      event.preventDefault();
      this.isVisible =
        ((document.documentElement && document.documentElement.scrollTop) ||
          document.body.scrollTop) >=
        0.2 * window.innerHeight;
    },
  },
};
</script>
<style scoped>
#scroll {
  position: fixed;
  z-index: 2000;
  bottom: 130px;
  font-size: 12px;
  line-height: 22px;
  right: 0px;
  width: 100px;
  background-color: transparent;
  color: #fff;
  text-align: center;
  height: 20px;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  text-transform: uppercase;
  -webkit-transform: rotate(-90deg);
  transform: rotate(-90deg);
}
#scroll::before {
  position: absolute;
  width: 30%;
  height: 2px;
  background-color: #fff;
  content: "";
  top: 10px;
  right: 100%;
  z-index: -200 !important;
}
</style>