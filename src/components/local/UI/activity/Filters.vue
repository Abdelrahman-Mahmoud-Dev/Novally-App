<template>
  <div class="donnot-miss-widget mb-50">
    <!-- widge title -->
    <widget-title
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
      title="filters"
    ></widget-title>
    <div class="filers-list">
      <base-tab img="img/icons/f1.png" filter="Listings"> </base-tab>
      <base-tab img="img/icons/f5.png" filter="Likes"> </base-tab>
      <base-tab img="img/icons/f2.png" filter="Purchasses"> </base-tab>
      <base-tab img="img/icons/f3.png" filter="Sales"> </base-tab>
      <base-tab img="img/icons/f4.png" filter="Transfer"> </base-tab>
      <base-tab img="img/icons/f6.png" filter="Burns"> </base-tab>
      <base-tab img="img/icons/f7.png" filter="Bids"> </base-tab>
    </div>
  </div>
</template>

<script>
import WidgetTitle from "../../../Helper/WidgetTitle.vue";
import BaseTab from "../itemDetails/BaseTab.vue";
export default {
  components: {
    WidgetTitle,
    BaseTab,
  },
};
</script>