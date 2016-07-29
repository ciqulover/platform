var path=require('path')
module.exports={
    context:__dirname
    ,entry:{
        answer:'./src/answer.js'
        ,edit:'./src/edit.js'
        ,list:'./src/list.js'
        ,login:'./src/login.js'
        ,result:'./src/result.js'
    }
    ,output: {
        path: __dirname+'/pages/js'
        ,filename: '[name].js'
    }
    ,module:{
        loaders:[
            {test:/\.css$/,exclude: /node_modules/,loader: 'style!css'}
            ,{ test: /\.scss$/,exclude: /node_modules/, loader: 'style!css!sass?sourceMap'}
            ,{test:/\.js$/,exclude: /node_modules/,loader:'babel',query:{presets:['es2015']}}
        ]
    }
    ,externals:[

    ]
}