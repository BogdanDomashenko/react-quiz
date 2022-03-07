import React, { Component } from "react";

import { ThemeProvider } from "@material-ui/core";

import { mainTheme } from "./themes";
import { Home } from "./pages";
import { Navbar } from "./components";

import "normalize.css";
import "@fontsource/fredoka-one";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
