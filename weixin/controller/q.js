
var home = {},
    title = "test",
    mongo = _rrest.mongo;//连接mongo数据库方法;
home.index = function(req, res)
{
    //console.log(home.mongo);
    //console.log(this.form);
    res.render('/login.jade',"");
    console.log(home);
    //console.log(req);
    //typ = req.getparam['typ'];
    // console.log(typ);

    //console.log(_rrest.config.baseDir);
    //console.log("tt");
    //console.log(_rrest);
    /*var data={
        serial : req.param['serial'],
        typ    : req.param['typ'],
        title  : req.param['title'],
        desc   : req.param['desc'],
        picurl : req.param['picurl'],
        url    : req.param['url'],
    };*/
    //console.log(req);
    /*var serial=req.param['serial'],
        typ   =req.param['typ'],
        title =req.param['title'],
        desc  =req.param['desc'],
        picurl=req.param['picurl'],
        url   =req.param['url'];*/
    //console.log(data);


    
    return;
}
function getdata()
{
    console.log(req);
    var data={
        serial : req.param['serial'],
        typ    : req.param['typ'],
        title  : req.param['title'],
        desc   : req.param['desc'],
        picurl : req.param['picurl'],
        url    : req.param['url'],
    };
    console.log(data);
}
 module.exports= home; 
