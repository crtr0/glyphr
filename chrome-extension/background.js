var state = {};


  
chrome.pageAction.onClicked.addListener(function(tab) {
	 var suffix = (state[tab.id] ? "" : "-on" );
	 console.log(tab.id, state[tab.id]);
	 state[tab.id] = !state[tab.id];
	 chrome.pageAction.setIcon({tabId: tab.id, path: 'glyphr-19'+suffix+'.png'});
     chrome.tabs.sendRequest(tab.id, state[tab.id], function (){});
});

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
  if (request === "show") {
  	chrome.pageAction.show(sender.tab.id);
  	console.log(sender.tab.id);
  	state[sender.tab.id] = false;
  }
});



