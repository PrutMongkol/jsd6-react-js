/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./App.css";

function App() {
  const [temperature, setTemperature] = useState(12);

  return (
    <div id="app">
      <Header temperature={temperature} />
      <Content temperature={temperature} />
      <Footer setTemperature={setTemperature} />
    </div>
  );
}

function Header({ temperature }) {
  return (
    // Code for Header
    // <Header />
    <header>
      <span>Turn on / off</span>
      <p>Current Temperature: {temperature}</p>
    </header>
  );
}

function Content({ temperature }) {
  return (
    // Code for Content
    // <Content />
    <div>
      <Temperature temperature={temperature} />
    </div>
  );
}

function Temperature({ temperature }) {
  return (
    // Code for Temperature
    // <Temperature />
    <div id="temperature">
      <span>{temperature} ºC</span>
    </div>
  );
}

function Footer({ setTemperature }) {
  return (
    // Code for Footer
    // <Footer />
    <footer>
      <button onClick={() => setTemperature(prev => prev + 1)}>Up</button>
      <button onClick={() => setTemperature(prev => prev - 1)}>Down</button>
    </footer>
  );
}

export default App;
