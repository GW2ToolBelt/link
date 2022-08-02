export default {
    buildModules: [
        "@nuxt/typescript-build",
        "@nuxtjs/vuetify"
    ],

    components: true,

    head: {
        title: "GW2TB Link"
    },

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
        "@nuxtjs/axios",
        "@nuxtjs/i18n"
    ],

    plugins: [
        "~/plugins/gw2-api.client.ts"
    ],

    router: {
        extendRoutes(routes, resolve) {
            routes.push({
                name: "catchall",
                path: "*",
                component: resolve(__dirname, "pages/index.vue")
            })
        }
    }
};