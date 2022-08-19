import React from 'react';
import { useTranslation } from "react-i18next";
import { StyledCardContainer, StyledTitle, StyledText, StyledButton,StyledImage } from './styles';



function Card({ icon, shadow, title, text, handleClick }) {
  const { t } = useTranslation();
  return (
    <StyledCardContainer>
      <StyledImage>
        <img className="icon" src={icon} alt="Imagem do card" />
        <img className="shadow" src={shadow} alt="sombra do card" />
      </StyledImage>
      <StyledTitle>
        {title}
      </StyledTitle>
      <StyledText>
        {text}
      </StyledText>
      <StyledButton onClick={() => handleClick()} >
      {t("SeeMore")} {'>'}
      </StyledButton>

    </StyledCardContainer>
  );
}

export default Card;
