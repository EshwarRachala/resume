var path = require('path')

module.exports = {
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'build.js',
        publicPath: 'dist/'
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    vue: {
        loaders: {
            js: 'babel',
            exclude: /node_modules/
        }
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            loaders: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    }
}