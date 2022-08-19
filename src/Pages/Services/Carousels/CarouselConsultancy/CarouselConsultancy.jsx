

import React from "react";
import Item from "./Item";
import "./styles.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import imgOne from "./images/imagem.svg";
import imgTwo from "./images/imagem-1.svg";
import imgThree from "./images/imagem-2.svg";

import Carousel, { consts } from 'react-elastic-carousel';


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

const CarouselConsultancy = () => {
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
            <p className="titleCarousel">QA <br /> Test Factory</p>
<<<<<<< HEAD
            <p className="textCarousel"></p>
=======
            <p className="textCarousel">We test the functionality of the product to avoid errors.</p>
>>>>>>> main
            <p className="button-carousel-design" onClick={() => redirectTo('/consultancy/qa')}>{t("SeeMore")}{'>'}</p>
          </Item>
          <Item>
            <div className="imgCarousel"><img src={imgTwo} alt="" /></div>
            <p className="titleCarousel">CLOUD <br /> SECURITY</p>
<<<<<<< HEAD
            <p className="textCarousel"></p>
=======
            <p className="textCarousel">We develop security measures in the cloud and across the digital environment.</p>
>>>>>>> main
            <p className="button-carousel-design" onClick={() => redirectTo('/consultancy/cloud')}>{t("SeeMore")}{'>'}</p>
          </Item>
          <Item>
            <div className="imgCarousel"><img src={imgThree} alt="" /></div>
            <p className="titleCarousel">CTO <br /> AS A SERVICE</p>
<<<<<<< HEAD
            <p className="textCarousel">  </p>
=======
            <p className="textCarousel">We offer a technical leader who will collaborate on strategies.  </p>
>>>>>>> main
            <p className="button-carousel-design" onClick={() => redirectTo('/consultancy/CTO')}>{t("SeeMore")}{'>'}</p>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselConsultancy;