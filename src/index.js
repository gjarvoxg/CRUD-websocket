import express from "express"
import { Server as webSocketServer  } from "socket.io";
import http from "https"

const app = express();
const server = http.createServer(app)
const io = new webSocketServer(server);

app.use(express.static(__dirname + "/public"))

io.on('connection', (socket)=>{
    console.log('new connection:', socket.id)
    socket.emit('ping');
});

server.listen(3000);
console.log ("Server on port", 3000);   