import React from 'react';

import { Container } from './styles';

interface TooltipProos {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProos> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

export default Tooltip;
