var home = {},
    title = "test",
    mongo = _rrest.mongo;//连接mongo数据库方法;
home.index = function(req, res)
{
    //console.log(home.mongo);
    //console.log(this.form);
    res.render('/index.jade');
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

/*------------------------------------------------------------------------
*对应index.jade里面的form#tomong(method="get",action="/index/putdata")
*即在提交的时候，调用index.js里面的putdata函数
*
-------------------------------------------------------------------------*/
home.putdata = function(req,res)
{
    //console.log("putdata");
    var data={
        serial : req.getparam['serial'],
        typ    : req.getparam['typ'],
        title  : req.getparam['title'],
        desc   : req.getparam['desc'],
        picurl : req.getparam['picurl'],
        url    : req.getparam['url'],
    };
    console.log(data);

    mongo(function(err, db, release)
    {//操作mongodb数据库
            if(err) return;
            db.collection("msg", function(err, col){
                if(err) return release();
                col.insert(data, function(err, record){
                    if(err){
                        release();
                        restlog.error('提交留言失败：'+err);
                        return res.sendjson({"suc":0, "fail":"提交失败"});
                    }
                    res.sendjson({"suc":1});
                   
                });//insert
            });//collection
        });//mongo
    
}
/*
home.getdata = function()
{
    console.log("test");
}

var getdata=function(req)
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


exports.getdata=function()
{
   console.log("==========================");
}

exports.getdata=function()
{
   console.log("==========================");
}

function getdata()
{
 console.log("==========================");   
}

try
{
$("#create").click(function() 
    {
        console.log("Handler for .click() called.");
    })
}
catch(e)
{
 console.log(e.message);
}*/
/*
function getData()
{
   console.log("fffffffffffff");
}

getData = function()
{
    console.log("tttttttttttttttttttttt");
}

    this.form.submit(function(){
        var isok = true;
        this.form.find('input').each(function(){
            console.log($(this).attr('id')+':'+$(this).val())
            if($.trim($(this).val()) === '') isok = false;
        })
        if(!isok) alert('作者、内容和验证码必填');
        else console.log('ooooooooooooooo');
        return false;
        })

$("form").submit(function(e){
  alert("Submitted");
});*/

 module.exports= home; 

