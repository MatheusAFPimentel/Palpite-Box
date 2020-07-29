import React from 'react'
import Footer from '../Footer'
import Header from '../Header'

const Layout = ({children}) => {
    return (
        <div>
            <Header />
            <div className='container mx-auto flex-1 mx-auto p-8'>
                {children}
            </div>
            <Footer className='w-full text-center border-t border-grey p-4 pin-b' />
        </div>
    )
}

export default Layout