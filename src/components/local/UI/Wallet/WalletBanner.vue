<template>
  <b-col lg="7" md="12" sm="12" class="service-img-wrappe mt-s">
    <div class="image-box">
      <img
        src="@/assets/img/core-img/platform.png"
        class="center-block img-responsive phone-img"
        alt=""
      />
      <img
        src="@/assets/img/core-img/rings.png"
        class="center-block img-responsive rings"
        alt=""
      />
    </div>
  </b-col>
</template>

<style scoped>
.image-box {
  position: relative;
}
.image-box .rings {
  position: absolute;
  top: -20%;
  z-index: -1;
  margin: 0 auto;
  left: 10%;
  transform: translate(-50%, -50%);
}
</style>