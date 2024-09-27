import express from "express";
import http from "http";
import { Server as IOServer } from "socket.io";

const PORT = 3000;
const app = express();
const server = http.createServer(app);
const io = IOServer(server);

( async() => {

    io.on("connection", (socket) => {
        console.log("new listener connected");
    });

    app.get("/stream", (req,res) => {
        res.status(200).json({Message:"Hello Radio!"});
    });

    server.listen(PORT, (req, res)=> {
        console.log(`Listening on port ${PORT}`);
    });

})();
export {};