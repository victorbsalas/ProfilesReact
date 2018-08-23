const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {

    devServer: {
        historyApiFallback: true,
    },
    devtool: 'inline-source-map',
    entry: path.resolve(__dirname, './src/index.jsx'),
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.css',
            '.scss',
        ],
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true },
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        chunkFilename: '[name].js',
        filename: '[name].js',
    },
    optimization: {
        runtimeChunk: {
            name: 'manifest',
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -20,
                    chunks: 'all',
                },
            },
        },
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
    ],
};
