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
				//拦截ajax请求 生成模拟数据
				Mock.mock(/\.json/, {
				    'list|1-10': [{
				        'id|+1': 1,
				        'email': '@EMAIL'
				    }]
				})
				$.ajax({
				    url: 'hello.json',
				    dataType: 'json'
				}).done(function(data, status, jqXHR){
				   console.log(data)
				})
			})
		},
		demo2:function(container){
			
		}
	};

	return IndexChannel;
});