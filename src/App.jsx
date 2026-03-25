// Base import
import { HashRouter, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";

// CSS
import "./styles/base.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
