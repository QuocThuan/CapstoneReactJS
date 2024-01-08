import React from 'react'
import Header from '../../../../Capstone3/src/Components/Header/Header'
import Footer from '../../../../Capstone3/src/Components/Footer/Footer'
import { Outlet } from "react-router-dom";


const UserTemplate = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default UserTemplate