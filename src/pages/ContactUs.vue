<template>
  <div v-if="isLoading">
    <base-spinner></base-spinner>
  </div>
  <base-header>
    Contact Us <template v-slot:heading>Contact Us</template>
  </base-header>
  <b-section class="section-padding-100 contact_us_area" id="contact">
    <b-container>
      <b-row>
        <b-col col="12">
          <section-header center="true">
            <template v-slot:main-heading>Contact With Us </template>
            <template v-slot:sub-heading> Get in Touch </template>
          </section-header>
        </b-col>
      </b-row>

      <!-- Contact Form -->
      <b-row class="justify-content-center">
        <b-col col="12" md="10" lg="8">
          <base-form>
            <div
              class="col-12 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-offset="-10"
            >
              <base-input name="name" value="Name"></base-input>
            </div>
            <div
              class="col-12 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-offset="-10"
            >
              <base-input name="Email" value="Email"></base-input>
            </div>
            <div
              class="col-12"
              data-aos="fade-up"
              data-aos-delay="700"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-offset="-10"
            >
              <base-input name="subject" value="Subject"></base-input>
            </div>
            <div
              class="col-12"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-offset="-10"
            >
              <base-input
                tag="textarea"
                name="message"
                value="Message"
              ></base-input>
            </div>
            <b-col
              col="12"
              class="text-center"
              data-aos="fade-up"
              data-aos-delay="650"
              data-aos-duration="1000"
              data-aos-once="true"
              data-aos-offset="-10"
            >
              <base-button mode="btn more-btn" route="">
                <button type="submit">SEND MASSAGE</button>
              </base-button>
            </b-col>
          </base-form>
        </b-col>
      </b-row>
    </b-container>
  </b-section>
</template>
<script>
import BaseInput from "../components/local/UI/Form/BaseInput.vue";
import BaseForm from "../components/local/UI/Form/Form.vue";
export default {
  components: {
    BaseInput,
    BaseForm,
  },
  data() {
    return {
      isLoading: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 500);
  },
};
</script>
<style scoped>
</style>