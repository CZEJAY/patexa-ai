import clsx from 'clsx';
import React from 'react';

const Caret = ({ className }: {className: string}) => {
  return (
    <span className={clsx(
      "caret",
      className
    )}>
    </span>
  );
};

export default Caret;