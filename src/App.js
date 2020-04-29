import React from "react";
import covidLogo from "./logo/covid19_logo.png";
import GlobalData from "./components/globaldata";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="covidLogo" src={covidLogo} alt="Devil" title="Devil" />
      <GlobalData />
    </div>
  );
}

export default App;
