var electron = require('electron')

var app = electron.app
var BrowserWindow = electron.BrowserWindow

var mainWindow = null

app.on('ready',() => {
    mainWindow = new BrowserWindow({
        width:1920,
        height:1080,
        webPreferences:{nodeIntegration:true}
    })
    // require('./main/menu.js')
    mainWindow.loadFile('index.html')
    mainWindow.on('closed',() => {
        mainWindow = null
    })
})