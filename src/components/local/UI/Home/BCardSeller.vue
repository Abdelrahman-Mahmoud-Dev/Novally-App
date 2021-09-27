<template>
  <b-container>
    <b-row class="row align-items-center">
      <section-header left="true">
        <template v-slot:sub-heading>Creative Creators </template>
        <template v-slot:main-heading>Top Sellers This Month </template>
      </section-header>
      <b-col col="12" lg="4">
        <div class="creator-sec dd-bg">
          <card-item
            v-for="(seller, id) in topSellers.topSellersOne"
            :key="id"
            :id="id"
            :authorName="seller.name"
            :authorEarn="seller.rating"
            :img="seller.imageUrl"
          >
          </card-item>
        </div>
      </b-col>

      <b-col col="12" lg="4" class="mt-s">
        <div class="creator-sec dd-bg">
          <card-item
            v-for="(seller, id) in topSellers.topSellersTwo"
            :key="id"
            :id="id"
            :authorName="seller.name"
            :authorEarn="seller.rating"
            :img="seller.imageUrl"
          >
          </card-item>
        </div>
      </b-col>
      <b-col col="12" lg="4" class="mt-s">
        <div class="creator-sec dd-bg">
          <card-item
            v-for="(seller, id) in topSellers.topSellersThree"
            :key="id"
            :id="id"
            :authorName="seller.name"
            :authorEarn="seller.rating"
            :img="seller.imageUrl"
          >
          </card-item>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import CardItem from "./CardItem.vue";
export default {
  components: {
    CardItem,
  },
  computed: {
    topSellers() {
      return this.$store.getters["topSellers"];
    },
  },
};
</script>

<style scoped>
.creator-sec {
  overflow: hidden;
  padding: 30px 20px 10px;
}
.dd-bg {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
}
</style>