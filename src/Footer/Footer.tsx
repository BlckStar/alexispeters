import React from 'react'

import styles from './Footer.module.css';
import GithubLogo from '../Assets/GitHub-Mark-32px.png';
import StackoverFlowLogo from '../Assets/stackoverflow.svg';
import XingLogo from '../Assets/xing.png';
import Legal from './Legal/Legal';

const Footer = () => {
    return <div className={styles.Footer}>
        <div className={styles.FooterContent}>
            <div className={styles.Contact}>
                <p>
                    Alexis Peters<br />
                    Bebelstr. 3<br />
                    21614 Buxtehude<br />
                    info@alexispeters.de
                </p>
            </div>
            <div className={styles.SocialMedia}>
                <a href="https://github.com/BlckStar">
                    <img src={GithubLogo} alt="Github Logo"/>
                </a>
                <a href="https://stackoverflow.com/users/4279830/alexis-peters">
                    <img src={StackoverFlowLogo} alt="Stackoverflow Logo"/>
                </a>
                <a href="https://www.xing.com/profile/Alexis_Peters2/cv">
                    <img src={XingLogo} alt="Xing Logo"/>
                </a>
            </div>
        </div>
        <Legal />
    </div>
}

export default Footer;