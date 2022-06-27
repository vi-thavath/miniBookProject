// import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
// import * as ReactDOM from "react-dom";
// import { name, age } from "./components/data";
import Booklist from "./components/Booklist";

// function App() {
//   return (
//     <div className="app">
//       Hello from app
//       <Booklist />
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="app">
        <Booklist />
      </div>
    );
  }
}

export default App;
