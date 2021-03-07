import React from 'react'
import Layout from '../components/Layout/Layout'
import Main3 from '../components/Main/Main3'
import Sidebar1 from '../components/Sidebar/Sidebar1'
import Sidebar2 from '../components/Sidebar/Sidebar2'
import Style from './Myprof.module.scss'
function Myprof() {
    return (
        <div>
         <Layout>
                <div className={Style.container}>
                <Sidebar1 />
                <Main3 />
                <Sidebar2 />
                </div>
            </Layout>
            
        </div>
    )
}

export default Myprof
