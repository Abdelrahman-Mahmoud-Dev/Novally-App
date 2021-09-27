<template>
  <b-col col="12" md="9">
    <div class="timelineBox">
      <!-- timeline header -->
      <timeline-header></timeline-header>
      <div class="timelineBody">
        <ul class="timeline">
          <!-- Single Timeline -->
          <single-timeline
            v-for="time in timeLine"
            :key="time"
            :time="time.time"
            :day="time.day"
            :action="time.action"
            :work="time.work"
            :moreDetails="time.moreDetails"
            :by="time.by"
          ></single-timeline>
        </ul>
      </div>
    </div>
  </b-col>
</template>
<script>
import TimelineHeader from "../../UI/activity/TimelineHeader.vue";
import SingleTimeline from "../../UI/activity/SingleTimeline.vue";
export default {
  components: {
    TimelineHeader,
    SingleTimeline,
  },
  computed: {
    timeLine() {
      return this.$store.getters["timeLine"];
    },
  },
};
</script>
<style scoped>
.timelineBox {
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 2px;
}
.timelineBody {
  max-height: 480px;
  overflow-x: hidden;
  overflow-y: auto;
  direction: ltr;
}
.timelineBody::-webkit-scrollbar {
  width: 7px;
}

.timelineBody::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 100px;
}

.timelineBody::-webkit-scrollbar-thumb {
  visibility: hidden;
  background-color: rgba(161, 161, 161, 0.787);
  border-radius: 20px;
  border: 1px solid #fff;
}
.timelineBody:hover::-webkit-scrollbar-thumb {
  visibility: visible;
}
.timelineBody .timeline {
  padding: 2em;
  margin: 0;
  list-style: none;
  position: relative;
  z-index: 2;
}

.timelineBody .timeline li {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  padding: 1em 0;
  position: relative;
}
.timelineBody .timeline li:before {
  position: absolute;
  content: "";
  left: 7px;
  top: 0;
  width: 1px;
  height: 100%;
  background: #25cbd3;
}

.timelineBody .timeline li:last-child {
  margin-bottom: 0;
}
</style>