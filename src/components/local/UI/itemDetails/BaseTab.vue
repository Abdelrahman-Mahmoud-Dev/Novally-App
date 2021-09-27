<template>
  <router-link to="/" class="filter-item">
    <img :src="require(`@/assets/${img}`)" alt="filter" />{{ filter }}
  </router-link>
</template>
<script>
export default {
  props: ["filter", "img"],
};
</script>
<style scoped>
.filter-item {
  border: 1px solid #ddd;
  padding: 7px 20px;
  display: inline-block;
  color: #fff;
  border-radius: 30px;
  margin-bottom: 15px;
  margin-right: 4px;
}
.filter-item:hover {
  color: #917af9;
}
.filter-item img {
  padding-right: 10px;
  max-width: 25px;
}
</style>