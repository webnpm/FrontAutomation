/*TMODJS:{"version":21,"md5":"e10bf41cbe01c77f5117b55f6e18e83e"}*/
template('list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./common/header');
$out+=' <div id="identify" identify="list" class="list" ng-app="myApp" ng-controller="mainCtrl"> <div id="div" class="div"> <input type="text" ng-model="mes"> <span ng-bind="mes"></span> </div> </div> ';
include('./common/footer');
$out+=' ';
return new String($out);
});