export default {
    buildModules: [
        "@nuxt/typescript-build",
        "@nuxtjs/vuetify"
    ],

    components: true,

    head: {
        title: "GW2TB Link"
    },

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