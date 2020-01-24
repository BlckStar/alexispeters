import React from 'react'

import styles from './Navbar.module.css';

interface Props {
    pages: Page[]
}

const Navbar  = (props: Props) => {
    return <div className={styles.Navbar}>
        {props.pages.map((page: Page) =>  {
            return <div className={styles.Link}>
                {page.name}
            </div>
        })}
    </div>
}

export default Navbar;