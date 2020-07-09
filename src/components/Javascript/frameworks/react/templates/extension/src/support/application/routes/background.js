/*
  ======================================
    'chrome' is available to us globally.
    So this won't cause any issues while
    running in chrome. Basically, whenever
    the browser-action button for this
    extension gets clicked, we want to send
    a message to our content script to load
    the functionality of this extension. From
    here, the execution goes to content script.
  ======================================
*/

chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.sendMessage(tab.id, { message: "load" })
})
