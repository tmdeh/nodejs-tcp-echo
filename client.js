const net = require('net');
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const host = "127.0.0.1";

let socket = net.connect({port: 6666, host:host}, () => {

	socket.on('data',function(data){
		let str= data.toString();
		console.log('>>', str);
  });
	
  socket.on('end',() => {});
})

rl.on("line", (line) => {
  if(line == "disconnect") {
    socket.end();
    process.exit();
  }
  socket.write(line);
});