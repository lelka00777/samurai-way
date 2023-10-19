import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (<div className={s.nav}>
            <nav className={s.nav}>

            <div className={`${s.item} `}><a href={'/profile'}>Profile</a></div>
            <div className={`${s.item} ${s.active}`}><a href='dialogs'>Messages</a></div>
            <div className={s.item}><a href={'news'}>News</a></div>
            <div className={`${s.item} `}><a href={'music'}> Music</a></div>
            <div className={s.item}><a  href={'sittings'}>Sittings</a></div>


            </nav>
        </div>
    );
};
export default Navbar;
