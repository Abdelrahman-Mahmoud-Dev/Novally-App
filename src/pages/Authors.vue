<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <base-header>Authors <template v-slot:heading>Authors</template></base-header>
  <sellers-section></sellers-section>
  <our-authors></our-authors>
</template>




<script>
import SellersSection from "../components/local/Sections/home/SellersSection.vue";
import OurAuthors from "../components/local/Sections/SactionWallet/OurAuthors.vue";
export default {
  components: {
    SellersSection,
    OurAuthors,
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