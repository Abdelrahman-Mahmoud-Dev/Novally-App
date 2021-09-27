<template>
  <b-section class="hero-section moving section-padding" id="home">
    <div class="moving-bg"></div>
    <!-- Hero Content -->
    <div class="hero-section-content">
      <b-container>
        <div class="row align-items-center">
          <!-- Welcome Content -->
          <b-col col="12" lg="6" md="12">
            <div class="welcome-content">
              <div class="promo-section">
                <h3 class="special-head gradient-text">
                  All NFTs You need in One Marketplace
                </h3>
              </div>
              <h1>
                The Best Place to Collect , Buy and Sell
                <span class="gradient-text">Awesome NFTs</span>
              </h1>
              <p class="w-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet dolorem blanditiis ad perferendis, labore delectus dolor
                adipisicing elit sit amet, adipisicing elit. Eveniet adipisicing
                elit.
              </p>
              <div class="dream-btn-group">
                <base-button mode="btn more-btn me-3">Explore More</base-button>
                <base-button mode="btn more-btn">Collect NFT</base-button>
              </div>
            </div>
          </b-col>
          <b-col lg="6"></b-col>
        </div>
      </b-container>
    </div>
  </b-section>
</template>
<style scoped>
.hero-section {
  position: relative;
  min-height: 700px;
  background: transparent no-repeat bottom center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-section.moving {
  overflow: hidden;

  background: url("~@/assets/img/bg-img/header-1.jpg") no-repeat center top;
  background-size: cover;
}
@media (max-width: 991px) {
  .hero-section.moving {
    background-position: left top;
  }
}

.moving-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 500em;
  height: 70%;
  opacity: 0.1;
  visibility: inherit;
  background: transparent url("~@/assets/img/core-img/crypto.png") repeat-x
    scroll 0 100%;
  -webkit-animation: cloudwash 60s linear infinite;
  -moz-animation: cloudwash 60s linear infinite;
  animation: cloudwash 60s linear infinite;
}

@-webkit-keyframes cloudwash {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
}

@keyframes cloudwash {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
}

.welcome-content {
  position: relative;
  z-index: 1;
  margin-top: 90px;
}

.promo-section {
  margin-bottom: 30px;
}

.special-head {
  color: #28cc8b;
  padding-left: 40px;
  font-size: 18px;
  position: relative;
}
.special-head:before {
  content: "";
  background: #3964f9;
  position: absolute;
  top: 50%;
  left: 0;
  width: 30px;
  height: 2px;
}
.gradient-text {
  font-weight: bold;
  display: inline-block;
  background-image: linear-gradient(135deg, #846ff4 0%, #f17674 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
.gradient-text.blue {
  background-image: linear-gradient(35deg, #17ead9 0%, #6078ea 100%);
}
</style>



 