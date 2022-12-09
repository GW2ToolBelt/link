export default defineNuxtConfig ({
    components: true,

    build: {
        transpile: ["vuetify"],
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
            fallbackLocale:  "en",
            cookieKey: "locale",
            cookieSecure: true
        }
    },

    modules: [
        "@nuxtjs/i18n"
    ],

    typescript: {
        strict: true
    }
})