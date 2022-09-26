import React, { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import Layout from "./Components/Pages/Layout/Layout"
import Home from "./Components/Pages/Home/Home"
import ESR from "./Components/Pages/ESR/ESR"
import History from "./Components/Pages/History/History"
import Sustentability from "./Components/Pages/Sustentability/Sustentability"
import Blog from './Components/Pages/Blog/Blog'
import BlogPost from './Components/Pages/BlogPost/BlogPost'
import Contact from './Components/Pages/Contact/Contact'
import Login from "./Components/Pages/Login/Login"
import Signup from "./Components/Pages/Signup/Signup"
import AddPost from "./Components/Pages/AddPost/AddPost"

import BlogDataService from "./services/services"
import Whatsapp from "./Components/PagesComponents/Whatsapp/Whatsapp"

function App() {
  const [user, setUser] = useState(!localStorage.getItem('user') ? null : localStorage.getItem('user'))
  const [token, setToken] = useState(!localStorage.getItem('token') ? null : localStorage.getItem('token'))
  const [error, setError] = useState('')

  const login = async (user=null) => {
    await BlogDataService.login(user)
    .then(response =>{
      setToken(response.data.token);
      setUser(user.username);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', user.username);
      setError('');
    })
    .catch( err =>{
      console.log('login', error);
      setError(err.toString());
    });
  }

  const logout = () => {
    setToken('')
    setUser('')
    localStorage.setItem('token', '')
    localStorage.setItem('user', '')
  }


  const signup = async (user=null) => {
    await BlogDataService.signup(user)
    .then(response =>{
      setToken(response.data.token);
      setUser(user.username);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', user.username);
    })
    .catch( err =>{
      console.log('signup', error);
      setError(err.toString());
    })
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} className="App">
            <Route index element={
              <div>
                <Whatsapp />
                <Home />
              </div>
            } />
            <Route path="esr/" element={
              <div>
                <Whatsapp />
                <ESR />
              </div>
            } />
            <Route path="history/" element={<History />} />
            <Route path="sustentability/" element={
              <div>
                <Whatsapp />
                <Sustentability />
              </div>
            } />
            <Route path="blog/" element={
              <div>
                <Whatsapp />
                <Blog token={ token } user={ user } logout={ logout } />
              </div>
            } />
            {/* <Route path="addpost/" element={<AddPost token={ token } user={ user } />} /> */}
            <Route path="blog/:id/" element={<BlogPost token={ token } user={ user } logout={ logout } />} />
            <Route path="contact/" element={
              <div>
                <Whatsapp />
                <Contact />
              </div>
            } />
            {/* <Route path="login/" element={<Login login={ login } />} />
            <Route path="signup-rqz/" element={<Signup signup={ signup } />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
