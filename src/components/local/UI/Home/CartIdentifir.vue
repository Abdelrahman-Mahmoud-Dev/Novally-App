<template>
  <div v-if="curr === 'ALL' || category == curr">
    <div class="pricing-item">
      <div class="wraper">
        <router-link to="/itemdetails"
          ><img :src="require(`@/assets/${img}`)" alt=""
        /></router-link>
        <router-link to="/itemdetails"
          ><h4>{{ itemDetails }}</h4></router-link
        >
        <div class="owner-info">
          <img :src="require(`@/assets/${logo}`)" width="40" alt="" />
          <router-link to="/profile"
            ><h3>{{ "@" + userName }}</h3></router-link
          >
        </div>
        <span
          ><span class="g-text">Price</span> {{ price }}
          <span class="g-text ml-15">1 of 10</span></span
        >
        <!-- // opational one -->
        <div v-if="!action">
          <div class="pricing">
            Highest Bid : <span class="ml-15">{{ pricing }}</span>
          </div>
          <!-- // opational one -->
          <div class="admire">
            <div class="adm"><fa :icon="['far', 'clock']"></fa>{{ clock }}</div>
            <div class="adm">
              <fa :icon="['far', 'heart']"></fa>{{ likes }} Like
              <!-- "['fab', 'linkedin-in']" -->
            </div>
          </div>
        </div>
        <!-- // opational two -->
        <div v-else>
          <div class="count-down text-center">
            <div class="simple_timer">
              <count-timer :deadline="deadline"></count-timer>
            </div>
          </div>
          <!-- // opational two -->
          <div class="admire">
            <base-button mode="btn more-btn width-100" route="/itemDetails"
              >Place Bid</base-button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CountTimer from "../../../Helper/BaseTimer.vue";
export default {
  components: {
    CountTimer,
  },
  data() {
    return {};
  },
  props: {
    category: {
      type: String,
      required: false,
    },
    curr: {
      type: String,
      required: false,
      default: "ALL",
    },
    userName: {
      type: String,
      required: true,
      default: "",
    },
    likes: {
      type: Number,
      required: false,
      default: 0,
    },
    price: {
      type: String,
      required: true,
      default: "",
    },
    clock: {
      type: String,
      required: false,
      default: "",
    },
    pricing: {
      type: String,
      required: false,
      default: "",
    },
    itemDetails: {
      type: String,
      required: true,
      default: "",
    },
    img: {
      type: String,
      required: true,
      default: "",
    },
    logo: {
      type: String,
      required: true,
      default: "",
    },
    action: {
      type: Boolean,
      required: false,
      default: false,
    },
    hours: {
      type: String,
      required: false,
      default: "",
    },
    minutes: {
      type: String,
      required: false,
      default: "",
    },
    seconds: {
      type: String,
      required: false,
      default: "",
    },
    days: {
      type: String,
      required: false,
      default: "",
    },
    deadline: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.list-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
  display: block;
}

.list-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.list-leave-active {
  position: absolute;
  z-index: -1;
}

.pricing-item h3 {
  font-size: 16px;
  font-weight: 400;
  margin-left: 10px;
  margin-bottom: 0;
  margin-right: 10px;
}
.pricing-item .pricing {
  font-size: 15px;
  line-height: 18px;
  margin: 0 0 20px;
  color: #fff;
}
.pricing-item span {
  font-size: 14px;
  display: inline-block;
  color: #00e0c4;
  margin: 0 0 7px;
}
.owner-info {
  display: flex;
  align-items: center;
  background: #03091f;
  border: 1px solid #969494;
  position: absolute;
  top: 225px;
  left: 30px;
  padding: 7px 10px;
  border-radius: 30px;
}
.pricing-item {
  border-radius: 10px;
  background-color: #0a1026;
  position: relative;
  border: solid 1px rgba(255, 255, 255, 0.25);
  text-align: left;
  padding: 10px 10px 20px;
  margin: 0 0 30px;
}
.pricing-item:before {
  content: "";
  position: absolute;
  width: 102.6%;
  height: 101.3%;
  top: -3px;
  left: -3px;
  border-radius: 15px;
  z-index: -1;
  background-image: linear-gradient(
    130deg,
    #eb3fa9 0%,
    #395ff6 50%,
    #eb3fa9 100%
  );
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
.admire .adm svg {
  color: #00e0c4;
  margin-right: 6px;
}
.pricing-item h4 {
  font-size: 18px;
  margin-top: 50px;
  line-height: 1.43;
  color: #fff;
}
@media only screen and (min-width: 992px) and (max-width: 1199px) {
  .owner-info {
    top: 170px;
    left: 20px;
  }
}
@media only screen and (min-width: 768px) and (max-width: 991px) {
  .owner-info {
    top: 290px;
    left: 40px;
  }
  .pricing-item:before {
    width: 101.8%;
  }
}
@media only screen and (max-width: 767px) {
  .owner-info {
    top: 200px;
  }
}
@media (min-width: 480px) and (max-width: 575px) {
  .owner-info {
    top: 380px;
  }
  .pricing-item:before {
    width: 101.2%;
  }
}
@media (max-width: 480px) {
  .owner-info {
    position: relative;
    top: 0;
    left: 0;
    margin: 15px 0;
  }
  .pricing-item h4 {
    margin-top: 20px;
  }
  .pricing-item:before {
    width: 101.4%;
  }
}
/* .v-enter-from {
  opacity: 0;
  transform: scale(0.001) translate3d(-109px, 110px, 0);
}
.v-enter-active {
  transition-property: opacity transform;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transition-delay: 0.4s;
}
.v-enter-to {
  transform: scale(1) translate3d(0, 0, 0);
  opacity: 1;
} */
/* counter (timer) */
</style>