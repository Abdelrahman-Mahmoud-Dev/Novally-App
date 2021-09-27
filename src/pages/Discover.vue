<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <base-header
    >Discover
    <template v-slot:heading> Discover </template>
  </base-header>
  <b-section class="section-padding-100-70 clearfix">
    <b-container>
      <collection-section
        main-heading="Popular"
        sub-heading="Discover"
      ></collection-section>
    </b-container>
  </b-section>

  <b-section class="features section-padding-100-70">
    <b-container>
      <list-items-section
        main-heading="Popular"
        sub-heading="Discover"
      ></list-items-section>
    </b-container>
  </b-section>
</template>
<script>
import CollectionSection from "../components/local/Sections/home/CollectionSection.vue";
import ListItemsSection from "../components/local/Sections/home/ListItemsSection.vue";
export default {
  components: {
    CollectionSection,
    ListItemsSection,
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