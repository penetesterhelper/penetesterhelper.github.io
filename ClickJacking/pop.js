

chrome.tabs.query({
		currentWindow: true,
		active: true
	
	}, function(tab) {
			iframeWalaFunction(tab[0].url)
	});
//alert(1)
//iframeWalaFunction("https://numberless-holddown.000webhostapp.com/dashboard/")
function iframeWalaFunction(url){
	 const d = new Date();
	   document.getElementById("p1").innerHTML = '<div style="text-align:center">	<h1 style="text-align:center">POC Of <b style="color:red">CLICKJACKING</b> Vulnerability</h1><p>'+d+'</p><iframe src="'+url+'" style="text-align:center border:2px="" solid="" red;="" width="600" height="400" ></iframe><p>Add Header <b>X-Frame-Options: SAMEORIGIN</b> for patching Clickjacking <a href="https://cheatsheetseries.owasp.org/cheatsheets/Clickjacking_Defense_Cheat_Sheet.html">Click Here for More</a></p></div>';
}

