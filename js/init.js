;(function(){
	var identify=document.getElementById('identify')==null?"index":document.getElementById('identify').attributes['identify'].value;
	var extrance="js/moudle/"+identify;
	var script=document.createElement("script");
	script.type="text/javascript";
	script.src="js/lib/require/require.js";
	script.setAttribute("data-main",extrance);
	document.body.appendChild(script);
})();