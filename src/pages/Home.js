import React from 'react'
import Layout from '../components/Layout/Layout'
import Main from '../components/Main/Main'
import Sidebar1 from '../components/Sidebar/Sidebar1'
import Sidebar2 from '../components/Sidebar/Sidebar2'
import Style from './Home.module.scss'

function Home() {
    return (
        <div>
        <Layout>
                <div className={Style.container}>
                <Sidebar1 />
                <Main />
                <Sidebar2 />
                </div>
            </Layout>

        </div>
    )
}

export default Home
