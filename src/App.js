import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./Components/Pages/Layout/Layout"
import Home from "./Components/Pages/Home/Home"
import ESR from "./Components/Pages/ESR/ESR"
import History from "./Components/Pages/History/History"
import Sustentability from "./Components/Pages/Sustentability/Sustentability"
import Blog from './Components/Pages/Blog/Blog'
import Contact from './Components/Pages/Contact/Contact'

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
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
