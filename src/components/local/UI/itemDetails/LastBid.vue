<template>
  <div class="author-item">
    <div class="author-img ms-0">
      <img :src="require(`@/assets/${logo}`)" width="40" alt="" />
    </div>
    <div class="author-info">
      <p>
        by <span class="w-text"> {{ name }}</span>
      </p>
      <p>
        Bid by
        <span class="w-text"> {{ price }}</span>
      </p>
    </div>
    <div class="bid-price">
      <p>{{ total }}</p>
      <p><fa :icon="['fa', 'clock']" class="mr-5p"></fa>{{ time }}</p>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    name: {
      type: String,
      default: "",
      required: true,
    },
    bid: {
      type: String,
      default: "",
      required: false,
    },
    price: {
      type: String,
      default: "",
      required: true,
    },
    time: {
      type: String,
      default: "",
      required: true,
    },
    logo: {
      type: String,
      default: "",
      required: true,
    },
    total: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>

<style scoped>
.author-img {
  margin: 0 15px;
}
.author-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.bid-price p,
.bid-item .author-info p {
  margin-bottom: 0;
  font-size: 12px;
}
.bid-item .author-info {
  flex: auto;
}
.bid-price {
  align-items: flex-end;
}
</style>