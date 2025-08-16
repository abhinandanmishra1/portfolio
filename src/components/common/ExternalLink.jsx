import React from 'react';
import Link from 'next/link';

export const ExternalLink = ({ href, children, className, ...props }) => {
  return (
    <Link href={href || '#'} target="_blank" rel="noreferrer" className={className} {...props}>
      {children}
    </Link>
  );
};

export default ExternalLink;


