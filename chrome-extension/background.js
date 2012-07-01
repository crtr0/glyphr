var state = {};

var head= document.getElementsByTagName('head')[0];
var script= document.createElement('script');
script.type= 'text/javascript';
script.src= 'https://glyphr.jit.su/glyphr.js';
head.appendChild(script);
script.onload = function() {

  // toggle Glyphr on and off in response to clicks on the icon
  chrome.pageAction.onClicked.addListener(function(tab) {
    var suffix = (state[tab.id] ? "" : "-on" );
    console.log(tab.id, state[tab.id]);
    state[tab.id] = !state[tab.id];
    chrome.pageAction.setIcon({tabId: tab.id, path: 'glyphr-19'+suffix+'.png'});
    chrome.tabs.sendRequest(tab.id, state[tab.id], function (){});
  });

  // Listen for the content script to send a message to the background page.
  chrome.extension.onRequest.addListener(function (request, sender, sendResponse) {
    if (request.command === 'show') {
      chrome.pageAction.show(sender.tab.id);
      console.log(sender.tab.id);
      state[sender.tab.id] = false;
    }
    else if (request.command === 'transcode') {
      sendResponse(glyphr.transcode(request.val));
    }
  });

};
  






