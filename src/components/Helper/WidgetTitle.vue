<template>
  <div class="widget-title">
    <h5>
      {{ title }}
    </h5>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>
<style scoped>
.widget-title h5 {
  margin-bottom: 30px;
  font-size: 18px;
  text-transform: capitalize;
  border-bottom: 1px solid #fff;
  padding: 0 0 5px 0;
}
</style>