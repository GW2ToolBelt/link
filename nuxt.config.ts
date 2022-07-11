// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default {
    buildModules: [
        "@nuxt/typescript-build",
        "@nuxtjs/vuetify"
    ],

    components: true,

    head: {
        title: "GW2TB Link"
    },

    typescript: {
        strict: true,
        typeCheck: true
    }
};