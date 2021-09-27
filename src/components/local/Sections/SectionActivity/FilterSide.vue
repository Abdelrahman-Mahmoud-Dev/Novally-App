<template>
  <base-input search="true"></base-input>
  <filters></filters>
  <widget-title
    data-aos="fade-up"
    data-aos-duration="1100"
    title="Subscribe"
    data-aos-once="true"
    data-aos-offset="0"
  ></widget-title>
  <base-input form="mail"></base-input>
</template>

<script>
import BaseInput from "../../UI/Form/BaseInput.vue";
import Filters from "../../UI/activity/Filters.vue";
import WidgetTitle from "../../../Helper/WidgetTitle.vue";
export default {
  components: {
    BaseInput,
    Filters,
    WidgetTitle,
  },
};
</script>