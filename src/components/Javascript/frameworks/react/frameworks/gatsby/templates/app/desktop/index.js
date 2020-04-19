/*
  ======================================

   /$$                 /$$
  |__/                | $$
   /$$ /$$$$$$$   /$$$$$$$  /$$$$$$  /$$   /$$
  | $$| $$__  $$ /$$__  $$ /$$__  $$|  $$ /$$/
  | $$| $$  \ $$| $$  | $$| $$$$$$$$ \  $$$$/
  | $$| $$  | $$| $$  | $$| $$_____/  >$$  $$
  | $$| $$  | $$|  $$$$$$$|  $$$$$$$ /$$/\  $$
  |__/|__/  |__/ \_______/ \_______/|__/  \__/


  This file sets up electron configuration.
  Here's where we describe what the application
  should contain in development mode as well as
  production mode, along with other generic settings.
  This file is also the entry point of our program.
  Rest of the structure is same as that of a Gatsby project.

  ======================================
*/

const path = require("path")
const isDev = require("electron-is-dev")
const { app, BrowserWindow } = require("electron")

function createWindow() {
  /*
    ======================================
      Create a browser window and
      either load the app from a URL (development) 
      or load the application from a bundled
      file (in production).
    ======================================
  */
  const application = new BrowserWindow({
    show: false,
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  })
  application.loadURL(isDev ? "http://localhost:8000" : `file://${path.join(__dirname, "public/index.html")}`)
  application.once("ready-to-show", () => application.show())
}

/*
  ======================================
   This method will be called when Electron has finished 
   initialization and is ready to create browser windows.
   Some APIs can only be used after this event occurs.
  ======================================
*/
app.whenReady().then(createWindow)

/*
  ======================================
    Quit when all windows are closed.
  ======================================
*/
app.on("window-all-closed", () => {
  /*
    ======================================
      On MacOS, it's common for apps and
      their menu bar to stay active until the
      user quits explicitly with Cmd + Q
    ======================================
  */
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  /*
    ======================================
      On MacOS, it's common to re-create
      a window in the app when the dock
      icon is clicked and there are no
      other windows open.
    ======================================
  */
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

/*
  ======================================
    In this file you can include rest
    of your app's specific main
    process code. You can also put them
    in separate files and require them
    here.
  ======================================
*/
