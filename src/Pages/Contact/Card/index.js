import React from 'react';
import ArrowDown from '../../../Assets/arrow-down (2).svg';
import {
  StyledCard,
  StyledIndex,
  StyledDescription,
  StyledImg,
  StyledImgContainer,
  StyledArrow
} from './styles';

function Card({ icon, description, index, position }) {
  return (
    <StyledCard position={position}>
      <StyledIndex>
        {index}
      </StyledIndex>
      <StyledImgContainer>
        <StyledImg src={icon} alt="Icone" />
        <StyledArrow src={ArrowDown} alt="Icone de seta" />
      </StyledImgContainer>
      <StyledDescription>
        {description}
      </StyledDescription>
    </StyledCard>
  );
}

export default Card;
