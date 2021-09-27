<template>
  <div class="pricing-item v2">
    <img :src="img" width="30" class="wal-icon" alt="" />connect
    {{ connectWith }}
  </div>
</template>

<script>
export default {
  props: ["img", "connectWith"],
};
</script>
<style scoped>
.wal-icon {
  margin-right: 10px;
}
.pricing-item {
  border-radius: 10px;
  background-color: #0a1026;
  position: relative;
  border: solid 1px rgba(255, 255, 255, 0.25);
  text-align: left;
  padding: 10px 10px 20px;
  margin: 0 0 30px;
}
.pricing-item:before {
  content: "";
  position: absolute;
  width: 102.6%;
  height: 101.3%;
  top: -3px;
  left: -3px;
  border-radius: 15px;
  z-index: -1;
  background-image: linear-gradient(
    130deg,
    #eb3fa9 0%,
    #395ff6 50%,
    #eb3fa9 100%
  );
}
.pricing-item.v2 {
  padding: 10px 20px;
  margin-bottom: 20px;
  color: #fff;
  text-align: left;
  cursor: pointer;
}
.pricing-item.v2:before {
  width: 101.6%;
  height: 111%;
  border-radius: 10px;
}
</style>