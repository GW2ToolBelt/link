import { defineNuxtPlugin } from "#app";
import { createVuetify } from "vuetify";

import * as components from "vuetify/components";

export default defineNuxtPlugin(app => {
    const vuetify = createVuetify({
        components
    });
    app.vueApp.use(vuetify);
});