<template>
  <b-section class="section-padding-0-70 clearfix">
    <b-container class="container">
      <section-header center="true">
        <template v-slot:main-heading>Our Authors</template>
        <template v-slot:sub-heading> Explore Authors </template>
      </section-header>

      <b-row>
        <author-card
          v-for="author in ourAuthors"
          :key="author"
          :img="author.img"
          :authorName="author.authorName"
          :logo="author.logo"
          :info="author.info"
        ></author-card>
      </b-row>
    </b-container>
  </b-section>
</template>


<script>
import AuthorCard from "../../../Helper/AuthorCard.vue";
export default {
  components: {
    AuthorCard,
  },
  computed: {
    ourAuthors() {
      return this.$store.getters["ourAuthors"];
    },
  },
};
</script>