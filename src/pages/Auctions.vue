<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <base-header>
    <template v-slot:heading>Auction</template>
    Auction
  </base-header>
  <b-section class="features section-padding-100">
    <live-section
      button="true"
      main-heading="Live Auctions 🔥"
      sub-heading="Live auctions"
    ></live-section>
  </b-section>
</template>



<script>
import LiveSection from "../components/local/Sections/home/LiveSection.vue";
export default {
  components: {
    LiveSection,
  },
  data() {
    return {
      isLoading: true,
    };
  },
  computed: {
    liveAuctions() {
      return this.$store.getters["liveAuctions"];
    },
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>