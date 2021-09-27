<template>
  <div v-if="isLoading">
    <base-spinner> </base-spinner>
  </div>
  <base-header>
    <template v-slot:heading> Not Found</template>
  </base-header>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  },
};
</script>
