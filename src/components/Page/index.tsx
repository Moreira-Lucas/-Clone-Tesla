import React from 'react';
import DefaultOverlayContent from '../DefaultOverlayContent';
import {ModelSection ,ModelsWrapper }from '../Models';

import { Container } from './styles';


const  Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          <ModelSection 
          className="colored"
           
          modelName="Model One"
          overlayNode={
            <DefaultOverlayContent
            label="ModelOne"
            description="Order Online for delivery"
            
            />
          }
          
          />
        </div>
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
