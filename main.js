const {app, BrowserWindow } = require('electron');
const path = require('path') 
const url = require('url');

function createWindow() {
  win = new BrowserWindow({
    width: 800, height: 800, webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  win.loadURL(
    // url.format({
    //   pathname: path.join(__dirname, '../dist/gourmet-gateway/index.html'),
    //   protocol: 'file:',
    //   slashes: true
    // })
    'http://localhost:4200'
  );

  win.on('closed', function () {
    win = null;
});

  win.webContents.openDevTools();
  // ma.webContents.openDevTools()
}

  app.whenReady().then(()=> {
    createWindow();
  })

app.on('window-all-closed', () => { 
    // On macOS it is common for applications and their  
    // menu bar to stay active until the user quits  
    // explicitly with Cmd + Q 
    if (process.platform !== 'darwin') { 
        app.quit() 
    } 
}) 
  
app.on('activate', () => { 
    // On macOS it's common to re-create a window in the  
    // app when the dock icon is clicked and there are no  
    // other windows open. 
    if (BrowserWindow.getAllWindows().length === 0) { 
        createWindow() 
    } 
}) 

const env = process.env.NODE_ENV || 'development'; 
  
try {
  require('electron-reload')(path.join(__dirname, '../dist/gourmet-gateway'), {
      electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
  });
} catch (_) { }