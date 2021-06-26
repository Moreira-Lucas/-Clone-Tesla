import React from 'react';

import useWrapperScroll from '../useWrapperScroll';

import { Container } from './styles';



const ModelOverlay: React.FC = ({children}) => {
  const {scrollY } = useWrapperScroll()
  
  
  return (
    <Container>
      <h1>{children}</h1>
      
    </Container>
  );
};

export default ModelOverlay;
