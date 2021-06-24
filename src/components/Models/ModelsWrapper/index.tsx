import React from 'react';


import { Container } from './styles';



const ModelsWrapper: React.FC = ({children}) => {
  return (
    <Container>
      <h1>ModelsWrapper</h1>
      {children}
    </Container>
  );
};

export default ModelsWrapper;
