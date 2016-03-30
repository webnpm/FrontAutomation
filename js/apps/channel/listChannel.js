define(['angular'] ,function(){
	var ListChannel = {
		init:function(){
			angular.module('myApp',[]).controller('mainCtrl',['$scope',function($scope){
			      $scope.datas = [{
			      	'names':1234,
			      },{
			      	'names':'123sfsf4',
			      },{
			      	'names':'fsfs',
			      },{
			      	'names':'12swre34',
			      },{
			      	'names':'wqe',
			      }];
			}])
		}
	};

	return ListChannel;
});