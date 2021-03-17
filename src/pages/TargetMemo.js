import React from 'react'
import Layout from '../components/Layout/Layout'
import Main1 from '../components/Main/Main1'
import Sidebar1 from '../components/Sidebar/Sidebar1'
import Sidebar2 from '../components/Sidebar/Sidebar2'
import Style from './TargetMemo.module.scss'

function TargetMemo() {
    return (
        <div>
        <Layout>
                <div className={Style.container}>
                <Sidebar1 />
                <Main1 />
                <Sidebar2 />
                </div>
            </Layout>

        </div>
    )
}

export default TargetMemo