const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const port = 5000;

const socketio = require("socket.io");

const server = http.createServer(app);

const io = socketio(server);

app.set("view engine", "ejs");
app.use(
  express.static("public", {
    setHeaders: (res, path) => {
      if (path.endsWith(".css")) res.setHeader("Content-Type", "text/css");
      else if (path.endsWith(".js"))
        res.setHeader("Content-Type", "application/javascript");
    },
  })
);

io.on("connection", function (socket) {
  socket.on("send-location", function (data) {
    io.emit("receive-location", { id: socket.id, ...data });
  });
  socket.on("disconnect", function () {
    io.emit("user-disconnected", socket.id);
    console.log("User disconnected, User_Id: ", socket.id);
  });
  console.log("User Connected, User_Id:", socket.id);
});

app.get("/", function (req, res) {
  res.render("index");
});

server.listen(port, function () {
  console.log("server listening on port " + port);
});
