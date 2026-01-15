import React from 'react';
import { Prism as SyntaxHighlighter } from 'prism-react-renderer';

const customTheme = {
  plain: {
    color: '#e2e8f0',
    backgroundColor: 'transparent',
  },
  styles: [
    {
      types: ['keyword', 'tag'],
      style: { color: '#c792ea' }
    },
    {
      types: ['string', 'attr-name'],
      style: { color: '#82aaff' }
    },
    {
      types: ['function', 'function-variable'],
      style: { color: '#82aaff' }
    },
    {
      types: ['number', 'boolean'],
      style: { color: '#f78c6c' }
    },
    {
      types: ['comment'],
      style: { color: '#676e95' }
    },
    {
      types: ['class-name'],
      style: { color: '#ffcb6b' }
    }
  ]
};

const CodeBlock = ({ children, className = '' }) => {
  const language = className.replace(/language-/, '') || 'javascript';
  const codeString = typeof children === 'string' ? children : React.Children.toArray(children).join('');

  if (!codeString) {
    return null;
  }

  return (
    <div className="relative group">
      <div className="absolute top-0 left-0 right-0 h-8 bg-n-9 rounded-t-lg flex items-center px-4 gap-2">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-auto text-xs text-n-3 font-mono uppercase">{language}</span>
      </div>
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="bg-n-8 hover:bg-n-7 text-n-1 text-xs px-2 py-1 rounded transition-colors"
          onClick={() => navigator.clipboard.writeText(codeString)}
        >
          Copy
        </button>
      </div>
      <SyntaxHighlighter
        language={language}
        theme={customTheme}
        customStyle={{
          margin: 0,
          borderRadius: '0.75rem',
          paddingTop: '3rem',
          paddingBottom: '1.5rem',
          background: 'linear-gradient(135deg, #15131D 0%, #1a1625 100%)',
          border: '1px solid #252134',
          fontSize: '0.875rem',
          lineHeight: '1.6'
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;