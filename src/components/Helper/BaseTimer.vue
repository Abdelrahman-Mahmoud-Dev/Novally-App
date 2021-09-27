<template>
  <ul class="countdown">
    <li v-if="days > 0">
      <p class="digit">{{ twoDigits(days) }}</p>
      <p class="text">{{ days > 1 ? "days" : "day" }}</p>
    </li>
    <li>
      <p class="digit">{{ twoDigits(hours) }}</p>
      <p class="text">{{ hours > 1 ? "hours" : "hour" }}</p>
    </li>
    <li>
      <p class="digit">{{ twoDigits(minutes) }}</p>
      <p class="text">min</p>
    </li>
    <li>
      <p class="digit">{{ twoDigits(seconds) }}</p>
      <p class="text">Sec</p>
    </li>
  </ul>
</template>

<script>
let interval = null;
export default {
  props: {
    deadline: {
      type: String,
      default: "August 22, 2024",
    },
    stop: {
      type: Boolean,
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      date: null,
      diff: 0,
    };
  },
  created() {
    if (!this.deadline) {
      throw new Error("Missing props 'deadline'");
    }
    let endTime = this.deadline;
    this.date = Math.trunc(Date.parse(endTime.replace(/-/g, "/")) / 1000);
    if (!this.date) {
      throw new Error("Invalid props value, correct the 'deadline'");
    }
    interval = setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
    }, 1000);
  },
  computed: {
    seconds() {
      return Math.trunc(this.diff) % 60;
    },
    minutes() {
      return Math.trunc(this.diff / 60) % 60;
    },
    hours() {
      return Math.trunc(this.diff / 60 / 60) % 24;
    },
    days() {
      return Math.trunc(this.diff / 60 / 60 / 24);
    },
  },
  watch: {
    now() {
      this.diff = this.date - this.now;
      if (this.diff <= 0 || this.stop) {
        this.diff = 0;
        // Remove interval
        clearInterval(interval);
      }
    },
  },
  methods: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    },
  },
  unmounted() {
    clearInterval(interval);
  },
};
</script>

<style scoped>
.countdown {
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
}
.countdown li {
  position: relative;
  width: 25%;
}
.countdown .digit {
  width: 90%;
  font-size: 20px;
  font-weight: 500;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  background-color: #290571;
  color: #ffffff;
}
.countdown .text {
  margin-top: 4px;
  font-size: 11px;
  margin-bottom: 15px;
  color: #ffffff;
}
@media (max-width: 480px) {
  .countdown .text {
    font-size: 14px;
  }
}
</style>
