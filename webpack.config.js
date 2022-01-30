const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
      //  index: './src/index.js',
        script: './src/script.js',
        modules: './src/modules.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
          inject: 'body',
          template: './index.html',
          filename: 'index.html',
        })
    ],
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                    }
                }
            ]
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ],
      },
};