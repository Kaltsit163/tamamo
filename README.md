##目录结构
<pre>
│  .gitignore          # 忽略文件,比如 node_modules
│  package.json        # 项目配置
│  README.md           # 项目说明
│  index.html          # 首页
│
├─ webpack.base.config.js         # webpack 基础配置
├─ webpack.dev.config.js          # webpack 开发配置
├─ webpack.prod.config.js         # webpack 生产配置
│
│
├─node_modules
│
├─dist                 # 打包完的文件会自动放在这里
│
└─src
    ├─ main.js         # 启动配置
    │
    ├─ router.js       # 路由配置
    │
    ├─components       # 组件
    │       │
    │       └─ app.vue # 入口组件,内含路由和公共部分
    │
    ├─views            # 视图(即路由)
    │
    ├─directives       # 自定义指令
    │
    ├─filters          # 自定义过滤器
    │
    ├─config           # 放置一些配置文件
    │
    ├─libs             # 放置一些工具函数
    │
    ├─images           # 放置图片
    │
    ├─styles           # 放置css
    │    │
    │    ├─ common.css # 通用css
    │    │
    │    └─ reset.css  # 页面初始化css
    │
    ├─less             # 放置less
    │
    │
    ├─vuex             # 放置vuex
    │
    │
    └─template         # 放置html模板,webpack依赖此文件生成所需的html
         │
         │
         └─ index.ejs # 默认的html模板

</pre>

# 为什么要做这个？
## 自己工作的项目使用的也是VUE全家桶，这次为了更上VUE新版发布，也自己做了一个新的DEMO
## 使用了iconfont彩色字体，Vue2.1 + Vue-router2.0 + Vuex2.0, 使用ES6 + Babel, 样式使用Less
## 打包使用webpack,使用vue-loader 之后  xx.vue 也更加方便

##说明
目前已将css(使用@import的和.vue内style的)样式都独立抽离为main.css文件,如果想按需加载,可以将webpack.base.js内的如下代码注释
```javascript
vue: {
    loaders: {
        css: ExtractTextPlugin.extract(
            "style-loader",
            "css-loader?sourceMap",
            {
                publicPath: "../dist/"
            }
        )
    }
}

new ExtractTextPlugin("[name].css",{ allChunks : true,resolve : ['modules'] }),
```

#如何使用

##说明
> 目前已将打包后的dist目录和webpack生成的index.html和index_prod.html加入了git忽略列表,如果不需要这样做,请修改。
> 目前分开发环境和生产环境,分别对应webpack.dev.config.js和webpack.prod.config.js可以根据自己需要来调整相关webpack配置,比如添加灰度环境配置。
> 目前的开发环境文件使用默认命名,生产环境使用带hash值的命名,可根据自己需要修改,但不建议修改本地环境为带hash的。
> 入口的html文件模板在src/template/index.ejs内,可自行修改

##安装
```
// 安装前请先确保已安装node和npm
// 需要提前在全局安装webpack和webpack-dev-server,如果已安装请忽略
npm install webpack -g
npm install webpack-dev-server -g

// 安装成功后,再安装依赖
npm install
```

##运行
####开发环境
```
// 注意首次使用需要执行下面的init命令来生成入口html文件,以后不用再执行
npm run init
npm run dev
```

####生产环境(打包)
```
npm run build
```

####访问
在浏览器地址栏输入http://127.0.0.1:8080