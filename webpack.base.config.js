/*! Sammon by Tamamo */

var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: process.cwd(), // 确定webpack的编译上下文
    watch: true, // 文件在改变的时候，让webpack动态编译
    // 入口
    entry: {
        main: './src/main', // 这里其实是一个键值对，如果下面要output用[name].js,输出就是这个key的名称
        vendors: ['vue', 'vue-router']
    },
    devtool: 'source-map', // 资源隐射表，Chrome debug时,避免去查看编译后的文件一头包
    // 输出
    output: {
        path: path.join(__dirname, './dist') //输出到那个目录
    },
    // 加载器
    module: {
        loaders: [
            { test: /\.vue$/, loader: 'vue' },
            { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style!css!autoprefixer' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap' },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192' },
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    // 转es5
    babel: {
        presets: ['es2015', 'stage-3'], // presets是babel里面的一个集合包的意思
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components'),
            libs: path.join(__dirname, './src/libs'),
            utils: path.join(__dirname, './src/utils'),
            view: path.join(__dirname, './src/views'),
            less: path.join(__dirname, './src/less')
        }
    },
    plugins: [
        // 编译完成之后还不满意, 就可以二次加工
        new webpack.BannerPlugin('Sammon by Tamamo')
    ]
};