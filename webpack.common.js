/* eslint-disable */
const { resolve } = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const limit = 100000;
const dest = 'dist';

module.exports = {
    entry: "./src/App.js",
    output: {
        path: resolve(__dirname, dest),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit,
                            mimetype: 'application/octet-stream'
                        }
                    }
                ]
            },
            {
                test: /\.svg(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit,
                            mimetype: 'image/svg+xml'
                        }
                    }
                ]
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit,
                            mimetype: 'image/png'
                        }
                    }
                ]
            },
            {
                test: /\.jpg$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit,
                            mimetype: 'image/jpeg'
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                ],
            }
        ]
    },
    resolve: {
        alias: {
            store: resolve(__dirname, 'src/store/'),
            pages: resolve(__dirname, 'src/pages/'),
            components: resolve(__dirname, 'src/components'),
            layout: resolve(__dirname, 'src/layout'),
            routes: resolve(__dirname, 'src/routes')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};