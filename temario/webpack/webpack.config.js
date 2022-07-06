const path = require("path")

module.exports = {
    // watch:true,
    entry:"./src/index.js",
    output:{
        filename:"index.js",
        path:path.resolve(__dirname,'build')
    },
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
            }
        ]
    }
}