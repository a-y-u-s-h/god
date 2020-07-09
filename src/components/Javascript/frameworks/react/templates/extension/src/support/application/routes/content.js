/*
  ======================================
    This script runs for every page.
    So whenever user is on a page and he
    clicks on our extension, we tell the
    script to append our code to the 'body'
    of the HTML as well. We do this by basically
    fetching the content.html from our public folder,
    because that contains everything we need.
  ======================================
*/

/*
  ======================================
    Also run main whenever user clicks
    on extension icon (doesn't work maybe).
  ======================================
*/
chrome.runtime.onMessage.addListener((request, sender, callback) => {
  main()
})

const main = () => {
  /*
    ======================================
      First, we generate an origin where
      this chrome extension will run on.
      This is where all static data related
      to the extension will live. We'll then
      load our custom HTML which is generated
      through React components. And then we
      append the generated app to the body
      of the page.
    ======================================
  */
  const extensionOrigin = "chrome-extension://" + chrome.runtime.id
  if (!location.ancestorOrigins.contains(extensionOrigin)) {
    fetch(chrome.runtime.getURL("index.html"))
      .then(response => response.text())
      .then(html => {
        const HTML = html.replace(/\/static\//g, `${extensionOrigin}/static/`)
        $(HTML).appendTo("body")
      })
      .catch(error => console.warn(error))
  }
}

/*
  ======================================
    This is a custom event listener called
    'message'. Whenever something emits this
    particular event, we run 'onDidRecieveMessage'.
    This 'message' will be emitted by our background
    script. It'll be an indicator that someone
    has clicked our extension.
  ======================================
*/
window.addEventListener("message", event => {
  if (event.source !== window) return
  onDidReceiveMessage(event)
})

/*
  ======================================
    If message is recieved, then get
    the ID of the extension. This ID is
    same as the Chrome's runtime ID. Why
    are we doing this? Just to start.
  ======================================
*/
const onDidReceiveMessage = async event => {
  if (event.data.type && event.data.type === "GET_EXTENSION_ID") {
    window.postMessage({ type: "EXTENSION_ID_RESULT", extensionId: chrome.runtime.id }, "*")
  }
}

/*
  ======================================
    Run whenever the page loads.
  ======================================
*/
main()
