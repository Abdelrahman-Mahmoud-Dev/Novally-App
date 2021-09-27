<template>
  <h4 class="mb-15">Latest Bids</h4>
  <div class="highest-bid bid-item">
    <last-bid
      v-for="bid in lastBids"
      :key="bid"
      :name="bid.name"
      :price="bid.price"
      :total="bid.total"
      :time="bid.laterTime"
      :logo="bid.logo"
    >
    </last-bid>
  </div>
</template>


<script>
import LastBid from "../itemDetails/LastBid.vue";
export default {
  components: {
    LastBid,
  },
  computed: {
    lastBids() {
      return this.$store.getters["LastBids"];
    },
  },
};
</script>

<style scoped>
.highest-bid {
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
}
.bid-price p,
.bid-item .author-info p {
  margin-bottom: 0;
  font-size: 12px;
}
.bid-item .author-info {
  flex: auto;
}
.bid-item .author-item:last-child {
  margin-bottom: 0 !important;
}
</style>