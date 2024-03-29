import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (<div className={s.nav}>
            <nav className={s.item}>

            <div className={`${s.item} `}><NavLink to={'/profile'} activeClassName={s.activeLink}>Profile</NavLink></div>
            <div className={`${s.item} ${s.active}`}><NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink></div>
            <div className={s.item}><NavLink to={'/news'} activeClassName={s.activeLink}>News</NavLink></div>
            <div className={`${s.item} `}><NavLink to={'/music'} activeClassName={s.activeLink}> Music</NavLink></div>
            <div className={s.item}><NavLink  to={'/sittings'} activeClassName={s.activeLink}>Sittings</NavLink></div>


            </nav>
        </div>
    );
};
export default Navbar;
