const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
    enviarNotificacion: (titulo, cuerpo) => {
        ipcRenderer.send("notificar", { titulo, cuerpo });
    }
});

