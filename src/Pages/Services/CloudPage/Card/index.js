import React from 'react';
import { StyledContainer, StyledContent, StyledButton, StyledImgContainer } from './styles';

function Card({ icon, title, text }) {
  return (
    <StyledContainer>
      <StyledImgContainer>
      <img src={icon} alt="Icone" />
      </StyledImgContainer>
      <StyledContent>
        <h3>{title}</h3>
        <p>
          {text}
        </p>
<<<<<<< HEAD
        <StyledButton>
          HIRE SERVICE
        </StyledButton>
=======
>>>>>>> main
      </StyledContent>
    </StyledContainer>
  );
}

export default Card;
