<template>
  <div class="service_single_content collection-item">
    <!-- Icon -->
    <div class="collection_icon">
      <img
        src="@/assets/img/art-work/profile-header.jpg"
        class="center-block"
        alt=""
      />
    </div>
    <span class="aut-info">
      <img src="@/assets/img/authors/2.png" width="50" alt="" />
    </span>
    <div class="collection_info text-center">
      <h6>Morgan Wright</h6>
      <p class="w-text mr-5p">
        Creative NFTs Designer
        <img src="@/assets/img/art-work/fire.png" width="20" alt="" />
      </p>
      <p class="mt-15">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos distinctio
        labore.
      </p>

      <base-input
        search="true"
        value="Xjo03s-osi6732..."
        icon="copy"
      ></base-input>

      <ul class="social-links mt-15">
        <social-box font="fab" social="facebook-f"> </social-box>
        <social-box font="fab" social="twitter"></social-box>

        <social-box font="fab" social="google-plus-g"> </social-box>
        <social-box font="fab" social="linkedin-in"> </social-box>
        <social-box font="fab" social="instagram"> </social-box>
      </ul>

      <base-button route="/profile" mode="more-btn mt-15">Follow</base-button>
    </div>
  </div>
</template>
<script>
import SocialBox from "../../../Helper/SocialBox.vue";
import BaseInput from "../../UI/Form/BaseInput.vue";
export default {
  components: {
    SocialBox,
    BaseInput,
  },
};
</script>
<style scoped>
.aut-info {
  border: 2px solid #fff;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  margin-top: -35px;
}

.service_single_content.collection-item h6 {
  margin-bottom: 5px;
  margin-top: 5px;
}
.collection-item {
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  display: block;
  overflow: hidden;
  margin-bottom: 30px;
}
.collection_info {
  padding: 15px;
  overflow: hidden;
  display: block;
}
.collection_info .more-btn {
  margin-bottom: 5px;
}
.social-links {
  position: relative;
}

.social-links li {
  position: relative;
  display: inline-block;
  margin-right: 5px;
}

.social-links li {
  margin: 0px 2px;
}

.social-links li a {
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

.social-links li a:hover {
  color: #ffffff;
}
</style>