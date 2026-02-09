const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

ipcMain.handle('select-file', async () => {
    const result = await dialog.showOpenDialog({
        properties: ['openFile'],
        filters: [{ name: 'Excel Files', extensions: ['xlsx', 'xls'] }]
    });
    
    if (result.canceled) return null;
    return result.filePaths[0];
});

ipcMain.on('run-python', (event, data) => {
    const { filePath, lotNumber } = data;
    const pythonPath = path.join(__dirname, 'venv', 'Scripts', 'python.exe');
    const scriptPath = path.join(__dirname, 'processor.py');

    const pythonProcess = spawn(pythonPath, [scriptPath, filePath, lotNumber]);

    pythonProcess.stdout.on('data', (data) => {
        event.reply('python-output', data.toString());
    });

    pythonProcess.stderr.on('data', (data) => {
        event.reply('python-output', `ERROR: ${data.toString()}`);
    });
});

// NEW: Open the folder containing the file
ipcMain.on('open-folder', (event, filePath) => {
    if (filePath) {
        shell.showItemInFolder(filePath);
    }
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});