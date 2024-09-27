const Websocket = require("ws");

const wss = new Websocket.Server({ port: 8080 });

wss.on(
  "connection",
  (connection = (wsObj) => {
    // whenever the message is recieved...
    wsObj.on("message", function incoming() {
      console.log("msg recieved");
    });
    wsObj.send("msg server");

    wsObj.on("close", function () {
      console.log("websocket is closed");
    });
  })
);
