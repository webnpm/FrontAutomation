define(['jquery'] ,function($){
	var ListChannel={
		init:function(){
			var that=this,
				container=$('.list');
				that.demo(container);
		},
		demo:function(container){
			container.find('#div').click(function(){
				alert('列表页')
			})
			
		}
	};

	return ListChannel;
});