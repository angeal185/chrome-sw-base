let config = {

}

chrome.runtime.onInstalled.addListener(function() {

});

chrome.browserAction.onClicked.addListener(function(){
  chrome.runtime.openOptionsPage()
})
