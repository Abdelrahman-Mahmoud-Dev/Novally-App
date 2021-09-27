<template>
  <div class="biding-end">
    <h4 class="mb-15">Biding Ends In :</h4>
    <!-- Countdown  -->
    <div class="circled">
      <div class="simple_timer">
        <count-timer></count-timer>
      </div>
    </div>
  </div>
</template>
<script>
import CountTimer from "../../../Helper/BaseTimer.vue";
export default {
  components: {
    CountTimer,
  },
};
</script>
<style scoped>
.biding-end {
  text-align: center;
  margin-top: 30px;
  padding: 20px 15px 10px;
  border: 2px dashed rgba(255, 255, 255, 0.2);
  border-radius: 20px;
}
</style>