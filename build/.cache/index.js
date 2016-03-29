/*TMODJS:{"version":17,"md5":"cfddaf49ee293352298393c243d7766a"}*/
template('index',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,include=function(filename,data){data=data||$data;var text=$utils.$include(filename,data,$filename);$out+=text;return $out;},$out='';include('./common/header');
$out+=' <div id="identify" identify="index" class="index"> <div id="div" class="div"> sfjsfnskfnsfnfsfsfs </div> </div> ';
include('./common/footer');
$out+=' ';
return new String($out);
});