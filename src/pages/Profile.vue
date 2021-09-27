<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <base-header
    >Author Profile
    <template v-slot:heading> Author Profile </template>
  </base-header>

  <b-section class="blog-area section-padding-100">
    <b-container>
      <b-row>
        <b-col col="12" lg="3">
          <profile-card></profile-card>
        </b-col>
        <b-col col="12" md="9">
          <tab-filteration></tab-filteration>
        </b-col>
      </b-row>
    </b-container>
  </b-section>
</template>




<script>
import TabFilteration from "../components/local/Sections/SectionProfile/TabFilteration.vue";
import ProfileCard from "../components/local/Sections/SectionProfile/ProfileCard.vue";
export default {
  components: { TabFilteration, ProfileCard },
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
