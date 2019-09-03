module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:5000',  // target host
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/api': ''  // rewrite path
                }
            },
        }
    }
};