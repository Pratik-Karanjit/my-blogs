import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import HomePage from './Project Components/HomePage'
import Blogs from './Project Components/Blogs'
import MyNavbar from './Project Components/Navbar'
import BlogOne from './Project Components/BlogOne'
import BlogThree from './Project Components/BlogThree'
import BlogFour from './Project Components/BlogFour'
import BlogTwo from './Project Components/BlogTwo'

const WowProject = () => {
  return (
    <div>
    <Routes>
        <Route path = "/" element = {<div><MyNavbar></MyNavbar><Outlet></Outlet></div>}>
            <Route index element = {<HomePage></HomePage>}></Route>
            <Route path = "blog" element = {<Blogs></Blogs>}></Route>
            <Route path = "blogOne" element = {<BlogOne></BlogOne>}></Route>
            <Route path = "blogTwo" element = {<BlogTwo></BlogTwo>}></Route>
            <Route path = "blogThree" element = {<BlogThree></BlogThree>}></Route>
            <Route path = "blogFour" element = {<BlogFour></BlogFour>}></Route>
        </Route>
    </Routes>

    </div>
  )
}

export default WowProject