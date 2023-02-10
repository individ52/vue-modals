import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/main.scss";
import http from "./config/http";

createApp(App).use(http).use(store).use(router).mount("#app");
