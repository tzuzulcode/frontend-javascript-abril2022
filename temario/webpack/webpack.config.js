const path = require("path")
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
    // watch:true,
    entry:"./src/index.js",
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,'build'),
        assetModuleFilename: 'assets/[name][ext]'
    },
    optimization:{
        minimizer:[
            new CssMinimizerPlugin()
        ]
    },
    plugins:[ new CssMinimizerPlugin(), new MiniCssExtractPlugin()],
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