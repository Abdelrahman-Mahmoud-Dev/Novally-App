<template>
  <div class="mb-15 gray-text">
    <span class="w-text mr-15">Current Price {{ price }} </span
    ><span class="gray-text mr-15">{{ total }}</span> 1/10
  </div>
  <div class="details-list">
    <p>
      Artist : <span>{{ name }}</span>
    </p>
    <p>
      Size : <span>{{ size }}</span>
    </p>
    <p>
      Created : <span>{{ date }}</span>
    </p>
    <p>
      Collection: <span>{{ collection }}</span>
    </p>
  </div>
  <div class="author-item mb-30">
    <div class="author-img ms-0">
      <img :src="require(`@/assets/${logo}`)" width="70" alt="" />
    </div>
    <div class="author-info">
      <a href="profile.html"
        ><h5 class="author-name">{{ owner }}</h5></a
      >
      <p class="author-earn mb-0">Item Owner</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    total: {
      type: String,
      required: true,
      default: "",
    },
    price: {
      type: String,
      required: true,
      default: "",
    },
    name: {
      type: String,
      required: true,
      default: "",
    },
    size: {
      type: String,
      required: true,
      default: "",
    },
    collection: {
      type: String,
      required: true,
      default: "",
    },
    owner: {
      type: String,
      required: true,
      default: "",
    },
    logo: {
      type: String,
      required: true,
      default: "",
    },
    date: {
      type: String,
      required: true,
      default: "",
    },
  },
};
</script>
<style scoped>
.details-list {
  margin: 30px 0;
}
.details-list p span {
  color: #fff;
  margin-left: 10px;
}
.bid-price {
  align-items: flex-end;
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