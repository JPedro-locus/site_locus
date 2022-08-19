import React, { useEffect, useState } from 'react';
import Item from "./Item";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import Carousel, { consts } from 'react-elastic-carousel';

import { useTranslation } from "react-i18next";

<<<<<<< HEAD
import ImgCollision from "./images/image-collision.svg";
import LogoCollision from "./images/logo-collision.svg";
import LogoEmerge from "./images/emerge-logo.svg";
import Rectangle from "./images/rectangle.svg";

=======
>>>>>>> main
import { StyledCarousel } from './styles';
import { useWindowSize } from '../../../hooks/useResize';

const CarouselFour = () => {

  const [width, height] = useWindowSize();
  const [itemsToShow, setItemsToShow] = useState(3);

  useEffect(() => {
    if (width < 900) {
      setItemsToShow(1);
    }else if (width < 1315){
      setItemsToShow(2);
    }else {
      setItemsToShow(3);
    }
  }, [width]);

  const breakPoints = [
    { width: 380, itemsToShow },
  ];

  const { t } = useTranslation();
  return (
    <StyledCarousel>
      <div className="container-carousel">
        <Carousel breakPoints={breakPoints}>
        <Link className="link-card-project-carousel3" to="/events/websummit">
          <Item>
            <div className="item1-carousel-five">
              <div className="img-logo-web"></div>
              <div className="img-web-summit">
                <div className="card2022-1"></div>
              </div>
              <div>
              </div>
              <p className="txt-card-event">{t("card-event-button")}{'>'}</p>
              <p className="txt1-card-event">{t("text1-event")}</p>
            </div>
          </Item>
        </Link>
        <Link className="link-card-project-carousel3" to="/events/collision">
          <Item>
<<<<<<< HEAD
            <div className="item-upcoming-carousel-five">
              <div className="background-event-upcoming">
                <img className="img-event-upcoming" src={LogoCollision} alt="" />
                <img src={ImgCollision} alt="" />
                <p className="txt-card-event-upcoming">{t("comingSoon")}</p>
                <p className="txt1-card-event-upcoming">{t("text2-event")}</p>
              </div>
            </div>
          </Item>
          <Item>
            <div className="item-upcoming-carousel-five">
              <div className="background-event-upcoming">
                <img className="img-event-upcoming" src={LogoEmerge} alt="" />
                <img className="img-emerge1" src={Rectangle} alt="" />
                <p className="txt-card-event-upcoming">{t("comingSoon")}</p>
                <p className="txt1-card-event-upcoming">{t("text3-event")}</p>
=======
              <div className="item3-carousel-five">
                <div className="img-logo-collision"></div>
                <div className="img-collision">
                  <div className="card2022"></div>
                </div>
                <div>
                </div>
                <p className="txt-card-event">{t("card-event-button")}{'>'}</p>
                <p className="txt1-card-event">{t("text3-event")}</p>
>>>>>>> main
              </div>
            </Item>
          </Link>
        <Link className="link-card-project-carousel3" to="/events/emerge">
          <Item>
            <div className="item2-carousel-five">
              <div className="img-logo-emerge"></div>
              <div className="img-emerge">
                <div className="card2022"></div>
              </div>
              <div>
              </div>
              <p className="txt-card-event">{t("card-event-button")}{'>'}</p>
              <p className="txt1-card-event">{t("text2-event")}</p>
            </div>
          </Item>
        </Link>
        </Carousel>
      </div>
      </StyledCarousel>
  );
}

export default CarouselFour;