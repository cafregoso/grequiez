import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./Components/Pages/Layout/Layout"
import Home from "./Components/Pages/Home/Home"
import ESR from "./Components/Pages/ESR/ESR"
import History from "./Components/Pages/History/History"
import Sustentability from "./Components/Pages/Sustentability/Sustentability"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} className="App">
            <Route index element={<Home />} />
            <Route path="esr" element={<ESR />} />
            <Route path="history" element={<History />} />
            <Route path="sustentability" element={<Sustentability />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
