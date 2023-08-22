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

    css: [
        "vuetify/lib/styles/main.sass",
        "@mdi/font/css/materialdesignicons.min.css"
    ],

    i18n: {
        locales: [
            { code: "de", iso: "de-DE" },
            { code: "en", iso: "en-US" },
            { code: "es", iso: "es-ES" },
            { code: "fr", iso: "fr-FR" }
        ],
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