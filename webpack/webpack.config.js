const path = require('path');

module.exports = {
    
    //define entry point
    entry: './src/script-1.js',

    //define output point
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    //module property
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']          
                } 
            },

            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
};
