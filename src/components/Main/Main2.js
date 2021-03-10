import React from 'react'
import Style from './Main2.module.scss'
import Image from './me.jpg'
function Main2() {
    return (
        <div className={Style.main2}>
        <h2>About Me</h2> 
        <img src={Image} alt="" className={Style.img}/>
        <p className={Style.profile}>
            コンサルティングファームBIG4出身。主に証券会社、銀行、VC、投信投資顧問、REITなどの監査
            とコンサルティング業務に従事。店頭公開コンサルティング業務、M&Aアドバイザリー業務。翻訳などをおこなっておりました。
            その後参議院議員公設第２秘書、中堅ファーストフード顧問を経て独立。
            現在web製作をおこなっております。
             対応可能言語、フレームワークははHTML,CSS,Javascript,JQuery,PHP,WordPress,React.js,Laravel,Python,Django,Ubuntu,Linuxs,CentOSなど
            お気軽にお問い合わせください。
        </p>

        </div>
    )
}

export default Main2
