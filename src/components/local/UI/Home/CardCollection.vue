<template>
  <div class="col-12 col-md-6 col-lg-3">
    <router-link to="/discover" class="service_single_content collection-item">
      <!-- Icon -->
      <div class="collection_icon">
        <img :src="require(`@/assets/${img}`)" :alt="collectionInfo" />
      </div>
      <div class="collection_info">
        <h6>{{ collectionInfo }}</h6>
        <p>
          Owner : <span class="w-text">{{ ownerName }}</span>
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    collectionInfo: {
      default: "",
      type: String,
      required: true,
    },
    ownerName: {
      default: "",
      type: String,
      required: true,
    },
    img: {
      default: "",
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.collection-item {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  display: block;
  overflow: hidden;
  margin-bottom: 30px;
}
.collection_info {
  padding: 15px;
  overflow: hidden;
  display: block;
}
.collection_info .more-btn {
  margin-bottom: 5px;
}
</style>