import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout: React.FC = () => {
    return (
        <div>
            <Header />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout