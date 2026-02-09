const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // CORE CONCEPT: Security Best Practices
            // We point to our new preload script to create a secure bridge
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: false,
            contextIsolation: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

ipcMain.on('run-python', (event, data) => {
    const { filePath, lotNumber } = data;
    
    // Path to your venv python executable
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