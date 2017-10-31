# my_blog
My Blog.

可以登录[我的博客](http://xsren.me),查看效果。


![0](screenshots/主页.jpg)


最近想搞一个自己的blog。自己想法是简单的UI+方便的管理。

因为自己想学习flask就选了[flask-blog](https://github.com/dmaslov/flask-blog)。
但是UI有点丑，就想到网上找UI模板。最后发现没有合适的。。
最后找到了hexo的一些theme，发现可以生成静态文件，然后修改替换flask-blog的UI。
最后选择的是[hexo-theme-indigo](https://github.com/yscoder/hexo-theme-indigo)。

支持的python版本是python2


# 一、安装

```
git clone git@github.com:xsren/my_blog.git
cd my_blog
virtualenv --no-site-packages ./env
source ./env/bin/activate
pip install -r requirements.txt
```

运行以上命令，然后更改config.py，主要是以下字段：
```
CONNECTION_STRING = "mongodb://localhost"  # replace it with your settings
CONNECTION = pymongo.MongoClient(CONNECTION_STRING)

.....

HOMEPAGE = 'xsren.me'
NICKNAME = 'xsren'
GITHUB = 'https://github.com/xsren'
EMAIL = 'bestrenxs@gmail.com'
COPYRIGHT = u'xsren©2017'
RECORD_NUM = u'鲁ICP备17027626号-1'

```

# 二、运行

## 1、

```
python web.py

```

![1](screenshots/运行.jpg)


# 三、使用

首次使访问进入install页面，可进行一些用户香港的配置，如下：

![2](screenshots/install.jpg)

登录：
![3](screenshots/login.jpg)

管理：

![4](screenshots/管理.jpg)

发文：

![5](screenshots/发文.jpg)

效果：

![6](screenshots/效果.jpg)