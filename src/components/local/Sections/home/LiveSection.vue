<template>
  <b-container>
    <section-header center="true">
      <template v-slot:main-heading>{{ mainHeading }} </template>
      <template v-slot:sub-heading> {{ subHeading }} </template>
    </section-header>
    <b-row class="align-items-center">
      <cart-identifir
        class="col-lg-3 col-sm-6 col-xs-12"
        v-for="(item, id) in liveAuctions"
        :key="id"
        :itemDetails="item.title"
        :userName="item.name"
        :price="item.price"
        :days="item.days"
        :hours="item.hour"
        :minutes="item.minute"
        :seconds="item.second"
        :img="item.imgUrl"
        :logo="item.logo"
        :action="item.action"
        :deadline="item.deadline"
      >
      </cart-identifir>
      <b-col col="12" lg="12" class="text-center" if="button">
        <base-button route="/discover" mode="btn more-btn"
          >Load More</base-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import CartIdentifir from "../../UI/Home/CartIdentifir.vue";
export default {
  components: {
    CartIdentifir,
  },
  props: ["main-heading", "sub-heading", "with"],
  computed: {
    liveAuctions() {
      return this.$store.getters["liveAuctions"];
    },
  },
};
</script>