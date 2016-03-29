var mockDemo = Mock.mock({
	'list|1-10':[{
	    'name': '@name()',
	    'age|1-100': 100,
	    'color': '@color'
    }]
});
var mockDemo2 = Mock.mock({
	'list|1-10':[{
	    'age|1-100': 100
    }]
});