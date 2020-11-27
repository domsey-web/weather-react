import React from "react";
import "./styles.css";
import "./App.css";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <div className="weather-app-wrapper">
            <Forecast defaultCity="London" />
          </div>
        </div>
        <Footer />
        <script src="src/script.js"></script>
      </body>
    </div>
  );
}
