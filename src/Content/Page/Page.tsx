import React from 'react';

import style from './Page.module.css';
interface Props {
    page: Page
}

const ContentPage = (props: Props) => {
    const page = props.page
    let hasImages = page.images.length > 0;

    if (!hasImages) {
        return <div id={page.id} className={style.Page}>
            <div className={style.Content}>
                <h2>{page.name}</h2>
                {page.paragraphs?.map((paragraph: Paragraph, index) => {
                    return <p key={page.name + '-' + index} >{paragraph.text}</p>
                })}
            </div>
        </div>
    }

    return <div id={page.id} className={style.Page}>
    <div className={style.ContentImageWrapper}> 
        {page.images.map((pageImage: string) => {
            return <img key={pageImage} src={pageImage} className={style.ContentImage}></img>;
        })}
        <h2>{page.name}</h2>
    </div>

    <div className={style.Content}>
        {page.paragraphs?.map((paragraph: Paragraph, index) => {
            return <p key={page.name + '-' + index} >{paragraph.text}</p>
        })}
    </div>
</div>

   
}

export default ContentPage;