var rrest = require('rrestjs'),
    weixin = require('wx-api'),
    http = require('http'),
    mongo = rrest.mongo;
module.exports = function(req, res)
{
    
        //console.log(rrest.config.weixintoken);
        switch(req.method)
        {
            case "POST"://接受用户的输入
               weixin.loop(req,res);
             /* getdata("0702",function(err,queryResult){
                console.log(queryResult[0].serial);
              });*/
             
            break;
            
            case "GET"://微信认证页面使用
            weixin.token = rrest.config.weixintoken;

             if (weixin.checkSignature(req)) 
             {
                res.send(req.param.echostr);
             } 
             else 
             {
                res.send('fail');
             }
            break;


        }
             

}

// 监听文本消息

function getdata(query,callback)
{
   mongo(function(err, db, release){
        if(err) return;
        db.collection("msg", function(err, col)
        {
            if(err) return release();
            col.find({"serial":query}).toArray(function(err, results) {//query是你需要查询的变量
                //var queryResult = JSON.stringify(results);            
                /*var data =
                {
                    test : queryResult.desc
                }*/
                //console.log(queryResult);
                //return callback(err, queryResult);                      
                return callback(err, results);                      

                //return  queryResult;
            });
             /*var   cursor = col.find(findc,sortc);//获得查询条件游标
               console.log("cursor",cursor);*/

               /*col.find(function(error,cursor){
                  cursor.each(function(error,doc){
                    if(doc){
                         console.log("name:"+doc.serial);
                           }
                   });
               });*/

            })//collection
        })//mongo
}

weixin.textMsg(function(msg) {
    console.log("textMsg received");
    console.log(JSON.stringify(msg));

    var resMsg = {};

    getdata(msg.content,function(err,queryResult){
         console.log(queryResult.length);

         if(queryResult.length!==0)
         {
            var articles = [];
            articles[0] = {
                title : queryResult[0].title,
                description : queryResult[0].title,
                picUrl : queryResult[0].picurl,
                url : queryResult[0].url
            };

            resMsg = {
                fromUserName : msg.toUserName,
                toUserName : msg.fromUserName,
                msgType : "news",
                articles : articles,
                funcFlag : 0
            }
            weixin.sendMsg(resMsg);


         }
         else
         {
               resMsg = {
                fromUserName : msg.toUserName,
                toUserName : msg.fromUserName,
                msgType : "text",
                content : "亲，这是我们的V0.1版本，你只要输入类似0702的数字，就可以看到我们发给你的内容！！！",
                funcFlag : 0
            };
            weixin.sendMsg(resMsg);

         }

    });
    //console.log("ssss",resMsg);
    //weixin.sendMsg(resMsg);
});

/*weixin.textMsg(function(msg) {
    console.log("textMsg received");
    console.log(JSON.stringify(msg));

    var resMsg = {};

    switch (msg.content) {
        case "t" :
            // 返回文本消息
            resMsg = {
                fromUserName : msg.toUserName,
                toUserName : msg.fromUserName,
                msgType : "text",
                content : "这是文本回复",
                funcFlag : 0
            };
            break;

        case "音乐" :
            // 返回音乐消息
            resMsg = {
                fromUserName : msg.toUserName,
                toUserName : msg.fromUserName,
                msgType : "music",
                title : "音乐标题",
                description : "音乐描述",
                musicUrl : "音乐url",
                HQMusicUrl : "高质量音乐url",
                funcFlag : 0
            };
            break;

        case "p" :

            var articles = [];
            articles[0] = {
                title : "PHP依赖管理工具Composer入门",
                description : "PHP依赖管理工具Composer入门",
                picUrl : "http://weizhifeng.net/images/tech/composer.png",
                url : "http://weizhifeng.net/manage-php-dependency-with-composer.html"
            };

            articles[1] = {
                title : "八月西湖",
                description : "八月西湖",
                picUrl : "http://weizhifeng.net/images/poem/bayuexihu.jpg",
                url : "http://weizhifeng.net/bayuexihu.html"
            };

            articles[2] = {
                title : "「翻译」Redis协议",
                description : "「翻译」Redis协议",
                picUrl : "http://weizhifeng.net/images/tech/redis.png",
                url : "http://weizhifeng.net/redis-protocol.html"
            };

            // 返回图文消息
            resMsg = {
                fromUserName : msg.toUserName,
                toUserName : msg.fromUserName,
                msgType : "news",
                articles : articles,
                funcFlag : 0
            }
    }

    weixin.sendMsg(resMsg);
});*/

// 监听图片消息
weixin.imageMsg(function(msg) {
    console.log("imageMsg received");
    console.log(JSON.stringify(msg));
});

// 监听位置消息
weixin.locationMsg(function(msg) {
    console.log("locationMsg received");
    console.log(JSON.stringify(msg));
});

// 监听链接消息
weixin.urlMsg(function(msg) {
    console.log("urlMsg received");
    console.log(JSON.stringify(msg));
});

// 监听事件消息
weixin.eventMsg(function(msg) {
    console.log("eventMsg received");
    console.log(JSON.stringify(msg));
});