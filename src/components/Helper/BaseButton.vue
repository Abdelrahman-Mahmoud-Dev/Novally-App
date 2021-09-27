<template>
  <router-link :to="route" :class="mode">
    <slot> </slot>
  </router-link>
</template>
<script>
export default {
  props: {
    route: {
      type: String,
      default: "/",
      required: false,
    },
    mode: {
      type: String,
      default: "",
      require: false,
    },
  },
};
</script>

<style scoped>
.login-btn {
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 12px !important;
  text-transform: uppercase;
  line-height: 33px;
  padding: 0 20px;
  min-width: 100px;
  color: #fff !important;
  background: rgba(116, 80, 254, 0.7);
  height: 35px;
  border-radius: 50px;
  letter-spacing: 1px;
}

.login-btn:hover,
.login-btn:focus {
  color: #fff;
  background: #7450fe;
  border-color: #7450fe;
}

.dream-btn {
  position: relative;
  z-index: 1;
  min-width: 160px;
  height: 48px;
  line-height: 48px;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  display: inline-block;
  padding: 0 20px;
  text-align: center;
  text-transform: uppercase;
  background-size: 200% auto;
  color: #fff;
  box-shadow: 0 3ox 20px rgba(0, 0, 0, 0.1);
  border-radius: 100px;
  background-image: -webkit-linear-gradient(
    to right,
    #846ff4 0%,
    #f17674 51%,
    #846ff4 100%
  );
  background-image: linear-gradient(
    to right,
    #846ff4 0%,
    #f17674 51%,
    #846ff4 100%
  );
  border: 1px solid #fff;
  -webkit-transition: all 500ms;
  transition: all 500ms;
}

.dream-btn:hover {
  background-position: right center;
  color: #fff;
}
.new_Btn {
  cursor: pointer;
}
#upload-btn {
  display: none;
}
.more-btn {
  position: relative;
  z-index: 1;
  min-width: 160px;
  height: 48px;
  line-height: 48px;
  font-size: 12px;
  font-weight: 600;
  border: none;
  letter-spacing: 1px;
  display: inline-block;
  padding: 0 20px;
  text-align: center;
  text-transform: uppercase;
  background-size: 200% auto;
  color: #fff;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-image: linear-gradient(
    130deg,
    #eb3fa9 0%,
    #395ff6 50%,
    #eb3fa9 100%
  );
  -webkit-transition: all 500ms;
  transition: all 500ms;
}
.more-btn:hover {
  background-position: right center;
  color: #fff;
}
.btn:active {
  background: none;
  text-decoration: none;
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  outline: none;
}
</style>