import { createApp } from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import './assets/css/responsive.css';
import BaseButton from './components/Helper/BaseButton.vue';
import BaseHeader from './components/Helper/BaseHeader.vue';
import BaseSpinner from './components/Helper/BaseSpinner.vue';
import SectionHeader from './components/Helper/SectionHeader.vue';
import BSection from './components/Helper/BSection.vue';
import BContainer from './components/Helper/BContainer.vue';
import BCol from './components/Helper/BCol.vue';
import BRow from './components/Helper/BRow.vue';
import router from './router';
import store from './store';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import App from './App.vue';

library.add(fas, far, fab);

const app = createApp(App);
app.component('BaseButton', BaseButton);
app.component('BaseHeader', BaseHeader);
app.component('BaseSpinner', BaseSpinner);
app.component('SectionHeader', SectionHeader);
app.component('BSection', BSection);

app.component('BContainer', BContainer);
app.component('BCol', BCol);
app.component('BRow', BRow);
app.component('fa', FontAwesomeIcon);

app.use(store);
app.use(router);
app.mount('#app');
