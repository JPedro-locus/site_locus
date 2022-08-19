
import { useNavigate } from 'react-router-dom';
import React from "react";
import Item from "./Item";
import "./styles.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import imgDigitalProduct from "./images/imagem-DESIGN.svg";
import imgInception from "./images/imagem-INCEPTION.svg";


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

function CarouselDesign({ handleClick, handleClick1 }) {
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
            <div className="imgCarousel"><img src={imgDigitalProduct} alt="" /> </div>
            <p className="titleCarousel">DIGITAL PRODUCT DESIGN</p>
<<<<<<< HEAD
            <p className="textCarousel" ></p>
=======
            <p className="textCarousel" >We will co-create your product structuring all management.</p>
>>>>>>> main
            <p className="button-carousel-design" onClick={() => redirectTo('/contact')}>{t("SeeMore")}{'>'}</p>
          </Item>
          <Item>
            <div className="imgCarousel"><img src={imgInception} alt="" /> </div>
            <p className="titleCarousel">DESIGN <br /> INCEPTION</p>
<<<<<<< HEAD
            <p className="textCarousel"></p>
=======
            <p className="textCarousel">Design is the ideation, elaboration, and specification of the project.</p>
>>>>>>> main
            <p className="button-carousel-design" onClick={() => redirectTo('/design/designinception')}>{t("SeeMore")} {'>'}</p>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default CarouselDesign;