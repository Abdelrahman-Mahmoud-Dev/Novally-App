<template>
  <div class="detailed-img">
    <img :src="require(`@/assets/${img}`)" alt="detailed" />
  </div>
</template>


<script>
export default {
  props: ["img"],
};
</script>
<style scoped>
.detailed-img {
  padding: 5px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: 2px dashed rgba(255, 255, 255, 0.2);
}
</style>