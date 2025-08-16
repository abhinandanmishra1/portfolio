import React from 'react';

export const IconLink = ({ href, children, className = '', ...props }) => {
  const safeHref = typeof href === 'string' ? href : '#';
  return (
    <a href={safeHref} target="_blank" rel="noreferrer" className={className} {...props}>
      {children}
    </a>
  );
};

export default IconLink;


