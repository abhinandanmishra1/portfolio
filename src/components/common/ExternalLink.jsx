import React from 'react';

export const ExternalLink = ({ href, children, className, ...props }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} {...props}>
      {children}
    </a>
  );
};

export default ExternalLink;


