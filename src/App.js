import React from "react";
import "./App.css";
import CHAT_COMPONENT from "./CHAT_COMPONENT";
import SIDEBAR from "./SIDEBAR";

function App() {
  return <div className="app">
    <SIDEBAR />
    <CHAT_COMPONENT />
  </div>;
}

export default App;
