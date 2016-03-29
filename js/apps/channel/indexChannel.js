define(['jquery','indexModel'] ,function($,indexModel){
	var IndexModel = new indexModel();
	var IndexChannel={
		init:function(){
			var that=this,
				container=$('.index');
				that.demo(container);
				that.demo2(container);

		},
		demo:function(container){
			container.find('#div').click(function(){
				console.log(mockDemo2)
			})
		},
		demo2:function(container){
			
		}
	};

	return IndexChannel;
});