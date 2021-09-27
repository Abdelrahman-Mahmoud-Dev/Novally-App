<template>
  <div class="highest-bid">
    <h5 class="w-text mb-15">Highest Bid</h5>
    <div class="admire">
      <div class="adm w-text">
        <img
          :src="require(`@/assets/${img}`)"
          width="30"
          alt=""
          class="mr-5p"
        />{{ name }}
      </div>
      <div class="adm">
        <img
          :src="require(`@/assets/${logo}`)"
          width="30"
          alt=""
          class="mr-5p"
        /><span class="bold mr-5p">{{ price }}</span
        ><span class="gray-text"> {{ total }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["img", "price", "total", "name", "logo"],
};
</script>
<style scoped>
.highest-bid {
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
}
.admire {
  display: flex;
  border-top: 1px dotted #565656;
  padding-top: 20px;
}
.admire .adm {
  width: 50%;
  font-size: 14px;
  color: #d8d0d0;
}
.admire .adm i {
  color: #00e0c4;
  margin-right: 6px;
}
</style>