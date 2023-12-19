const server = require("http").createServer();
const os = require("os-utils");

const io = require("socket.io")(server, {
  transports: ["websocket", "polling"],
});

let i = 0;

io.on("connection", (client) => {
  setInterval(() => {
    os.cpuUsage((v) => {
      let time = i + 1 / 8;
      i = time;
      client.emit("cpu", {
        value: v,
        name: parseInt(time),
      });
    });
  }, 250);
});

server.listen(8000);
