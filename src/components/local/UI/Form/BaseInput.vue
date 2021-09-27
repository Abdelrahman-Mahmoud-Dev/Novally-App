<template>
  <div v-if="!search && form != 'mail'" class="group">
    <input
      v-if="tag == 'input'"
      type="text"
      :name="name"
      id="name0"
      required=""
    />
    <textarea v-if="tag == 'textarea'" :name="name" id="name0" required="" />
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>{{ value }}</label>
  </div>

  <div
    v-else-if="search"
    class="search-widget-area"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-delay="300"
  >
    <form action="#" method="post">
      <input
        type="search"
        name="search"
        :value="value"
        id="search"
        placeholder="Search..."
      />
      <button type="submit" class="btn">
        <fa :icon="['fa', icon]"></fa>
      </button>
    </form>
  </div>
  <div
    v-if="form == 'mail'"
    class="subscribe-form"
    data-aos="fade-up"
    data-aos-duration="1000"
    data-aos-once="true"
    data-aos-offset="0"
  >
    <form action="#">
      <input
        type="email"
        name="email"
        id="subs_email"
        placeholder="Your Email"
      />
      <button type="submit" class="btn mb-0">subscribe</button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    search: {
      type: Boolean,
      default: false,
      required: false,
    },
    form: {
      type: String,
      default: "",
      required: false,
    },
    value: {
      type: String,
      default: "",
      required: false,
    },
    icon: {
      type: String,
      default: "search",
      required: false,
    },
    name: {
      type: String,
      default: "",
      required: false,
    },
    tag: {
      type: String,
      default: "input",
      required: false,
    },
  },
};
</script>

<style scoped>
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

.group {
  position: relative;
  z-index: 1;
  margin-bottom: 30px;
}

.group input,
.group textarea {
  font-size: 12px;
  font-style: italic;
  padding: 10px;
  display: block;
  width: 100%;
  height: 45px;
  border: none;
  background-color: transparent;
  color: #fff;
  border-radius: 0;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
}

.group input:focus,
.group textarea:focus {
  outline: none !important;
  box-shadow: none !important;
  background-color: transparent !important;
}

.group label {
  color: #fff;
  font-style: italic;
  font-size: 12px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 14px;
  -webkit-transition: 0.5s ease all;
  transition: 0.5s ease all;
  margin-bottom: 0;
}

.group .bar {
  position: relative;
  display: block;
  width: 100%;
}

.group .bar:before,
.group .bar:after {
  content: "";
  height: 2px;
  width: 0;
  bottom: 0;
  position: absolute;
  background-color: #fff;
  -webkit-transition: 0.5s ease all;
  transition: 0.5s ease all;
}

.group .bar:before {
  left: 50%;
}

.group .bar:after {
  right: 50%;
}

.group textarea {
  height: 130px;
}

/* Form Active State */

.group input:focus ~ label,
.group textarea:focus ~ label,
.group input:valid ~ label,
.group textarea:valid ~ label {
  top: -17px;
  font-size: 12px;
  color: #fff;
}

.group input:focus ~ .bar:before,
.group textarea:focus ~ .bar:before,
.group input:focus ~ .bar:after,
.group textarea:focus ~ .bar:after {
  width: 50%;
  background-color: #fff;
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