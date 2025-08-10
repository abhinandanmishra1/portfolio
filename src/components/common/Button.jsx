import React from 'react';
import classNames from 'classnames';

export const Button = ({ children, size = 'md', className, ...props }) => {
  const sizeClass = size === 'sm' ? 'btn-sm' : size === 'lg' ? 'btn-lg' : '';
  const classes = classNames('btn', sizeClass, className);
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;


