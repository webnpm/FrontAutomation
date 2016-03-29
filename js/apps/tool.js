define([],function(){
	/**
	 * @class tool
	 * @type {Object}
	 */
	var Tool={
		/**
		 * @method isFunction
		 * @param  {Function} callback [description]
		 * @return {Boolean}           [description]
		 */

		isFunction:function(callback){
			if(Object.prototype.toString.call(callback)==="[object Function]") return true;
			else return false;
		},
		/**
         * [将数字保留2位小数点]
         * @param {value,num} [value传进来的数字，num保留的位数]
         * @return  [转换过后的值]
        */
		numberToFixed:function(value,num){
			var powNum = Math.pow(10,num),
				nString = Math.round(value * powNum) / powNum,
				numString = nString.toString(),
				rs = numString.indexOf('.');

				if (rs < 0) {
	                rs = numString.length;
	                numString += '.';
	            }
	            while (numString.length <= rs + 2) {
	                numString += '0';
	            }
	            return numString;
		},
		/**
         * [将字符串裁剪再加...]
         * @param {str,len} [str传进来的字符串，len开始裁剪的位置]
         * @return  [转换过后的重新拼接的字符串]
        */
		stringSubstr:function(str,len){
			if(str.length > len){
				str = str.substr(0,len)+"...";
			}
			return str;
		},
		/**
		 * [验证是否是正整数]
		 * @param  {[type]}  num [description]
		 * @return {Boolean}     [description]
		 */
		isPositive:function(num){
			var reg=new RegExp(/^[1-9]\d*$/);
			return reg.test(num);
		},
		/**
		 * [验证是否是正确身份证号码]
		 * @param  {[type]}  num [description]
		 * @return {Boolean}     [description]
		 */
		isCardNum: function(code) { 
			var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子
		    var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码
		     if(/^\d{17}\d|x$/i.test(code)){  
		        var sum = 0, idx;  
		        for(var i = 0; i < code.length - 1; i++){  
		            // 对前17位数字与权值乘积求和  
		            sum += parseInt(code.substr(i, 1), 10) * arrExp[i];  
		        }
		        // 计算模（固定算法）
		        idx = sum % 11;
		        // 检验第18为是否与校验码相等
		        return arrValid[idx] == code.substr(17, 1).toUpperCase();
		    }else{
		        return false;
		    }
        },
        fifToEight:function(code){
        	if(code.length == 15){
		        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2); 
		        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
		        var cardTemp = 0, i;   
		        code = code.substr(0, 6) + '19' + code.substr(6, code.length - 6);
		        for(i = 0; i < 17; i ++) 
		        { 
		            cardTemp += code.substr(i, 1) * arrInt[i]; 
		        } 
		        code += arrCh[cardTemp % 11]; 
		        return code;
			}
        },
		/**
		 * [isPhone description]
		 * @param  {[string]}  phone [description]
		 * @return {Boolean}       [description]
		 */
		isPhone:function(phone){
			var reg=new RegExp(/^1\d{10}$/);
			return reg.test(phone);
		},
		isNum:function(val){
			var reg=new RegExp(/^[0-9]*$/);
			return reg.test(val);
		},
		isPwd:function(pwd){
			if (pwd.length < 6 || pwd.length > 20) {
				return true;
			} else {
				return false;
			}
		},
		isEqual:function(val1,val2){
			return val1 === val2;
		},
		isNum2:function(val,len){
			var reg=new RegExp(/^[0-9]*$/),
				reg2 = reg.test(val);

			if(val.length == len && reg2){
				return reg.test(val);
			}else {
				return false;
			}

		},
		/**
		 * [isChinese 是中文返回true，不是中文返回false]
		 * @param  {[string]}  val [description]
		 * @return {Boolean}     [description]
		 */
		isChinese:function(val){
			var reg=new RegExp(/^[\u4e00-\u9fa5]+$/);
			return reg.test(val);
		},
		/**
		 * [isChinesePast 如果含有中文返回true，没有中文返回false]
		 * @param  {[string]}  val [description]
		 * @return {Boolean}     [description]
		 */
		isChinesePast:function(val){
			var reg=new RegExp(/.*[\u4e00-\u9fa5]+.*$/);
			return reg.test(val);
		},
		// getCookie:function(key){
		// 	var cookieArr=document.cookie.split(';');
		// 	for(var i=0;cookieArr.length;i++){
		// 		var arr=cookieArr[i].split('=');
		// 		if(arr[0]==key) return unescape(arr[1]);
		// 		else return null;
		// 	}

		// }
        /**
         * [isNumAndLetter 如果是字母或者数字返回true，如果不是字母或者数字返回false]
         * @param  {[string]}  val [description]
         * @return {Boolean}     [description]
         */
        isNumAndLetter:function(val){
            var reg=new RegExp(/^[A-Za-z0-9]+$/);
            return reg.test(val);
        },
        /**
         * [isChineseAndOtherNum 返回长度，汉字占2个字符，非汉字占1个字符]
         * @param  {[string]}  val [description]
         * @return {Number}        [description]
         */
         isChineseAndOtherNum:function(val){
         	var sum = 0; 
			for (var i=0; i<val.length; i++){ 
			    var c = val.charCodeAt(i); 
			    if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)){ 
			    	sum++; 
			    }else{     
			    	sum+=2; 
			    } 
			}
			return sum;
         }

	};

	return Tool;
});