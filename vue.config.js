const LogInfo = require('./src/plugins/LogInfo');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    assetsDir: 'static',
    devServer: {
        // host: 'localhost',
        // port: 8080,
        hot: true,
        compress: true,
        historyApiFallback: true,
        proxy: {
            '/uino/api': {
                target: 'https://www.fastmock.site/mock/6cb4ef1f47f360f6f95fcd280b4826e9/api',
                changeOrigin: true,
                pathRewrite: {
                    '^/uino/api': '',
                },
            },
        },
        disableHostCheck: true,
    },
    configureWebpack: {
        plugins: [
            new LogInfo(),
        ],
        devtool: 'source-map',
    },
};
