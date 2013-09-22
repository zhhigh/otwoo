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
### 使用
    1、安装mongodb，并启动
    2、将wxconsole,weixin解压至目录
    3、修改config/config.js（端口号等，按需）
    4、node weixin.js
    5、node wxconsole.js
### 效果
    1、你可以使用wxcnosole带的界面输入数据，此数据供订阅号查阅
    2、微信订阅号的用户可以通过输入需要查询的关键字，由weixin.js返回给手机结果
### 说明
    未在windows下进行过测试和使用
    wxconsole界面简陋
    如有好的建议和问题，敬请邮件
