require(['config'],function(config){
	require.config(config);
	require(['listChannel',"globalChannel"],function(ListChannel,GlobalChannel){
		ListChannel.init();
		GlobalChannel.init();
	});
});