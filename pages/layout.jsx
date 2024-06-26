import React from 'react'
import { Header } from './components/header'
import { Footer } from './components/footer'

export const WebLayout = ({ children }) => {
    return (
        <div>
            <Header />
            <main className='bg-[#F7FCFF]'>{children}</main>
            <Footer />
        </div>
    )
}
