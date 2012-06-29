chrome.extension.sendRequest("show", function(response) {});


chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	console.log(request);
	if (request) {
		['textarea'].forEach(function(s) {
		   $(s).each(function(i) {
		   	  console.log("Attaching to: ", s, i);
		      $(this).keypress(function() {
		      	 console.log("*");
			     $(this).val(glyphr.transcode($(this).val()));
		   	  });
		   });
		});
	}
	else {
		['textarea'].forEach(function(s) {
		   $(s).each(function(i) {
		   	  console.log("Detaching: ", s, i);
		      $(this).off("keypress");
		   });
		});
	}
});






