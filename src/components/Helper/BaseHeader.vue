<template>
  <div class="breadcumb-area clearfix">
    <!-- breadcumb content -->
    <div class="breadcumb-content">
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <nav aria-label="breadcrumb" class="breadcumb--con text-center">
              <h2
                class="title w-text"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="600"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
              >
                <slot name="heading"> </slot>
              </h2>

              <ol
                v-if="isFound"
                class="breadcrumb justify-content-center"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="600"
                data-aos-easing="ease"
                data-aos-anchor-placement="top-center"
              >
                <li class="breadcrumb-item">
                  <base-button>Home</base-button>
                </li>

                <!-- Auctions -->
                <li class="breadcrumb-item active" aria-current="page">
                  <slot> </slot>
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isFound: true,
    };
  },
  created() {
    if (this.$route.meta.NotFound) {
      this.isFound = false;
    }
  },
};
</script>

<style scoped>
.breadcumb-area {
  position: relative;
  z-index: 1;
  height: 400px !important;
  background: url("~@/assets/img/bg-img/bread.png") no-repeat center;
  background-size: cover;
}

.breadcumb-content {
  position: absolute !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  background: linear-gradient(
    to right,
    rgba(72, 52, 212, 0.5),
    rgba(52, 31, 151, 0.5)
  );
}

.breadcumb--con {
  padding-top: 90px;
}

.breadcrumb {
  padding: 0;
  margin-bottom: 0;
  list-style: none;
  background-color: transparent;
  border-radius: 0;
}

.breadcumb--con .title {
  font-size: 42px;
  margin-bottom: 15px;
  margin-left: 0;
}

.breadcrumb-item,
.breadcrumb-item.active,
.breadcrumb-item > a {
  font-size: 13px;
  text-transform: uppercase;
  color: #fff;
}

.page-item:first-child .page-link {
  margin-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.page-item:last-child .page-link {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.page-link {
  color: #fff;
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0.05);
  margin: 0 2px;
}

/* ##### Sidebar CSS ##### */

.search-widget-area form {
  position: relative;
  z-index: 1;
}

.search-widget-area form input {
  width: 100%;
  height: 45px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  background-color: transparent;
  padding: 0 15px;
  color: #fff;
  font-size: 12px;
  border-radius: 30px;
}

.search-widget-area form button {
  width: 60px;
  height: 45px;
  background-color: transparent;
  padding: 0 15px;
  color: #fff;
  font-size: 14px;
  border-radius: 30px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
}

.widget-title h5 {
  margin-bottom: 30px;
  font-size: 18px;
  text-transform: capitalize;
  border-bottom: 1px solid #fff;
  padding: 0 0 5px 0;
}
.width-100 {
  width: 100%;
}
.dont-miss-post-content > a {
  font-size: 16px;
  color: #fff;
  display: block;
  margin-top: 15px;
}

.dont-miss-post-content > span {
  font-size: 12px;
  color: #fff;
  display: block;
  text-transform: uppercase;
}

.subscribe-form input {
  width: 100%;
  height: 45px;
  border-radius: 45px;
  border: none;
  padding: 0 20px;
  font-size: 12px;
  font-style: italic;
  color: #fff;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.1);
}

.subscribe-form button {
  width: 100%;
  height: 45px;
  border-radius: 45px;
  border: none;
  font-size: 12px;
  padding: 0;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 15px;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
}
</style>