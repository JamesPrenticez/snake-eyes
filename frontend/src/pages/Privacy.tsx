import React, { type ReactElement } from 'react'
import ReactMarkdown from 'react-markdown';
import markdownContent from '../data/privacy.md';

const Privacy = (): ReactElement => {
  return (
    <ReactMarkdown>
      {markdownContent}
    </ReactMarkdown>
  )
}

export default Privacy