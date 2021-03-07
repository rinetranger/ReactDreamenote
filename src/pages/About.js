import React from 'react'
import Layout from '../components/Layout/Layout'
import Main2 from '../components/Main/Main2'
import Sidebar1 from '../components/Sidebar/Sidebar1'
import Sidebar2 from '../components/Sidebar/Sidebar2'
import Style from './About.module.scss'

function About() {
    return (
        <div>
            <Layout>
                <div  className={Style.container}>
                <Sidebar1 />
                <Main2 />
                <Sidebar2 />
                </div>
            </Layout>
        </div>
    )
}

export default About
