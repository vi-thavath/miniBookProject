import logo from "./logo.svg";
import "./App.css";
import { React } from "react";
// import * as ReactDOM from "react-dom";
import { name, age } from "./components/data";
import Booklist from "./components/Booklist";

function App() {
  return (
    <div className="app">
      Hello from app
      <p>{name}</p>
      <Booklist />
      <p>{age}</p>
    </div>
  );
}

export default App;
