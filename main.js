const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');


require('electron-reload')(__dirname, {
    electron: require(`${__dirname}/node_modules/electron`)
});

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(
        url.format({
            pathname: path.join(__dirname, 'dist/gourmet-gateway/index.html'),
            protocol: 'file:',
            slashes: true
        })
    );

    win.webContents.openDevTools();
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
