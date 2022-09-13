const stream = (socket)=>{
    socket.on('subscribe', (data)=>{
        socket.join(data.room);
        socket.join(data.socketId);
        if (data.screen == true) {
            socket.join(data.room + '-screen');
        }
        socket.to(data.room + '-screen').emit('whatsQuestion');
    });

    socket.on('question', (data)=>{
        socket.to([...socket.rooms][1]).emit('question', data.question);
    });

    socket.on('card', (data)=>{
        if('card' in data) {
            socket.to([...socket.rooms][1] + '-screen').emit('card', data.card);
        }
    });
}

module.exports = stream;
