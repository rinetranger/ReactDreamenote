import React from 'react'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import Style from './Header.module.scss';
import FadeIn from 'react-fade-in';

const  Header=()=> {
    return (
        <div className={Style.header}>
        <FadeIn><h1>Team Rink</h1></FadeIn>
        <div>
             <nav >
              <ul className={Style.menu}>
                <FadeIn><li className={Style.menuitem}>
                  <Link to='/' className={Style.menuitemi}>Home</Link>
                </li></FadeIn>
                <FadeIn><li className={Style.menuitem}>
                  <Link to='/about' className={Style.menuitemi}>About</Link>
                </li></FadeIn>
                <FadeIn><li className={Style.menuitem}>
                  <Link to='/Blog' className={Style.menuitemi}>Blog</Link>
                </li></FadeIn>
              </ul>
            </nav>
            
        </div>
        </div>
    )
};

export default Header;


