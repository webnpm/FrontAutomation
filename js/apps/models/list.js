define([ 'data' ], function(Data) {
    var ListModel = function() {

    };

    ListModel.prototype = {
        demoAjax:function(id,names, callback){
            var conn = "messageSubmit",
                    options = {
                        type:'post',
                        async:false,
                        data: {
                            id: id,
                            names:names
                        }
                    },
            data = new Data(conn, options);

            data.transmit(callback);
        }
    };

    return ListModel;
});