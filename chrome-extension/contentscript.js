chrome.extension.sendRequest({command: "show"}, function(response) {});


chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	console.log(request);
	if (request) {
		['textarea'].forEach(function(s) {
		   $(s).each(function(i) {
		   	  console.log("Attaching to: ", s, i);
		      $(this).keyup(function() {
		      	 var that = this;
		      	 console.log($(that).val());
		      	 chrome.extension.sendRequest({command: "transcode", val: $(that).val()}, function(response) {
		      	 	console.log(response);
		      	 	//console.log(that);
		      	 	//console.log($(that));
		      	 	$(that).val(response);
		      	 });
			     
		   	  });
		   });
		});
	}
	else {
		['textarea'].forEach(function(s) {
		   $(s).each(function(i) {
		   	  console.log("Detaching: ", s, i);
		      $(this).off("keyup");
		   });
		});
	}
});






