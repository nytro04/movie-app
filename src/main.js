import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VModal from "vue-js-modal";

import VueYouTubeEmbed from "vue-youtube-embed";

Vue.use(VueYouTubeEmbed);

Vue.use(VModal);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// API KEY
// 77d76b97b95d4571e032dc8271077f7b
