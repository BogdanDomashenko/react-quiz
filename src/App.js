import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";

import { ThemeProvider } from "@material-ui/core";

import { mainTheme } from "./themes";
import { Home, Quizz } from "./pages";
import { Navbar } from "./components";

import "normalize.css";
import "@fontsource/fredoka-one";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quizz/:id" element={<Quizz />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
