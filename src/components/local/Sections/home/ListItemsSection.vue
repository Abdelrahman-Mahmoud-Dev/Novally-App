<template>
  <b-section class="features section-padding-0-100">
    <b-container>
      <section-header center="true">
        <template v-slot:sub-heading>{{ subHeading }} </template>
        <template v-slot:main-heading> {{ mainHeading }} </template>
      </section-header>

      <b-row class="align-items-center">
        <cart-identifir
          class="col-lg-3 col-sm-6 col-xs-12"
          v-for="(item, id) in newListedItems"
          :key="id"
          :itemDetails="item.title"
          :userName="item.name"
          :price="item.price"
          :pricing="item['Highest Bid']"
          :likes="item.like"
          :clock="item['hour ago']"
          :img="item.imgUrl"
          :logo="item.logo"
        >
        </cart-identifir>
      </b-row>
      <b-col col="12" lg="12" class="text-center">
        <base-button route="/discover" mode="btn more-btn"
          >Load More</base-button
        >
      </b-col>
    </b-container>
  </b-section>
</template>

<script>
import CartIdentifir from "../../UI/Home/CartIdentifir.vue";

export default {
  components: {
    CartIdentifir,
  },
  props: ["main-heading", "sub-heading"],
  computed: {
    newListedItems() {
      return this.$store.getters["newListedItems"];
    },
  },
  mounted() {
    console.log(this.newListedItems);
  },
};
</script>