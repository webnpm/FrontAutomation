define(['jquery','tool'],function($,Tool,Connect){
    var Data=function(conn,options){
        this.conn=Connect[conn];
        this.options=options||{
                    async:true,
                    type:"get",
                    url:conn,
                    dataType:"json",
                    data:{}
                };
    };
    Data.prototype={
        transmit:function(callback){
            var conn=this.conn,
                options=this.options,
                async=null;
            if(options.async===false){
                async=false;
            }
            else{
                async=true;
            }
            $.ajax({
                async:async,
                type:options.type||"get",
                url:conn,
                dataType:options.dataType||"json",
                data:options.data||{},
                success:function(msg){
                    if(msg.status == -10){
                        Alert.show('fail',msg.message,function(){
                            location.reload();
                        });
                    }
                    if(Tool.isFunction(callback)){
                            callback(msg);
                    }
                },
                error:function(XMLHTTPRequest,textStatus,errorThrown){
                    var errorMsg=XMLHTTPRequest+"\n"+textStatus+"\n"+errorThrown+"\n";
                    console.log(errorMsg);
                }
            });
                        
            
        }
    };

    return Data;
});