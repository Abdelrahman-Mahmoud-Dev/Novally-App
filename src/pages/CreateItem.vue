<template>
  <div v-if="isLoading">
    <base-spinner> </base-spinner>
  </div>
  <base-header
    >Create Item
    <template v-slot:heading> Create Item </template>
  </base-header>

  <section class="blog-area section-padding-100">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-3">
          <profile-card></profile-card>
        </div>
        <create-section></create-section>
      </div>
    </div>
  </section>
</template>
<script>
import CreateSection from "../components/local/Sections/SectionCreate/CreateSection.vue";
import ProfileCard from "../components/local/Sections/SectionProfile/ProfileCard.vue";
export default {
  components: {
    CreateSection,
    ProfileCard,
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