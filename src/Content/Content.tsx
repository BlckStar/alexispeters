import React from 'react';
import ContentPage from './Page/Page';

interface Props {
    pages: Page[]
}
const Content = (props: Props) => {
    return <div>
        {props.pages.map((page: Page) => {
            if(page.paragraphs === undefined || page.paragraphs.length === 0) {
                return '';
            }
            return <ContentPage key={page.name} page={page}/>
        })}
    </div>
}

export default Content;