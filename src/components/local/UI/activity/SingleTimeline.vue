<template>
  <li>
    <div class="timelineDot"></div>
    <div class="timelineDate">
      <p><fa :icon="['fa', 'calendar']" class="mr-5p"></fa>{{ day }}</p>
      <p><fa :icon="['fa', 'clock']" class="mr-5p"></fa>{{ time }}</p>
    </div>
    <div class="timelineWork">
      <h6>{{ work }}</h6>
      <span
        >{{ action }}
        <router-link to="/profile">{{ by + " " }} </router-link>
        <span class="w-text"> {{ moreDetails }}</span></span
      >
    </div>
  </li>
</template>
<script>
export default {
  props: {
    day: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    work: {
      type: String,
      required: true,
    },
    action: {
      type: String,
      required: true,
    },
    moreDetails: {
      type: String,
      required: false,
      default: "",
    },
    by: {
      type: String,
      required: false,
      default: "",
    },
  },
};
</script>
<style scoped>
.timelineDot {
  height: 15px;
  width: 15px;
  background: #fff;
  border-radius: 2rem;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 15px;
  flex: 0 0 15px;
  margin-right: auto;
  margin-top: 6px;
  box-shadow: 0 0 8px #56cb5f;
}

.timelineDot:after {
  content: "";
  position: absolute;
  top: 25px;
  left: 3px;
  height: 9px;
  width: 9px;
  background: #25cbd3;
  border-radius: 50%;
}
.timelineDate {
  font-size: 14px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100px;
  flex: 0 0 100px;
  padding: 0;
}

.timelineDate p {
  color: #25cbd3;
  margin-bottom: 0;
}
.timelineWork {
  font-size: 16px;
  margin-left: auto;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 65%;
  flex: 0 0 65%;
}

.timelineWork h6 {
  color: #fff;
}

.timelineWork span {
  display: inline-block;
  color: #bdbdbd;
  font-size: 13px;
}
</style>

