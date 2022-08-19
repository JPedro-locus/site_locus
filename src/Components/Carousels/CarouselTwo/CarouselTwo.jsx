import React from "react";
import Item from "./Item";
import "./styles.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import imgConstant from "./images/Constante.svg";
import imgEmpathy from "./images/empatia-piloto.svg";
import imgExplorer from "./images/exploradores.svg";
import imgCrew from "./images/tripulacao.svg";

import Carousel, { consts } from 'react-elastic-carousel';

import { useTranslation } from "react-i18next";



function myArrow({ type, onClick, isEdge }) {
  const pointer = type === consts.PREV ?
    <FaChevronLeft /> : <FaChevronRight />
  return (
    <button className="carouselButton" onClick={onClick} disabled={isEdge}>
      <div className="arrow">{pointer}</div>
    </button>
  )
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarouselOne = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="container-carousel">
        <Carousel renderArrow={myArrow} breakPoints={breakPoints} pagination={false}>
          <Item>
            <div className="imgCarousel"><img src={imgConstant} alt="" /> </div>
            <p className="titleCarousel">{t("text1-carouselOne")}</p>
            <p className="textCarousel">{t("text2-carouselOne")}</p>
          </Item>
          <Item>
            <div className="imgCarousel"><img src={imgEmpathy} alt="" /></div>
            <p className="titleCarousel">{t("text3-carouselOne")}</p>
            <p className="textCarousel">{t("text4-carouselOne")}</p>
          </Item>
          <Item>
            <div className="imgCarousel"><img src={imgExplorer} alt="" /></div>
            <p className="titleCarousel">{t("text5-carouselOne")}</p>
            <p className="textCarousel">{t("text6-carouselOne")}</p>
          </Item>
          <Item>
            <div className="imgCarousel4"><img src={imgCrew} alt="" /></div>
            <p className="titleCarousel4">{t("text7-carouselOne")}</p>
            <p className="textCarousel">{t("text8-carouselOne")}</p>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselOne;