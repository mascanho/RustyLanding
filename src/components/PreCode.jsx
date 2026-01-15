import React from 'react';
import CodeBlock from './CodeBlock';

const PreCode = ({ children, className = '' }) => {
  const language = className.replace(/language-/, '') || 'javascript';
  const codeElement = React.Children.toArray(children)[0];

  if (!codeElement) {
    return null;
  }

  let codeContent = '';

  if (React.isValidElement(codeElement) && codeElement.type === 'code') {
    codeContent = React.Children.toArray(codeElement.props.children).join('');
  } else if (typeof codeElement === 'string') {
    codeContent = codeElement;
  } else {
    codeContent = React.Children.toArray(children).join('');
  }

  if (!codeContent) {
    return null;
  }

  return (
    <CodeBlock className={className}>
      {codeContent}
    </CodeBlock>
  );
};

export default PreCode;