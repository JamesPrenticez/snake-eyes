import React, { type ReactElement } from 'react'
import ReactMarkdown from 'react-markdown';
import markdownContent from '../data/terms.md';

const Terms = (): ReactElement => {
  return (
    <ReactMarkdown>
      {markdownContent}
    </ReactMarkdown>
  )
}

export default Terms