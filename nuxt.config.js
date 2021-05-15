export default {
    head: {
        title: "nuxt-test-qiwi",
        htmlAttrs: {
            lang: "en"
        },
        meta: [
            {charset: "utf-8"},
            {name: "viewport", content: "width=device-width, initial-scale=1"},
            {hid: "description", name: "description", content: ""}
        ],
        link: [{rel: "icon", type: "image/x-icon", href: "/favicon.ico"}]
    },
    css: ["@/assets/css/global.css"],
    plugins: [],
    components: true,
    buildModules: [
        '@nuxtjs/dotenv'
    ],
    publicRuntimeConfig: {
        axios: {
            baseURL: 'https://api.quwi.com/v2'
        }
    },
    modules: [
        "@nuxtjs/axios"
    ],
    axios: {},
    build: {}
};
