import React, { useEffect, useState } from 'react';
import Item from "./Item";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

<<<<<<< HEAD
import LogoEmerge from "./images/emerge-logo.svg";
import LogoCollision from "./images/logo-collision.svg";
import Collision from "./images/collision-img.svg";
import Rectangle from "./images/rectangle.svg";

=======
>>>>>>> main
import Carousel, { consts } from 'react-elastic-carousel';

import { useTranslation } from "react-i18next";

import { StyledCarousel } from './styles';
import { useWindowSize } from '../../../hooks/useResize';
;

const CarouselFour = () => {
  const navigate = useNavigate();
  const redirectTo = (path) => {
    navigate(path);
  }
  const [width, height] = useWindowSize();
  const [itemsToShow, setItemsToShow] = useState(3);

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


  const { t } = useTranslation();
  return (
    <StyledCarousel>
      <div className="container-carousel">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <div className="item1-carousel-four">
              <div className="img-logo-web"></div>
              <div className="img-web-summit">
                <div className="card2021"></div>
              </div>
              <p onClick={() => redirectTo('/events/websummit')} className="txt-card-event-home">{t("card-event-button")} {'>'}</p>
            </div>
          </Item>
          <Item>
<<<<<<< HEAD
            <div className="item-coming-carousel4">
              <img className="img-logo-2" src={LogoCollision} />
              <img src={Collision} />
              <p className="year-2022">2022</p>
              <p className="text-coming">{t("comingSoon")} </p>
            </div>
          </Item>
          <Item>
            <div className="item-coming-carousel4">
              <img className="img-logo-3" src={LogoEmerge} />
              <img className="img-emerge" src={Rectangle} />
              <p className="year-2022">2022</p>
              <p className="text-coming">{t("comingSoon")} </p>
=======
            <div className="item2-carousel-four">
              <div className="img-logo-collision"></div>
              <div className="img-collision">
                <div className="card2022"></div>
              </div>
              <p onClick={() => redirectTo('/events/collision')} className="txt-card-event-home">{t("card-event-button")} {'>'}</p>
            </div>
          </Item>
          <Item>
          <div className="item3-carousel-four">
              <div className="img-logo-emerge"></div>
              <div className="img-emerge">
                <div className="card2022"></div>
              </div>
              <p onClick={() => redirectTo('/events/emerge')} className="txt-card-event-home">{t("card-event-button")} {'>'}</p>
>>>>>>> main
            </div>
          </Item>
        </Carousel>
      </div>
    </StyledCarousel>
  );
}

export default CarouselFour;
