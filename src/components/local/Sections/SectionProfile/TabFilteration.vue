<template>
  <div class="dream-projects-menu mb-50">
    <div class="text-center portfolio-menu">
      <button
        @click="setFilter('ALL'), activeBtn()"
        :class="[{ active: curr === 'ALL' ? true : false }, 'btn']"
        data-filter="*"
      >
        All
      </button>
      <button
        @click="setFilter('collectable'), activeBtn()"
        :class="[{ active: curr === 'collectable' ? true : false }, 'btn']"
        data-filter=".branding"
      >
        Collectable
      </button>
      <button
        @click="setFilter('created'), activeBtn()"
        :class="[{ active: curr === 'created' ? true : false }, 'btn']"
        data-filter=".design"
      >
        Created
      </button>
      <button
        @click="setFilter('onAction'), activeBtn()"
        :class="[{ active: curr == 'onAction' ? true : false }, 'btn']"
        data-filter=".development"
      >
        On Auction
      </button>
    </div>
  </div>
  <b-row>
    <b-container>
      <b-row class="dream-portfolio">
        <transition-group name="list">
          <cart-identifir
            class="col-12 col-md-6 col-lg-4 single_gallery_item branding"
            v-for="(item, i) in data"
            :key="i"
            :itemDetails="item.title"
            :userName="item.name"
            :price="item.price"
            :pricing="item['Highest Bid']"
            :likes="item.like"
            :clock="item['hour ago']"
            :img="item.imgUrl"
            :logo="item.logo"
            :category="item.category"
            :curr="curr"
          >
          </cart-identifir>
        </transition-group>
      </b-row>
      <b-col col="12" lg="12" class="text-center">
        <base-button
          mode="btn more-btn fadeInUp"
          data-wow-delay="0.6s"
          route="/discover"
          >Load More</base-button
        >
      </b-col>
    </b-container>
  </b-row>
</template>
<script>
import CartIdentifir from "../../UI/Home/CartIdentifir.vue";
export default {
  components: {
    CartIdentifir,
  },

  data() {
    return {
      currentFilter: "ALL",
      isActive: false,
      data: this.newListedItems,
    };
  },
  methods: {
    setFilter: function (filter) {
      this.currentFilter = filter;
      this.filterData();
    },
    filterData() {
      if (this.curr == "ALL") {
        this.data = this.newListedItems;
      } else {
        let convertToObj = JSON.parse(JSON.stringify(this.newListedItems));
        let arrayData = Object.keys(convertToObj).map((key) => {
          return { [key]: convertToObj[key] };
        });
        let DataFiltered = arrayData.filter(
          (item, i) => item[`${i + 1}`].category === this.curr
        );
        let res = {};
        for (let i of DataFiltered) {
          res[Object.keys(i)[0]] = Object.values(i)[0];
        }
        this.data = res;
      }
    },
  },
  computed: {
    newListedItems() {
      return this.$store.getters["newListedItemsProfile"];
    },
    curr() {
      return this.currentFilter;
    },
    // Data(){
    //     return this.curr
    // }
  },
  mounted() {
    this.filterData();
  },
};
</script>
<style scoped>
.list-enter-active,
.list-leave-active .list-move {
  transition: 2s ease-in;
  transition-property: opactiy, transform;
}
.list-enter {
  opacity: 0;
  transform: translateY(50px) scaleY(0.5);
}
.list-enter-to {
  opacity: 1;
  transform: translateX(0px) scaleY(1);
}
.list-leave-active {
  position: absolute;
}
.list-enter-active {
  animation: bounce-in 2s ease;
}
.list-leave-active {
  animation: bounce-in 2s reverse ease-in-out;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
.portfolio-menu button.active {
  color: #fff;
  box-shadow: 0 0 0 0.2rem rgb(0 123 255 / 25%);
}
.portfolio-menu button {
  line-height: 1;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  text-transform: uppercase;
  padding: 8px 15px 5px;
  border-radius: 30px;
}

.projects {
  margin-bottom: 50px;
  margin-top: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.projects-enter {
  transform: scale(0.5) translatey(-80px);
  opacity: 0;
}

.projects-leave-to {
  transform: translatey(30px);
  opacity: 0;
}

.projects-leave-active {
  position: absolute;
  z-index: -1;
  transition: all 0.5s ease-in-out;
}
.flip-list-move {
  transition: transform 0.8s ease;
}
</style>