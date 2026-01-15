import React from 'react';

const createHeading = (level) => {
  const Component = ({ children, ...props }) => {
    const text = typeof children === 'string' ? children : React.Children.toArray(children).join('');
    const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

    return React.createElement(
      level,
      {
        ...props,
        id,
        className: props.className || ''
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