const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// importar el paquete de terceros socket.io, y nos quedamos únicamente con el objeto 'Server'
const { Server } = require("socket.io");
// Crear una nueva instancia del objeto Server y le pasamos como parámetro nuestro servidor NodeJS
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Socket.io va a 'escuchar' los eventos de tipo 'connection', que son unos eventos que se emiten cuando un cliente (desde el navegador Web) accede a nuestra app
io.on('connection', (socket) => {

    // la propiedad id es el identificador único de cliente que Socket.io ha otorgado al cliente que se ha conectado
    console.log(socket.id);

    socket.on('disconnect', () => {
        io.emit('user disconnected', socket.id);
    })

    // emitir un nuevo evento de tipo 'user connected'

    // Escuchar los eventos de tipo 'chat message' que recibamos del cliente
    io.emit('user connected', socket.id);

    socket.on('chat message', (msg) => {
        // quiero emitir un mensaje a todo el mundo que este sea exactamente el mismo que he recibido de otro usuario
        io.emit('chat message', msg);
    });
});



server.listen(3000, () => {
    console.log('listening on *:3000');
});