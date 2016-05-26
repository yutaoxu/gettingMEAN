# 安装 Nodejs, NPM...

# 注册若干程序员必备帐号

> * google.com
> * github.com
> * heroku.com
> * mlab.com
> * c9.io
# 要提前知道过程中反复练习的东西还挺多……

> * html -> jade/pug
> * css -> sass -> bootstrap
> * javascript -> coffeescript(不一定，再说吧)
> * mongodb -> mongoose
> * mvc
> * REST API


# 开始 Getting Mean Project

npm install -g express
npm install -g express-generator
npm install -g nodemon

mkdir gettingMEAN
express
npm install
nodemon

# Expressjs 的 API

> http://expressjs.com/en/4x/api.html

比如，use 的定义是

> Mounts the specified middleware function or functions at the specified path. If path is not specified, it defaults to “/”.

# 整理一个 MVC 结构的目录

其实就是把 Models Views Controllers, Routes 这几个文件夹放到一个文件夹里去

刻意把 Controllers 与 Routes 分开 —— 为了结构清晰。

先在 Controller 里准备好可导出的函数，

```
module.exports.xxxxx = (req, res) => {
  code here
};
```

然后再 Route 里引用
```
var ctrlMain = require('../controllers/main');
    定义一个变量          引用 controller 文件
router.get('/', ctrlMain.xxxxx);
        指定一个路径        引用 controller 里的函数 xxxxx
```

# 添加 bootstrap

在 layout 文件里引用即可

```
doctype html
html
  head
    title= title
    link(rel='stylesheet', href='/stylesheets/style.css')
    link(rel='stylesheet', href='http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css')
    link(rel='stylesheet', href='http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap-theme.min.css')

  body
    block content

  script(src='http://cdn.bootcss.com/jquery/1.11.3/jquery.min.js')
  <!-- jquery 必须在 bootstrap.min.js 之前引用 -->
  script(scr='http://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js')
```

应该给 sublimetext 安装一个 jade-bootstrap 的 snippets 集合，乃至于可以快速书写 jade/pug 文档


# 部署到 heroku

下载 heroku toolbelt https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up

```
heroku login
```
之后按照提示执行。

google 搜索 heroku toolbelt foreman，（http://t.cn/R5A7vMh）发现 foreman 命令已经被废弃，应该使用以下命令：
```
heroku local
```

heroku create

⬢ still-everglades-59438
https://still-everglades-59438.herokuapp.com/ | https://git.heroku.com/still-everglades-59438.git

git push heroku master

heroku open


要先把 engine 版本添加到 package.json 之中。
```
node --version
npm --version

  "engines": {
    "node": "~4.4.4",
    "npm": "3.9.2",
  },
```

还要添加一个 Procfile

```
web: npm start
```

#第五章

Mongodb，安装一个 GUI:
mongochef: http://3t.io/mongochef/

在 mLab 上创建一个 sandbox 数据库
为数据库添加用户和密码
在 models/db.js 里创建连接

var dbURI = 'mongodb://<dbuser>:<dbpassword>@ds061395.mlab.com:61395/loc8r';
mongoose.connect(dbURI);

还是直接用 heroku 的比较好：



heroku addons:add mongolab
heroku addons:open mongolab
heroku config:set MONGOLAB_URI=your_db_uri
heroku config:get MONGOLAB_URI
heroku config:set NODE_ENV=production


git push heroku master

在手动操作 mongodb 的时候，竟然把 ObjectId 写成了 ObjectID，一个字幕大小写竟然耽误了三个小时…… 因为根本 google 不到答案……

# REST API

Google Extension: Postman

```var Loc = mongoose.model('Location')```; 出错，结果是 app.js 里少了一句：

> require('./app_api/models/db');

注意 Mongo 的单复数处理




###notes

1.
