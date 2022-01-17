const { merge } = require('webpack-merge');
const common = require('../webpack.config.js');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const variables = require('../variables').variables;



module.exports = merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
            templateParameters: variables.HTML_TEMPLATE.PARAMETERS,
            template: variables.HTML_TEMPLATE.TEMPLATE
        }),
        new HtmlWebpackPlugin({
            templateParameters: variables.HTML_TEMPLATE.PARAMETERS,
            template: './src/news.ejs',
            filename: 'news.html'
        }),
        new HtmlWebpackPlugin({
            templateParameters: variables.HTML_TEMPLATE.PARAMETERS,
            template: './src/structure.ejs',
            filename: 'structure.html'
        })
    ]
});