import React from 'react';

const getText = (children) => {
  return React.Children.toArray(children)
    .map((child) => {
      if (typeof child === 'string') return child;
      if (typeof child === 'number') return child.toString();
      if (child.props && child.props.children) return getText(child.props.children);
      return '';
    })
    .join('');
};

const createHeading = (level) => {
  const Component = ({ children, id, ...props }) => {
    const text = getText(children);
    const headingId = id || text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

    return React.createElement(
      level,
      {
        ...props,
        id: headingId,
        className: `${props.className || ''} scroll-mt-20`
      },
      children
    );
  };
  Component.displayName = `Heading${level.replace('h', '').toUpperCase()}`;
  return Component;
};

export const H1 = createHeading('h1');
export const H2 = createHeading('h2');
export const H3 = createHeading('h3');
export const H4 = createHeading('h4');