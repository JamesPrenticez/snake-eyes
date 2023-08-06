import React from 'react'
import Body from '../components/layout/Body';
import style from '../styles/markdown.module.css';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw"; // Allows for html markup in md files
import markdownContent from '../data/terms.md?raw';

const Terms = () => {
  return (
    <Body>
      <div className='pt-12 px-12'>
        <ReactMarkdown className={style.reactMarkdown} rehypePlugins={[rehypeRaw]}>
          {markdownContent}
        </ReactMarkdown>
      </div>
    </Body>
  )
}

export default Terms