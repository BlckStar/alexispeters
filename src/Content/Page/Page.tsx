import React from 'react';

import style from './Page.module.css';
interface Props {
    page: Page
}

const ContentPage = (props: Props) => {
    const page = props.page;
    return <div id={page.name} className={style.Page}>
        <h2>{page.name}</h2>
        <div >
            {page.paragraphs?.map((paragraph: Paragraph, index) => {
                return <p key={page.name + '-' + index} >{paragraph.text}</p>
            })}
        </div>
    </div>
}

export default ContentPage;