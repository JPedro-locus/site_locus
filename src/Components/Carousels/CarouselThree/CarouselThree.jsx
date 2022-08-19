import React, { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import { StyledCarousel, StyledCardContent, StyledItem, StyledCaseImage, StyledCaseImageRepense , StyledTitle, StyledText, Item } from './styles';
import { useWindowSize } from '../../../hooks/useResize';
import { Link } from "react-router-dom";
import imgCase from "./images/image-case.svg";
import imgCase1 from "./images/image-case1.svg";
<<<<<<< HEAD
import imgCase2 from "./images/image-case2.svg";
import { useTranslation } from "react-i18next";
=======
import imgCase2 from "./images/image-case3.svg";
import imgCase3 from "./images/capa-Repense.webp";
import { useTranslation } from "react-i18next";

import imgProvisoria from "./images/container.svg";
>>>>>>> main

const CarouselThree = () => {
  const [width, height] = useWindowSize();
  const [itemsToShow, setItemsToShow] = useState(3);
  const { t } = useTranslation();

  useEffect(() => {
    if (width < 900) {
      setItemsToShow(1);
    } else if (width < 1315) {
      setItemsToShow(2);
    } else {
      setItemsToShow(3);
    }
  }, [width]);

  const breakPoints = [
    { width: 380, itemsToShow },
  ];

<<<<<<< HEAD
  return (
    <StyledCarousel>
      <Carousel breakPoints={breakPoints}>
        <StyledItem>
          <StyledCaseImage src={imgCase} alt="" />
          <p className="coming-projects">{t("comingSoon")}</p>
          {/* <StyledCardContent>
              <StyledTitle>Cartesi</StyledTitle>
              <StyledText></StyledText>
              <Link className="link-card-project-carousel3">Veja o projeto inteiro {'>'} </Link>
            </StyledCardContent> */}
        </StyledItem>
        <StyledItem>
          <StyledCaseImage src={imgCase1} alt="" />
          <p className="coming-projects">{t("comingSoon")}</p>
          {/* <StyledCardContent>
              <StyledTitle>Jobpass</StyledTitle>
              <StyledText></StyledText>
              <Link className="link-card-project-carousel3" >Veja o projeto inteiro {'>'} </Link>
            </StyledCardContent> */}
        </StyledItem>
        <StyledItem>
          <StyledCaseImage src={imgCase2} alt="" />
          <p className="coming-projects">{t("comingSoon")}</p>
          {/* <StyledCardContent>
              <StyledTitle>Meu dimdim</StyledTitle>
              <StyledText></StyledText>
              <Link className="link-card-project-carousel3">Veja o projeto inteiro {'>'} </Link>
            </StyledCardContent> */}
        </StyledItem>

      </Carousel>
    </StyledCarousel>
  );
=======
    return (
      <StyledCarousel>

        <Carousel breakPoints={breakPoints}>
          <StyledItem>
            <StyledCaseImage src={imgCase} alt="" />
            <StyledCardContent>
              <StyledTitle>Cartesi</StyledTitle>
              {/* <StyledText>descrição do projeto</StyledText> */}
              <Link className="link-card-project-carousel3" to="/cases/cartesi">{t("text3-home-cases")} {'>'} </Link>
            </StyledCardContent>
          </StyledItem>
          
          <StyledItem>
            <StyledCaseImage src={imgCase1} alt="" />
            <StyledCardContent>
              <StyledTitle>Jobpass</StyledTitle>
              {/* <StyledText>descrição do projeto</StyledText> */}
              <Link className="link-card-project-carousel3" to="/cases/jobpass">{t("text3-home-cases")} {'>'} </Link>
            </StyledCardContent>
          </StyledItem>

          <StyledItem>
            <StyledCaseImage src={imgCase2} alt="" />
            <StyledCardContent>
              <StyledTitle>Meu DimDim</StyledTitle>
              {/* <StyledText>descrição do projeto</StyledText> */}
              <Link className="link-card-project-carousel3" to="/cases/meudimdim">{t("text3-home-cases")} {'>'} </Link>
            </StyledCardContent>
          </StyledItem>

          <StyledItem>
            <StyledCaseImageRepense src={imgCase3} alt="" />
            <StyledCardContent>
              <StyledTitle>Repense</StyledTitle>
              {/* <StyledText>descrição do projeto</StyledText> */}
              <Link className="link-card-project-carousel3" to="/cases/repense">{t("text3-home-cases")} {'>'} </Link>
            </StyledCardContent>
          </StyledItem>

          <Item>
            <StyledCaseImage src={imgProvisoria} alt="" />
            <p className="coming-projects">{t("comingSoon")}</p>
            
          </Item> 
          {/* <StyledItem>
            <StyledCaseImage src={imgCase2} alt="" />
            <StyledCardContent>
              <StyledTitle>Projeto tal</StyledTitle>
              <StyledText>descrição do projeto</StyledText>
              <Link className="link-card-project-carousel3" to="/projetotal">Veja o projeto inteiro {'>'} </Link>
            </StyledCardContent>
          </StyledItem> */}
        </Carousel>
      </StyledCarousel>
    );
>>>>>>> main
}

export default CarouselThree;

