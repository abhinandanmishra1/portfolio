import React from 'react';
import classNames from 'classnames';

export const Section = React.forwardRef(({ id, className, children, useBase = true }, ref) => {
  const classes = classNames(useBase && 'section', className);
  return (
    <section id={id} className={classes} ref={ref}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
});

Section.displayName = 'Section';

export default Section;


