<template>
  <div class="filers-list">
    <base-tab img="img/icons/f1.png" filter="Art"> </base-tab>
    <base-tab img="img/icons/f5.png" filter="Virtual Worlds"> </base-tab>
    <base-tab img="img/icons/f2.png" filter="Purchasses"> </base-tab>
    <base-tab img="img/icons/f3.png" filter="NFT Gifts"> </base-tab>
    <base-tab img="img/icons/f4.png" filter="Collectibles"> </base-tab>
    <base-tab img="img/icons/f6.png" filter="Gifts"> </base-tab>
    <base-tab img="img/icons/f7.png" filter="Trading Cards"> </base-tab>
  </div>
</template>
<script>
import BaseTab from "../itemDetails/BaseTab.vue";
export default {
  components: {
    BaseTab,
  },
};
</script>