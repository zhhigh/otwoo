module.exports.conf = require('./config/config');//加载配置文件，必须放在rrestjs加载之前，配置文件格式详见 https://github.com/DoubleSpout/rrestjs/blob/master/config/example_config.js
var http = require('http'),
    rrest = require('rrestjs'),
    server = http.createServer(function (req, res){//这里是主入口，可以根据您的需要自由添加一些东西，而express并没有对用户开放主入口
    try
    {
        require('./controller/'+req.path[0])[req.path[1]](req, res);//这里是核心部分，执行指定控制器中的方法，将req和res传参进去
        //require('./'+req.path[0])[req.path[1]](req, res);//这里是核心部分，执行指定控制器中的方法，将req和res传参进去
    }
    catch(err)
    {
        restlog.info(err);//日志方法，例如 restlog.error('错误msg');有error，info，等多种等级，详见下面api
        res.statusCode = 404;
        res.render('/e404.jade' ,{errorpath: '/'+req.path.join('/')});
    }
    }).listen(rrest.config.listenPort);//监听配置文件的设置的端口，如果要修改或者读取配置文件的内容，请用 rrest.config;
    _rrest = rrest; //升级rrest为全局变量
  pool = rrest.mongo;//mongodb连接池的方法，例如：rrest.mongo(function(err, db, release){ dosomething... 然后 将连接交还连接池执行 release() }, [dbname]); 详见下面api