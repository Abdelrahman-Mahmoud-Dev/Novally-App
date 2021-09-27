<template>
  <div class="container">
    <section-header center="true">
      <template v-slot:main-heading> {{ mainHeading }}</template>
      <template v-slot:sub-heading>{{ subHeading }}</template>
    </section-header>
    <b-row>
      <card-collection
        v-for="(item, id) in popularCollections"
        :key="id"
        :collectionInfo="item.title"
        :ownerName="item.owner"
        :img="item.imgUrl"
        data-aos="fade-up"
        :data-aos-delay="+id + 1 + '00'"
        data-aos-easing="ease"
        data-aos-once="true"
        data-aos-duration="800"
        data-aos-anchor-placement="top-center"
        data-aos-offset="-200"
      ></card-collection>
    </b-row>
  </div>
</template>


<script>
import cardCollection from "../../UI/Home/CardCollection.vue";
export default {
  components: {
    cardCollection,
  },
  props: ["main-heading", "sub-heading"],
  computed: {
    popularCollections() {
      return this.$store.getters["popularCollections"];
    },
  },
};
</script>
