/*TMODJS:{"version":5,"md5":"15ae9d9a9541cb13bb7b68c5702feaf1"}*/
template('list',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./common/header');
$out+=' <div id="identify" identify="list" class="list"> <div id="div" class="div"> 这是列表222 </div> </div> ';
include('./common/footer');
$out+=' ';
return new String($out);
});