
import { useNavigate } from 'react-router-dom';
import React from "react";
import Item from "./Item";
import "./styles.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import imgOne from "./images/imagem.svg";
import imgTwo from "./images/imagem-1.svg";
import imgThree from "./images/imagem-2.svg";

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

const CarouselDev = ({handleClick, handleClick1, handleClick2}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const redirectTo = (path) => {
    navigate(path);
  }
  return (
    <>
      <div className="container-carousel">
        <Carousel renderArrow={myArrow} breakPoints={breakPoints} pagination={false}>
          <Item>
            <div className="imgCarousel"><img src={imgOne} alt="" /> </div>
            <p className="titleCarousel">Custom Software</p>
<<<<<<< HEAD
            <p className="textCarousel"> </p>
=======
            <p className="textCarousel">We manage qualified teams to deliver maximum value. </p>
>>>>>>> main
            <p className="button-carousel-design" onClick={() => redirectTo('/dev/customSoftware')}>{t("SeeMore")}{'>'}</p>
          </Item>
          <Item>
            <div className="imgCarousel"><img src={imgTwo} alt="" /></div>
            <p className="titleCarousel">Staff Augmentation</p>
<<<<<<< HEAD
            <p className="textCarousel"> </p>
=======
            <p className="textCarousel">We augment your internal team with qualified specialists.</p>
>>>>>>> main
            <p className="button-carousel-design" onClick={() => redirectTo('/contact')}>{t("SeeMore")}{'>'}</p>
          </Item>
          <Item>
            <div className="imgCarousel"><img src={imgThree} alt="" /></div>
            <p className="titleCarousel">Squad Outsource</p>
<<<<<<< HEAD
            <p className="textCarousel"></p>
=======
            <p className="textCarousel">We form multidisciplinary teams specialized in the development of digital products.</p>
>>>>>>> main
            <p className="button-carousel-design" onClick={() => redirectTo('/contact')}>{t("SeeMore")}{'>'}</p>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselDev;