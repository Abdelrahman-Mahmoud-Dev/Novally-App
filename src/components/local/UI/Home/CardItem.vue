<template>
  <div class="author-item">
    <div class="author-rank">{{ id.length == 1 ? "0" + id : id }}</div>
    <div class="author-img">
      <img :src="require(`@/assets/${img}`)" width="70" :alt="authorName" />
    </div>
    <div class="author-info">
      <router-link to="/profile"
        ><h5 class="author-name">{{ authorName }}</h5></router-link
      >
      <p class="author-earn mb-0">{{ authorEarn }}</p>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    className: {
      type: String,
      default: "",
      required: false,
    },
    img: {
      type: String,
      default: "",
      required: true,
    },
    id: {
      type: String,
      default: "",
      required: true,
    },
    authorName: {
      type: String,
      default: "",
      required: true,
    },
    authorEarn: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>


<style scoped>
.author-rank {
  color: #797c88;
  font-weight: 600;
  font-size: 25px;
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