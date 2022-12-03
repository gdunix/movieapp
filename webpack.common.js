/* eslint-disable */
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const limit = 100000;
const dest = 'dist';

module.exports = {
    entry: "./src/App.js",
    output: {
        path: resolve(__dirname, dest),
        filename: '[name].[contenthash].js',
        publicPath: '/',
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
            }
        ]
    },
    resolve: {
        alias: {
            store: resolve(__dirname, 'src/store/'),
            pages: resolve(__dirname, 'src/pages/'),
            components: resolve(__dirname, 'src/components'),
            layout: resolve(__dirname, 'src/layout'),
            routes: resolve(__dirname, 'src/routes'),
            config: resolve(__dirname, 'src/config'),
            hocs: resolve(__dirname, 'src/hocs'),
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.(js)$/,
            minRatio: 0.8,
        }),
        new LodashModuleReplacementPlugin({
            currying: true,
            collection: true,
            paths: true,
            flattening: true,
        }),
        new webpack.ids.HashedModuleIdsPlugin({
            context: __dirname,
            hashFunction: 'sha256',
            hashDigest: 'hex',
            hashDigestLength: 20,
        })
    ]
};