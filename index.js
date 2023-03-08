const path = require('path');
const express = require('express');
const SocketIO = require('socket.io');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//static

app.use(express.static(path.join(__dirname, 'public')));

//start server

const server = app.listen(app.get('port'), () => {
    console.log('servidor corriendo en :', app.get('port'));
});

//websockets

const io = SocketIO(server);

io.on('connection', (socket) => {
    console.log('nueva conection el ID del socket es:' , socket.id);
    io.on('disconnect', (socket) => {
        console.log('El socket se ha desconectado');
    });


});