const PreCode = ({ children, className = '', ...props }) => {
  const language = className.replace(/language-/, '') || 'javascript';
  const codeContent = children?.props?.children || children;

  return (
    <CodeBlock className={className}>
      {codeContent}
    </CodeBlock>
  );
};

export default PreCode;