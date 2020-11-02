const express = require("express");
const path = require("path");
const app = express();
const Server = require("http").Server;
const socket = require("socket.io");
require("dotenv").config();
const session = require("express-session");
const MemoryStore = require("memorystore")(session);

if (process.env.NODE_ENV === "production") {
    app.enable("trust proxy");
}

const sessionMiddleware = require("express-session")({
    secret: process.env.SECRET || "secret-key",
    resave: true,
    saveUninitialized: true,
    store: new MemoryStore({}),
    cookie: { secure: process.env.NODE_ENV === "production" },
});

const server = Server(app);

const io = socket(server, {
    cookie: false,
});

app.use(sessionMiddleware);

io.use(function (socket, next) {
    sessionMiddleware(socket.request, {}, next);
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "build")));
}

app.get("/api", (req, res) => {
    if (!req.session.color) {
        req.session.color = "#000000";
        req.session.save();
        return res.json({ color: null });
    } else {
        return res.json({ color: req.session.color });
    }
});

if (process.env.NODE === "production") {
    app.get("/*", (req, res) => {
        res.sendFile(path.join(__dirname, "build", "index.html"));
    });
}

io.on("connect", (socket) => {
    const session = socket.request.session;
    session.logs = session.logs || [];
    session.name = session.name || "";
    session.color = session.color || "#000000";
    session.save();
    socket.emit("connected", {
        logs: session.logs,
        name: session.name,
        color: session.color,
    });

    socket.on("changeinfo", (info) => {
        session.name = info.name;
        session.color = info.color;
        session.save();
    });

    socket.on("submit", (logs) => {
        session.logs = logs;
        session.save();
        if (logs.length) {
            socket.broadcast.emit("receive", logs[logs.length - 1]);
        }
    });

    socket.on("received", (logs) => {
        session.logs = logs;
        session.save();
    });
});

server.listen(process.env.PORT || 4000, () => {
    console.log(`Listening to requests on port ${process.env.PORT || 4000}`);
});
