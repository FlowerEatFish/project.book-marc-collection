const {
  app,
  BrowserWindow,
} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: path.join(__dirname, './public/book.png'),
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, './dist/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  // Open DevTools.
  // win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
