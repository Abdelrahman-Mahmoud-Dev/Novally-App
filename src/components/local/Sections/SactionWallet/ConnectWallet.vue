<template>
  <b-section class="features section-padding-100">
    <b-container>
      <section-header center="true">
        <template v-slot:main-heading> Connect Wallet</template>
        <template v-slot:main-sub> Connect Your Wallet</template>
      </section-header>
      <b-row class="align-items-center">
        <connent-wallet></connent-wallet>
        <wallet-banner></wallet-banner>
      </b-row>
    </b-container>
  </b-section>
</template>
<script>
import WalletBanner from "../../UI/Wallet/WalletBanner.vue";
import ConnentWallet from "../../UI/Wallet/ConnectWallet.vue";
export default {
  components: {
    WalletBanner,
    ConnentWallet,
  },
};
</script>

