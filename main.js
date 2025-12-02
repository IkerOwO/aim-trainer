const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1200,
    height: 720,
    resizable: false,
    frame: false,
    icon: './public/img/icon.png',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), 
    },
  })
  win.loadFile(path.join(__dirname, 'src', 'index.html'));

}

app.whenReady().then(() => {
  createWindow()
})

ipcMain.on('cerrar-app', () => {
  app.quit();
});

ipcMain.on('minimizar-app', (event) => {
  const ventana = BrowserWindow.fromWebContents(event.sender);
  if (ventana) ventana.minimize();
});
