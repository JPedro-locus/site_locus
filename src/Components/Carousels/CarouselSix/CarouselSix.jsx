import React, { useEffect, useState } from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import { StyledCarousel, StyledCardContent, StyledItem, StyledCaseImage, StyledTitle, StyledText, StyledImagePlataforms } from './styles';
import { useWindowSize } from '../../../hooks/useResize';
import { Link } from "react-router-dom";
import imgCase from "./images/image-case.svg";
import imgCase1 from "./images/image-case1.svg";
import imgCase2 from "./images/image-case2.svg";

import platformCard from "./images/plataformas.svg";

const CarouselSix = () => {
    const [width, height] = useWindowSize();
    const [itemsToShow, setItemsToShow] = useState(3);

    useEffect(() => {
        if (width < 900) {
          setItemsToShow(1);
        }else if (width < 1315) {
          setItemsToShow(2);
        } else {
          setItemsToShow(3);
        }
      }, [width]);

    const breakPoints = [
        { width: 380, itemsToShow },
    ];

    return (
        <StyledCarousel>
            <Carousel breakPoints={breakPoints}>
                <StyledItem>
                    <StyledCaseImage src={imgCase} alt="" />
                    <StyledCardContent>
                        <StyledTitle>Projeto tal</StyledTitle>
                        <StyledText>descrição do projeto</StyledText>
                        <Link className="link-card-project-carousel3" to="/projetotal">Veja o projeto inteiro {'>'} </Link>
                        <StyledImagePlataforms><img src={platformCard} alt="" /></StyledImagePlataforms>
                    </StyledCardContent>
                </StyledItem>
                <StyledItem>
                    <StyledCaseImage src={imgCase1} alt="" />
                    <StyledCardContent>
                        <StyledTitle>Projeto tal</StyledTitle>
                        <StyledText>descrição do projeto</StyledText>
                        <Link className="link-card-project-carousel3" to="/projetotal">Veja o projeto inteiro {'>'} </Link>
                        <StyledImagePlataforms><img src={platformCard} alt="" /></StyledImagePlataforms>
                    </StyledCardContent>
                </StyledItem>
                <StyledItem>
                    <StyledCaseImage src={imgCase2} alt="" />
                    <StyledCardContent>
                        <StyledTitle>Projeto tal</StyledTitle>
                        <StyledText>descrição do projeto</StyledText>
                        <Link className="link-card-project-carousel3" to="/projetotal">Veja o projeto inteiro {'>'} </Link>
                        <StyledImagePlataforms><img src={platformCard} alt="" /></StyledImagePlataforms>
                    </StyledCardContent>
                </StyledItem>
                <StyledItem>
                    <StyledCaseImage src={imgCase2} alt="" />
                    <StyledCardContent>
                        <StyledTitle>Projeto tal</StyledTitle>
                        <StyledText>descrição do projeto</StyledText>
                        <Link className="link-card-project-carousel3" to="/projetotal">Veja o projeto inteiro {'>'} </Link>
                        <StyledImagePlataforms><img src={platformCard} alt="" /></StyledImagePlataforms>
                    </StyledCardContent>
                </StyledItem>
            </Carousel>
        </StyledCarousel>
    );
}

export default CarouselSix;

