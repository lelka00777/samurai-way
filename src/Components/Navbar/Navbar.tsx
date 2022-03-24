import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (<div className={s.nav}>
            <nav className={s.nav}>

            <div className={`${s.item} ${s.active}`}><a>Profile</a></div>
            <div className={`${s.item} ${s.message}`}><a>Messages</a></div>
            <div className={s.item}><a>News</a></div>
            <div className={`${s.item} ${s.message}`}><a>Music</a></div>
            <div className={s.item}><a>Settings</a></div>


            </nav>
        </div>
    );
};
export default Navbar;
