const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    selectFile: () => ipcRenderer.invoke('select-file'),
    runPython: (data) => ipcRenderer.send('run-python', data),
    onPythonOutput: (callback) => ipcRenderer.on('python-output', (event, message) => callback(message)),
    // NEW: Open the file location in Windows Explorer
    openFolder: (filePath) => ipcRenderer.send('open-folder', filePath)
});