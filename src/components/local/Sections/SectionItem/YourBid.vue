<template>
  <div id="test-popup" class="white-popup mfp-hide">
    <div class="top-form-header">
      <h4>Place a Bid</h4>
    </div>
    <form action="#" method="post" id="main_login_form" novalidate="">
      <div class="row">
        <b-col col="12" md="12">
          <base-input></base-input>
          <p class="g-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
            maxime quo magnam, rerum odio quia asperiores, voluptatum impedit
            sit, amet consectetur adipisicing elit.
          </p>
        </b-col>
        <b-col col="12" sm="5" class="text-left">
          <base-button route="/walletConnect" mode="btn more-btn"
            >Place Bid</base-button
          >
        </b-col>
      </div>
    </form>
  </div>
</template>


<script>
import BaseInput from "../../../local/UI/Form/BaseInput.vue";
export default {
  components: { BaseInput },
};
</script>
<style scoped>
.white-popup {
  position: relative;
  background: rgb(11 17 38);
  border-radius: 20px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  padding: 40px 20px;
  width: auto;
  max-width: 500px;
  margin: 20px auto;
}
</style>