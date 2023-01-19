import express from "express";
import path from "path";
import http from "http";
require("dotenv").config();
import { socket } from "./socket/socketController";
import cors from "cors";

const app = express();

app.use(cors());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"));
    });
}

const server = new http.Server(app);

socket(server);

server.listen(process.env.PORT || 5000, () => {
    console.log("Socket listening!");
});
