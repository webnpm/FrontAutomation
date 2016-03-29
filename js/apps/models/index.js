define([ 'data' ], function(Data) {
    var IndexModel = function() {

    };

    IndexModel.prototype = {
        demoAjax:function(id,names, callback){
            var conn = "messageSubmit",
                options = {
                    type:'post',
                    async:false,
                    data: {
                        number: id,
                        names:names
                    }
                },
                data = new Data(conn, options);

            data.transmit(callback);
        },
        demoAjax2:function(number,names, callback){
            var conn = "messageSubmit",
                options = {
                    type:'post',
                    async:false,
                    data: {
                        number: number,
                        names:names
                    }
                },
                data = new Data(conn, options);

            data.transmit(callback);
        }
    };

    return IndexModel;
});