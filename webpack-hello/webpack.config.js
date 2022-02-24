const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ]
    // type: "module"
};

