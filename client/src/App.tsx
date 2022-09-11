import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AllBooks from "./pages/AllBooks";
import MyBooks from "./pages/MyBooks";
import "./App.css";
import ThemeContext, { themes } from "./theme/theme-context";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () =>
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <button className="btn-theme" onClick={toggleTheme}>
          Change Theme
        </button>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<AllBooks />} />

            <Route path="/mybooks" element={<MyBooks />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
