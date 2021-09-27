<template>
  <li>
    <a href="#">
      <span>
        <fa :icon="[font, social]"></fa>
      </span>
    </a>
  </li>
</template>


<script>
export default {
  props: ["font", "social"],
};
</script>
<style scoped>
li {
  position: relative;
  display: inline-block;
  margin-right: 5px;
}

li {
  margin: 0px 2px;
}

li a {
  position: relative;
  display: block;
  line-height: 38px;
  width: 38px;
  height: 38px;
  text-align: center;
  font-size: 13px;
  background: rgba(255, 255, 255, 0.05);
  color: #bbbbbb;
  -webkit-transition: all 500ms ease;
  -ms-transition: all 500ms ease;
  transition: all 500ms ease;
}

li a:hover {
  color: #ffffff;
}
</style>