import React from "react";
import Navbar from "./components/Navbar";
import AllBooks from "./components/AllBooks";
import MyBooks from "./components/MyBooks";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/mybooks" element={<MyBooks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
