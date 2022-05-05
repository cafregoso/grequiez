import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from "../../PagesComponents/Nav/Nav"
import Footer from "../../PagesComponents/Footer/Footer"

export default function Layout() {
  return (
    <div>
        <Nav />
        <Outlet />
        <Footer />
    </div>
  )
}
