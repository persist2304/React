const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: ['./src/index.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist/'),
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./style/index.css",
        }),
    ],
    module: {
        rules: [
            {
                test: /.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: { localIdentName: '[name]__[local]___[hash:base64:5]' },
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    //增加一個給 devserver 的設定
    devServer: {
        contentBase: "./dist",
        //指定開啟 port 為 9000
        port: 9000
    }
};