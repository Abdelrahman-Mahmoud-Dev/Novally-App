<template>
  <b-col lg="5" md="12" sm="12" class="service-img-wrapper no-padding-right">
    <div class="features-list">
      <div class="who-we-contant text-center">
        <img
          src="@/assets/img/icons/wallet.png"
          class="mb-15"
          width="90"
          alt=""
        />

        <h4 class="w-text mb-30" data-wow-delay="0.3s">
          Connect Your Wallet to Start collecting, Buying and Selling NFTs.
        </h4>
        <connent-with
          v-for="connent in connectWith"
          :key="connent"
          :connectWith="connent.connentWith"
          :img="require(`@/assets/${connent.img}`)"
        >
        </connent-with>
      </div>
    </div>
  </b-col>
</template>

<script>
import ConnentWith from "../../../Helper/ConnectWith.vue";
export default {
  components: {
    ConnentWith,
  },
  props: [],
  computed: {
    connectWith() {
      return this.$store.getters["connectWith"];
    },
  },
};
</script>
<style scoped>
.features-list {
  background: rgba(255, 255, 255, 0.05);
  background-size: cover;
  padding: 30px;
  border-radius: 20px;
}
</style>