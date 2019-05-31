'use strict';

const CleanWebpackPlugin   = require('clean-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const helpers              = require('./helpers');
const isDev                = process.env.NODE_ENV !== 'production';

module.exports = {
    entry: {
        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        main: isDev ? './src/main.ts' : './src/main.aot.ts',
        light_theme: './src/assets/styles.scss'
    },

    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                exclude: [helpers.root('src/index.html')]
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                     isDev ? 'style-loader': MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } }
                ],
                include: helpers.root('src', 'assets')
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'to-string-loader',
                    { loader: 'css-loader', options: { sourceMap: isDev } },
                    { loader: 'sass-loader', options: { sourceMap: isDev } }
                ],
                include: helpers.root('src', 'app')
            }
        ]
    },

    plugins: [
        new CleanWebpackPlugin(
            helpers.root('dist'), { root: helpers.root(), verbose: true }),

        new HtmlWebpackPlugin({
            template: 'src/index.html',
            baseUrl: '/',
            excludeChunks: ['light_theme']
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "css/[name].css",
            chunkFilename: function(){
                return "css/[name].css";
            }
        })
    ]
};