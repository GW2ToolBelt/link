// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig ({
    srcDir: "src",

    app: {
        baseURL: "/"
    },

    build: {
        transpile: ["vuetify"],
    },

    colorMode: {
        preference: "system",
        fallback: "light"
    },

    compatibilityDate: "2024-07-11",

    css: [
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.min.css"
    ],

    i18n: {
        locales: [
            { code: "de", file: "de-DE.json", iso: "de-DE" },
            { code: "en", file: "en-US.json", iso: "en-US" },
            // { code: "es", file: "es-ES.json", iso: "es-ES" },
            // { code: "fr", file: "fr-FR.json", iso: "fr-FR" }
        ],
        lazy: true,
        langDir: "lang",
        restructureDir: false,
        defaultLocale: "en",
        strategy: "no_prefix",

        detectBrowserLanguage: {
            fallbackLocale: "en",
            cookieKey: "locale",
            cookieSecure: true
        }
    },

    modules: [
        "@nuxtjs/color-mode",
        "@nuxtjs/i18n"
    ],

    typescript: {
        shim: false,
        strict: true,
        typeCheck: true
    }
})