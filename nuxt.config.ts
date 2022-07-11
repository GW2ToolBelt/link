import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        transpile: [ "vuetify" ]
    },

    css: [
        "vuetify/lib/styles/main.sass"
    ],

    nitro: {
        preset: "service-worker"
    },

    typescript: {
        strict: true,
        typeCheck: true
    },

    vite: {
        define: {
            "process.env.DEBUG": false
        }
    }
});