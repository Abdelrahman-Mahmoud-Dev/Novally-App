<template>
  <h4 class="mb-15 mt-30">History</h4>
  <div class="highest-bid bid-item">
    <div class="author-item mb-0">
      <div class="author-img ml-0">
        <img :src="require(`@/assets/${historyBid.logo}`)" width="40" alt="" />
      </div>
      <div class="author-info">
        <p>
          Listed by <span class="w-text"> {{ historyBid.name }}</span>
        </p>
        <p>
          Price <span class="w-text mr-15"> {{ historyBid.price }}</span
          ><span
            ><fa :icon="['fa', 'clock']" class="mr-5p"></fa
            >{{ historyBid.laterTime }}</span
          >
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    historyBid() {
      return this.$store.getters["LastBids"]["1"];
    },
  },
};
</script>
<style scoped>
.bid-item .author-info {
  flex: auto;
}
.bid-item .author-info p {
  margin-bottom: 0;
  font-size: 12px;
}
.highest-bid {
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
}
.author-img {
  margin: 0 15px;
}
.author-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
</style>