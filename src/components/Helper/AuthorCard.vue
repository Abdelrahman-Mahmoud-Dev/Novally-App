<template>
  <b-col col="12" md="6" lg="3">
    <!-- Content -->
    <div class="service_single_content collection-item">
      <!-- Icon -->
      <div class="collection_icon">
        <img :src="require(`@/assets/${logo}`)" alt="" />
      </div>
      <span class="aut-info">
        <img :src="require(`@/assets/${img}`)" width="50" alt="" />
      </span>
      <div class="collection_info text-center">
        <h6>{{ authorName }}</h6>
        <p>{{ info }}</p>
        <base-button route="/profile" mode="more-btn mt-15">Follow</base-button>
      </div>
    </div>
  </b-col>
</template>
<script>
export default {
  props: ["authorName", "info", "logo", "img"],
};
</script>
<style scoped>
.collection_info .more-btn {
  margin-bottom: 5px;
}
.service_single_content.collection-item h6 {
  margin-bottom: 5px;
  margin-top: 5px;
}
.collection-item {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  display: block;
  overflow: hidden;
  margin-bottom: 30px;
}
.aut-info {
  border: 2px solid #fff;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  margin-top: -35px;
}
.collection_info {
  padding: 15px;
  overflow: hidden;
  display: block;
}
</style>