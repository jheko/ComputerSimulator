
const { app, BrowserWindow } = require('electron');


function createWindow () {
  
  // Create the browser window.
  let win = new BrowserWindow({
    
    
    width: 1800,
    height: 1200,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.setMenuBarVisibility(false);
  // and load the index.html of the app.
  win.loadFile('index.html')
}

app.whenReady().then(createWindow);

