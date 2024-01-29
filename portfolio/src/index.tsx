import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavMenu from "./components/navMenu";
import Home from "./pages/home";
import ExperiencePage from "./pages/experience";
import BioPage from "./pages/bio";
import { ThemeProvider } from "./utils/themeContext";
import { Footer } from "./components/footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <NavMenu />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/experience" element={<ExperiencePage />}></Route>
          <Route path="/bio" element={<BioPage />}></Route>
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
);
