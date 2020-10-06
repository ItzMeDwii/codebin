module.exports = {
    runtimeCompiler: true,
    productionSourceMap: true,
    configureWebpack: {
        devtool: process.env.NODE_ENV === "development" ? "source-map" : "nosources-source-map"
    },
    pluginOptions: {
        i18n: {
            locale: "en",
            fallbackLocale: "en",
            localeDir: "locales",
            enableInSFC: false
        },
        pwa: {
            appleMobileWebAppCapable: "yes",
            appleMobileWebAppStatusBarStyle: "blue",
            msTileColor: "#212121",
            name: "codebin",
            themeColor: "#212121",
            workboxOptions: {
                skipWaiting: true,
                clientsClaim: true
            }
        }
    }
};
