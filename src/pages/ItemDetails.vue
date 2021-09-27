<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <base-header>
    Item Details
    <template v-slot:heading> Item Detail </template>
  </base-header>

  <b-section class="section-padding-100">
    <b-container>
      <b-row>
        <banner-img> </banner-img>
        <informations> </informations>
        <notification-side> </notification-side>
      </b-row>
    </b-container>
  </b-section>
  <your-bid> </your-bid>
  <sellers-section></sellers-section>
  <b-section class="section-padding-0-70 clearfix">
    <collection-section
      main-heading="Our Top Collections"
      sub-heading="Our Top Collections"
    ></collection-section>
  </b-section>
</template>



<script>
import NotificationSide from "../components/local/Sections/SectionItem/NotificationSide.vue";

import Informations from "../components/local/Sections/SectionItem/Informations.vue";
import BannerImg from "../components/local/Sections/SectionItem/BannerImg.vue";
import YourBid from "../components/local/Sections/SectionItem/YourBid.vue";
import SellersSection from "../components/local/Sections/home/SellersSection.vue";
import CollectionSection from "../components/local/Sections/home/CollectionSection.vue";
export default {
  components: {
    NotificationSide,
    Informations,
    BannerImg,
    YourBid,
    SellersSection,
    CollectionSection,
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
