import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './Project Components/HomePage'
import Blogs from './Project Components/Blogs'
import MyNavbar from './Project Components/Navbar'

const WowProject = () => {
  return (
    <div>
    <Routes>
        <Route path = "/" element = {<div><MyNavbar></MyNavbar><Outlet></Outlet></div>}>
            <Route index element = {<HomePage></HomePage>}></Route>
            <Route path = "blog" element = {<Blogs></Blogs>}></Route>
        </Route>
    </Routes>

    </div>
  )
}

export default WowProject