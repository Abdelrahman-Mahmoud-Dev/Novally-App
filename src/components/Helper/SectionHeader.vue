<template>
  <div v-if="center" class="section-heading text-center">
    <div
      class="dream-dots justify-content-center fadeInUp"
      data-wow-delay="0.2s"
    >
      <span>
        <slot name="sub-heading"> </slot>
      </span>
    </div>
    <h2 class="fadeInUp" data-wow-delay="0.3s">
      <slot name="main-heading"> </slot>
    </h2>
    <p class="fadeInUp" data-wow-delay="0.4s">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan
      nisi Ut ut felis congue nisl hendrerit commodo.
    </p>
  </div>

  <div class="who-we-contant" v-if="left">
    <div class="dream-dots text-left fadeInUp" data-wow-delay="0.2s">
      <span class="gradient-text"> <slot name="sub-heading"> </slot></span>
    </div>
    <h4 class="fadeInUp" data-wow-delay="0.3s">
      <slot name="main-heading"> </slot>
    </h4>
  </div>
</template>
<script>
export default {
  props: {
    center: {
      default: false,
    },
    left: {
      default: false,
    },
  },
};
</script>
<style scoped>
.section-heading {
  position: relative;
  z-index: 1;
  margin-bottom: 40px;
}

.section-heading h2 {
  font-size: 30px;
  text-transform: capitalize;
  margin-bottom: 15px;
}

.section-heading > p {
  margin-bottom: 0;
  line-height: 2;
  font-size: 16px;
  max-width: 600px;
  margin: 0 auto;
}
.dream-dots {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 10px;
}

.dream-dots span {
  font-weight: bold;
  display: inline-block;
  background-image: linear-gradient(135deg, #846ff4 0%, #f17674 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

.gradient-text {
  font-weight: bold;
  display: inline-block;
  background-image: linear-gradient(135deg, #846ff4 0%, #f17674 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>



