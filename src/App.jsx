import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Header } from "./components/pages/Header";
import { Section } from "./components/pages/Section";
import Details from "./components/pages/Details";
function App() {
  return (
    <>
      <Header />
      <Section />
      <Details/>
      <Routes></Routes>
    </>
  );
}

export default App;
