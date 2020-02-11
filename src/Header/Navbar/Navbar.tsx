import React from 'react'

import styles from './Navbar.module.css';

interface Props {
    pages: Page[]
}

const Navbar  = (props: Props) => {
    return <div className={styles.Navbar}>
        {props.pages.map((page: Page) =>  {
            return <div key={page.name} className={styles.Link}>
                <a className={styles.LinkAnchor} href={'#' + page.id}>{page.name}<span className={styles.Caret}></span></a>
            </div>
        })}
    </div>
}

export default Navbar;