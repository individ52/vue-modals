import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/style/main.scss";
import http from "./config/http";
import { createI18n, useI18n } from "vue-i18n";

import { languages } from "@/i18n";
import { defaultLocale } from "@/i18n";
import directives from "@/directives";
const messages = Object.assign(languages);

const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: "en",
    messages,
});
const app = createApp(App, {
    setup() {
        const { t } = useI18n();
        return { t };
    },
});

for (let directiveName in directives) {
    app.directive(directiveName, directives[directiveName]);
}

app.use(i18n).use(http).use(router).mount("#app");
