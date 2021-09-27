<template>
  <!-- Spinner -->

  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <!-- Welcome Area Start  -->
  <landing-home></landing-home>
  <!-- Top Sellers Section  -->
  <sellers-section></sellers-section>
  <!-- Collections Start Section  -->
  <b-section class="section-padding-0-70 clearfix">
    <collection-section
      main-heading="Our Top Collections"
      sub-heading="Our Top Collections"
    ></collection-section>
  </b-section>
  <!-- New List Items Section  -->
  <list-items-section
    subHeading="Dicover New Items"
    mainHeading="New Listed Items"
  ></list-items-section>
  <!-- Live Auctions Section  -->
  <b-section class="features section-padding-0-70">
    <live-section
      mainHeading="Live Auctions 🔥"
      subHeading="Live auctions
"
    ></live-section>
  </b-section>
</template>

<script>
import LandingHome from "../components/local/Sections/home/LandingHome.vue";
import CollectionSection from "../components/local/Sections/home/CollectionSection.vue";
import SellersSection from "../components/local/Sections/home/SellersSection.vue";
import ListItemsSection from "../components/local/Sections/home/ListItemsSection.vue";
import LiveSection from "../components/local/Sections/home/LiveSection.vue";
export default {
  components: {
    CollectionSection,
    SellersSection,
    ListItemsSection,
    LandingHome,
    LiveSection,
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
<style scoped>
/* .welcome_area {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 900px !important;
} */

/* .hero-content {
  width: 100%;
  height: 100%;
  background: rgba(72, 52, 212, 0.95);
  background: -webkit-linear-gradient(
    to right,
    rgba(72, 52, 212, 0.95),
    rgba(52, 31, 151, 0.95)
  );
  background: -webkit-linear-gradient(
    left,
    rgba(72, 52, 212, 0.95),
    rgba(52, 31, 151, 0.95)
  );
  background: linear-gradient(
    to right,
    rgba(72, 52, 212, 0.95),
    rgba(52, 31, 151, 0.95)
  );
  position: absolute !important;
  top: 0;
  left: 0;
  z-index: 10;
} */

.integration-link {
  padding: 8px 10px;
  display: inline-block;
  vertical-align: top;
  position: relative;
  letter-spacing: 0.58px;
  font-size: 14px;
  color: #333;
  line-height: 24px;
  color: #d5d5ea;
}

.integration-link:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #eee;
  border-radius: 100px;
}
.integration-icon {
  margin: 0 5px 0 0;
}
.integration-icon .badge {
  background: #14cab1;
  margin-bottom: 0;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  border-radius: 100px;
  padding: 6px 13px;
}
.integration-text {
  margin: 0 7px 0 0;
  color: #7e7b7b;
}
.integration-link > * {
  position: relative;
  z-index: 2;
  display: inline-block;
  vertical-align: top;
}

@media (max-width: 992px) {
  .mt-md-30 {
    margin-top: 30px;
  }
  .mb-md-30 {
    margin-bottom: 30px;
  }
}

@media (max-width: 767px) {
  .mt-sm-30 {
    margin-top: 30px;
  }
  .mt-smy-0 {
    margin-top: 0px;
  }
  .mb-sm-30 {
    margin-bottom: 30px;
  }
  .welcome-content {
    padding-right: 15px;
  }
}

.welcome-content h2 {
  font-size: 52px;
  font-weight: 500;
  margin-bottom: 20px;
}
.welcome-content h1 {
  font-size: 38px;
  font-weight: 500;
  margin-bottom: 20px;
}

.welcome-content p {
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
}

.b-text {
  color: #272e3a !important;
}
.w-text {
  color: #fff !important;
}
.g-text {
  color: #d8d0d0 !important;
}
.gray-text {
  color: #949292 !important;
}
.bold {
  font-weight: 600 !important;
}
.p-text {
  color: blueviolet !important;
}
.normal {
  font-weight: 500;
}
</style>