import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import Style from './Layout.module.scss'
const Layout =({children})=>{
    return(
        <div className={Style.wrapper}>
        <Header />
        {children}
        <Footer />
        
        </div>
    )
}

export default Layout;