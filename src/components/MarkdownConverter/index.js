import Markdown from 'markdown-to-jsx';
import React from 'react';
import { render } from 'react-dom';
 

function MarkdownConverter(props) {

const md = `
# Hello world
`;
 
render(
    <Markdown
        children={md}
        options={{
            createElement(type, props, children) {
                return (
                    <div className="parent">
                        {React.createElement(type, props, children)}
                    </div>
                );
            },
        }}
    />,
    document.body
);

}

export default MarkdownConverter;