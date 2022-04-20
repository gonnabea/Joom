import express from "express";
import http from 'http';
import WebSocket from "ws";
import SocketIO from "socket.io";

const app = express();

app.set('view engine', "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));

app.get("/", (req, res) => res.render("home"));
app.get("/*", (req, res) => res.redirect("/"));
const handleListen = () => console.log("Listening on http://localhost:3000");

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

wsServer.on("connection", socket => {
    console.log(socket);
})

// const wss = new WebSocket.Server({ server });

// const sockets = [];

// wss.on("connection", (socket) => {
//     sockets.push(socket);
//     socket["nickname"] = "Customer";
//     console.log("Connected to Browser");
//     socket.on("close", () => console.log("Disconnected from Browser!"))
//     socket.on("message", msg => {
//         const message = JSON.parse(msg);
//         switch(message.type) {
//             case "message":
//                 sockets.forEach((aSocket) => aSocket.send(`${socket.nickname}: ${message.payload}`));
//                 break;
//             case "nickname":
//                 console.log(message)
//                 socket["nickname"] = message.payload;
//                 break;
            
//         }
        
            
        
        
//     })
    
// });

httpServer.listen(3000, handleListen);