const { contextBridge, ipcRenderer } = require('electron');

// CORE CONCEPT: The Context Bridge
// This is a secure way to expose specific Electron functions to your HTML
// without giving the HTML full access to your entire computer.
contextBridge.exposeInMainWorld('electronAPI', {
    runPython: (data) => ipcRenderer.send('run-python', data),
    onPythonOutput: (callback) => ipcRenderer.on('python-output', (event, ...args) => callback(...args))
});