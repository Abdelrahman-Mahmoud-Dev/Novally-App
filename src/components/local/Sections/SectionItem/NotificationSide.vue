<template>
  <b-col col="12" lg="3" class="mt-s">
    <lastest-bids></lastest-bids>
    <history-bid></history-bid>
    <biding-end> </biding-end>
  </b-col>
</template>



<script>
import LastestBids from "../../UI/itemDetails/LastestBids.vue";
import HistoryBid from "../../UI/itemDetails/HistoryBid.vue";
import BidingEnd from "../../UI/itemDetails/BidingEnd.vue";
export default {
  components: {
    BidingEnd,
    HistoryBid,
    LastestBids,
  },
};
</script>
<style scoped>
</style>
    
