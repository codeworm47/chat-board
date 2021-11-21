import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Provider} from "react-redux";
import store from "./store/store";
import WebSocketProvider, {WebSocketContext} from './WebSocket';

ReactDOM.render(
    <Provider store={store}>
        {/*<React.StrictMode>*/}
        {/*    <App/>*/}
        {/*</React.StrictMode>*/}

        <WebSocketProvider>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
        </WebSocketProvider>
    </Provider>,
    document.getElementById("root")
);
