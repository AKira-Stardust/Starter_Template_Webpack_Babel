const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: 'bundle.js'
    },
    
    devServer: {
        static: './dist/',
        hot: true,
        devMiddleware: {
            publicPath: '/dist/',
            writeToDisk: true,
        },
        port: 3000, 
    },

    module:{
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options:{
                    presets: ['@babel/preset-env']
                }
            }
        }]
    }
};