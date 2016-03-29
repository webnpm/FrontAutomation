require(['config'],function(config){
	require.config(config);
	require(['indexChannel',"globalChannel"],function(IndexChannel,GlobalChannel){
		IndexChannel.init();
		GlobalChannel.init();
	});
});