import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VModal from "vue-js-modal";
import VueYoutube from "vue-youtube";
import VueCarousel from "vue-carousel";

Vue.use(VueCarousel);

Vue.use(VueYoutube);

import VueYouTubeEmbed from "vue-youtube-embed";

Vue.use(VueYouTubeEmbed);

Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
