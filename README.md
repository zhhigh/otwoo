otwoo o2o for weixin
=====
version v0.1 2013-09-22
------
致谢
------
     使用了jeremywei的weixin-api中的源码，仅对极少不符合rrestjs的部分进行了修改，致谢jeremywei
     使用了rrestjs框架，致谢吴老师
使用方法
------
### 安装依赖
     npm install wx-api -g
     npm install rrestjs -g
### wx-api的使用
    wx-api使用了weixin-api里面的代码和rrestjs框架，通过简单的调用实现微信订阅号的接口
    使用具体代码参见：weixin/controller/app.js
### 使用
    1、安装mongodb，并启动
    2、将wxconsole,weixin解压至目录
    3、修改config/config.js（端口号等，按需）
    4、node weixin.js
    5、node wxconsole.js
    6、可通过页面访问wxconsole,其中字段说明如下：
        serial:如为1，手机输1后，则从数据库里面返回1所指向的连接
        title :标题，手机输入1后，从数据库里面返回的信息中，首先看到的就是该醒目的标题
        desc  :一般与标题一致，也可单多描述
        picurl:微信有文本和图形的方式，此字段主要是图片的连接信息，如：http://cdn.lucifr.com/uploads/alfred_double_tap.jpg
        url   :你内容的连接信息，如：http://lucifr.com/2013/08/04/alfred-modifier-key-double-tap/
### 效果
    1、你可以使用wxcnosole带的界面输入数据，此数据供订阅号查阅
    2、微信订阅号的用户可以通过输入需要查询的关键字，由weixin.js返回给手机结果
### 说明
    未在windows下进行过测试和使用
    wxconsole界面简陋
    如有好的建议和问题，敬请邮件
