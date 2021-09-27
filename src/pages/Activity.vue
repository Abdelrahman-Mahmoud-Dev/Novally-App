<template>
  <div v-if="isLoading">
    <base-spinner> </base-spinner>
  </div>
  <base-header>
    <template v-slot:heading>Activity</template>
    Activity
  </base-header>
  <b-section class="blog-area section-padding-100">
    <b-container>
      <b-row>
        <timeline-box></timeline-box>
        <b-col col="12" md="3">
          <div class="sidebar-area">
            <filter-side></filter-side>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </b-section>
</template>
<script>
import TimelineBox from "../components/local/Sections/SectionActivity/TimelineBox.vue";
import FilterSide from "../components/local/Sections/SectionActivity/FilterSide.vue";
export default {
  components: {
    TimelineBox,
    FilterSide,
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