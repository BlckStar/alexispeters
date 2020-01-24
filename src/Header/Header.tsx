import React from 'react';

import  style from './Header.module.css';
import Navbar from '../Navbar/Navbar';

interface HeaderProps {
    pages: Page[]
}
const Header = (props: HeaderProps) => {
    return <div className={style.Header}>

        <div className={style.Headline}>
            <p className={style.Name}>
                Alexis Peters
            </p>
            <p className={style.Slogan}>
                Sometimes Easy is Easier
            </p>
        </div>

        <Navbar pages={props.pages}/>
    </div>
}

export default Header;