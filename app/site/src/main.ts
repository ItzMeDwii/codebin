import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    render: h => h(App)
}).$mount("#app");
