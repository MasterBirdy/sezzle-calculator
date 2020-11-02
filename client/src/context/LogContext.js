import React, { createContext, useState, useEffect } from "react";

import { v4 as uuidv4 } from "uuid";
import io from "socket.io-client";
import axios from "axios";

const ENDPOINT = `${
    process.env.NODE_ENV === "production" ? process.env.PRODUCTION_SOCKET : process.env.DEVELOPMENT_SOCKET
}`;
const socket = io(ENDPOINT);

const LOG_LIMIT = 10;

export const LogContext = createContext(null);

const LogProvider = ({ children }) => {
    const [logs, setLogs] = useState([]);
    const [name, setName] = useState("");
    const [color, setColor] = useState(null);

    useEffect(() => {
        axios
            .get("/api", {
                withCredentials: true,
            })
            .then((res) => {
                if (res.status === 200 && !res.data.color) {
                    window.location.reload();
                }
            })
            .catch((err) => {
                console.log(err);
            });
        socket.on("connected", (data) => {
            setLogs(data.logs);
            setName(data.name);
            setColor(data.color);
        });
    }, []);

    useEffect(() => {
        socket.on("receive", (log) => {
            const newLogs = [...logs.slice(logs.length >= 10 ? 1 : 0, logs.length), log];
            setLogs(newLogs);
            socket.emit("received", newLogs);
        });
    }, [logs]);
    /**
     * CHANGE NAME
     * @desc Changes the name and emits to a websocket the new name,
     * and the websocket saves it to the session.
     */

    const changeName = (newName) => {
        setName(newName);
        socket.emit("changeinfo", {
            name: newName,
            color,
        });
    };

    /**
     * GENERATE RANDOM COLOR
     * @desc Generates a random HTML color code and the websocket saves
     * it to the session.
     */
    const generateRandomColor = () => {
        const randomColor = "#" + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
        setColor(randomColor);
        socket.emit("changeinfo", {
            name,
            color: randomColor,
        });
    };

    /**
     * ADD LOG
     * @desc Takes a log and adds it at the end of the list of logs. If there is
     * more than the limit, then it slices the first one out. The websocket takes
     * these logs, saves it to session, and broadcasts it to other users.
     */
    const addLog = (log) => {
        const newLog = { ...log, name, color, id: uuidv4() };
        const newLogs = [...logs.slice(logs.length >= LOG_LIMIT ? 1 : 0, logs.length), newLog];
        setLogs(newLogs);
        socket.emit("submit", newLogs);
    };

    return (
        <LogContext.Provider value={{ logs, setLogs, name, color, changeName, generateRandomColor, addLog }}>
            {children}
        </LogContext.Provider>
    );
};

export default LogProvider;
