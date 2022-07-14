const path = require("path")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // watch:true,
    // entry:{
    //     index:"./src/index.js",
    //     another:"./src/saludar.js"
    // },
    entry:"./src/index.js",
    output:{
        // filename:"[name].bundle.js",
        filename:"index.js",
        path:path.resolve(__dirname,'build'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    optimization:{
        minimizer:[
            new CssMinimizerPlugin()
        ]
    },
    devServer:{
        port: 5500,
        static:{
            directory:path.resolve(__dirname,'build')
        }
    },
    plugins:[ new CssMinimizerPlugin(), new MiniCssExtractPlugin(), new HtmlWebpackPlugin()],
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            },
            {
                test:/\.css$/i,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader', 
                        options:{
                            importLoaders:1
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions: {
                                plugins:[
                                    require('autoprefixer')({
                                        overrideBrowserslist:['last 3 versions']
                                    })
                                ]
                            }
                        }
                    },
                ]
            },
            {
                test:/\.scss$/i,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader:'css-loader', 
                        options:{
                            importLoaders:1,
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options:{
                            postcssOptions: {
                                plugins:[
                                    require('autoprefixer')({
                                        overrideBrowserslist:['last 3 versions']
                                    })
                                ]
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test:/\.(png|jpe?g|svg|gif|webp)$/,
                type: 'asset/resource',
            },
        ]
    }
}