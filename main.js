const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // These settings allow the HTML to talk to the Node process
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile('index.html');
}

// When Electron is ready, create the window
app.whenReady().then(createWindow);

// QUIT when all windows are closed (standard behavior)
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

// CORE LOGIC: Listening for the 'run-python' signal from the UI
ipcMain.on('run-python', (event, data) => {
    const { filePath, lotNumber } = data;
    
    // 1. Locate the Python executable inside the virtual environment
    // We use 'path.join' to make it work on both Windows and Mac automatically
    const pythonPath = path.join(__dirname, 'venv', 'Scripts', 'python.exe');
    
    // 2. Locate our script
    const scriptPath = path.join(__dirname, 'processor.py');

    console.log(`Running: ${pythonPath} ${scriptPath} "${filePath}" "${lotNumber}"`);

    // 3. Spawn the Python process
    const pythonProcess = spawn(pythonPath, [scriptPath, filePath, lotNumber]);

    // 4. Listen for text coming from Python's "print()" statements
    pythonProcess.stdout.on('data', (data) => {
        const message = data.toString();
        console.log(`Python Output: ${message}`);
        event.reply('python-output', message);
    });

    // 5. Listen for Errors
    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python Error: ${data.toString()}`);
        event.reply('python-output', `Error: ${data.toString()}`);
    });
});