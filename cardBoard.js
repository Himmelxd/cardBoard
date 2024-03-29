const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use('/js', express.static(__dirname + '/web/js'));

app.get('/', (req, res) => {
    res.end(400);
});

app.get('/*/s', (req, res) => {
    res.sendFile(__dirname + '/web/show.html');
});

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/web/send.html');
});

let stream = require('./socket');

io.of('/stream').on('connection', stream);


server.listen(3000, () => {
    console.log('listening on *:3000');
});