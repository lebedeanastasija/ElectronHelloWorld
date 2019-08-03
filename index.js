const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

function createWindow() {
    win = new BrowserWindow({width: 1280, height: 720});
    win.loadFile('index.html');
}

app.on('ready', createWindow);