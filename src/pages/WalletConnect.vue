<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <base-header
    >Wallet Connect
    <template v-slot:heading> Wallet Connect</template></base-header
  >
  <connect-wallet></connect-wallet>
  <our-authors></our-authors>
</template>


<script>
import OurAuthors from "../components/local/Sections/SactionWallet/OurAuthors.vue";
import ConnectWallet from "../components/local/Sections/SactionWallet/ConnectWallet.vue";
export default {
  components: {
    OurAuthors,
    ConnectWallet,
  },
  data() {
    return {
      isLoading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
};
</script>
