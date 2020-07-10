const path = require('path');
module.exports = {
    entry: ['./src/index.jsx'],
    output: {
        filename: 'src/index_bundle.js',
        path: path.resolve(__dirname, './'),
    },
    module: {
        rules: [
            //第一個loader編譯JSX
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react'] } } },
            //第二個loader編譯ES6
            { test: /.js$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-env'] } } },
            //編譯JSX的loader，將@babel/preset-env加進preset中
            { test: /.jsx$/, exclude: /node_modules/, use: { loader: 'babel-loader', options: { presets: ['@babel/preset-react','@babel/preset-env'] } } }
        ]
    },
    //增加一個給 devserver 的設定
    devServer: {
        //指定開啟 port 為 9000
        port: 9000
    }
};