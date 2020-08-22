import React from "react";
import ReactDOM from "react-dom";
import { Container } from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";

import "./index.css";
import Chat from "chat/Chat";

const App = () => (
    <Container>
        <p>
            Qui non culpa cupidatat commodo eiusmod nisi dolore sit enim
            cupidatat velit cupidatat labore.
        </p>
        <h1>Chat!!</h1>
        <Chat />
        <p>
            Nisi ex non consectetur sunt sit voluptate pariatur id deserunt ex
            eu officia cupidatat.
        </p>
    </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
