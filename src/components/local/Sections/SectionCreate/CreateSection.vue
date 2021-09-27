<template>
  <div class="col-12 col-lg-8">
    <div class="creator-sec dd-bg">
      <section-header left="true">
        <template v-slot:main-heading>Create New Item</template>

        <template v-slot:sub-heading>Create Item</template>
      </section-header>
      <div class="contact_form">
        <form action="#" method="post" id="main_contact_form" novalidate>
          <b-row>
            <b-col col="12">
              <div id="success_fail_info"></div>
            </b-col>

            <b-col col="12" md="12">
              <p class="w-text">Upload Item File</p>
              <upload-file></upload-file>
            </b-col>
            <b-col col="12" md="12">
              <base-button value="Item name" name="name"></base-button>
            </b-col>
            <b-col col="12" md="12">
              <div class="mb-15">
                <p>Choose item Category</p>
                <only-filter></only-filter>
              </div>
            </b-col>
            <b-col col="12">
              <base-input
                tag="textarea"
                name="Description"
                value="Item Description"
              ></base-input>
            </b-col>
            <b-col col="12" md="12">
              <base-input value="Item Price in ETH" name="Price"></base-input>
            </b-col>
            <b-col col="12" md="6">
              <base-input name="Royalties" value="Royalties" />
            </b-col>
            <b-col col="12" md="6">
              <base-input name="Size" value="Size" />
            </b-col>
            <b-col col="12">
              <base-input name="copies" value="Number of copies" />
            </b-col>
            <b-col col="12" class="text-center">
              <base-button mode="more-btn mb-15">
                <button type="submit">CREATE ITEM</button>
              </base-button>
            </b-col>
          </b-row>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import UploadFile from "../../UI/Form/Uploadfile.vue";
import OnlyFilter from "../../UI/activity/FilterBox.vue";
import BaseInput from "../../../local/UI/Form/BaseInput.vue";
export default {
  components: {
    UploadFile,
    OnlyFilter,
    BaseInput,
  },
};
</script>
<style>
.creator-sec {
  overflow: hidden;
  padding: 30px 20px 10px;
}
.dd-bg {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
}
button[type="submit"] {
  background: transparent;
  outline: 0;
  border: 0;
  color: white;
  font-weight: bold;
}
</style>