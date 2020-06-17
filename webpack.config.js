const path = require('path'); //使用 path 方法

module.exports = {
    entry: {
        index: './index.js' //打包的檔案
    },
    output: {
        filename: 'bundle.js', //輸出的名稱
        path: path.resolve('./'), //輸出的路徑
    },
};