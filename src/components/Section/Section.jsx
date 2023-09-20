import React from 'react';
import { SectionWrapper } from './Section.styled';
import { Title } from 'components/Title/Title';

export const Section = ({ title, children }) => {
  return (
    <SectionWrapper>
      <Title title={title} />
      {children}
    </SectionWrapper>
  );
};
