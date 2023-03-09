const net = require('net');

var server = net.createServer((socket) => {
	socket.write('Welcome to Socket Server\n');

//클라이언트에서 write 하면 data 이벤트로 읽어옴
	socket.on('data', (data) => {
		var textMsg=data.toString();
		console.log('Client sendㄴ: ', textMsg);
    
    socket.write(data)
	});

	socket.on('end', () => {
    console.log("disconnected");
	});

});

server.listen(6666, () => {
  console.log("listen: 6666");
});
