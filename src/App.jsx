import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <p>Edit src/App.js and save to reload.</p>
                </header>
            </div>
        );
    }
}

export default App;
