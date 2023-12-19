import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import NavBar from './NavBar'

function UserLayout() {
    return (
        <>
            <NavBar />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default UserLayout