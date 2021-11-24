import React, {createContext} from 'react'
import io from 'socket.io-client';
import {useDispatch} from 'react-redux';
import {receiveNewMessage} from "./store/actionCreator";

const WebSocketContext = createContext(null)

export {WebSocketContext}

export default ({children}) => {
    let socket;
    let ws;

    const dispatch = useDispatch();

    const sendMessage = (message) => {
        console.log("sending message : ", message);
        socket.emit("chat", message);
        //dispatch(receiveNewMessage(message));
    }

    if (!socket) {
        socket = io.connect("ws://localhost:9091")

        socket.on("chat", (msg) => {
            console.log("message received : ", msg)
            dispatch(receiveNewMessage(msg));
        })

        ws = {
            socket: socket,
            sendMessage
        }
    }

    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    )
}