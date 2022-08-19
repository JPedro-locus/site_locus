import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import {
  StyledCarousel
} from './styles';
import Image1 from '../Images/event-img-1.png';
import { useWindowSize } from '../../../hooks/useResize';
import LeftArrow from '../../../Assets/left-arrow.svg';
import RightArrow from '../../../Assets/right-arrow.svg';
import Carrossel1 from '../../../Assets/carrosselCollision1.jpeg';
import Carrossel2 from '../../../Assets/carrosselCollision2.jpeg';
import Carrossel3 from '../../../Assets/carrosselCollision3.jpeg';
import Carrossel4 from '../../../Assets/carrosselCollision4.jpeg';
import Carrossel5 from '../../../Assets/carrosselCollision5.jpeg';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const [sliderRef, setSliderRef] = useState(null);
  const [width, height] = useWindowSize();
  const [sliderSettings, setSliderSettings] = useState(
    {
      arrows: false,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500
    }
  );

  const images = [
    {
      id: '0',
      image: Carrossel1
    },
    {
      id: '1',
      image: Carrossel2
    },
    {
      id: '2',
      image: Carrossel3
    },
    {
      id: '3',
      image: Carrossel4
    },
    {
      id: '4',
      image: Carrossel5
    },
  ];

  useEffect(() => {
    setSliderSettings({
      ...sliderSettings, 
      centerPadding: width <= 1180 ? "0px" : "100px",
      slidesToShow: width <= 850 ? 1 : 3,
    });
  }, [width]);

  return (
    <StyledCarousel>
        <div className='carousel'>
          <button type="button" className="arrow-button" onClick={sliderRef?.slickPrev}>
            <img src={LeftArrow} alt="seta-esquerda" />
          </button>
          <div className='carousel-content'>
            <Slider ref={setSliderRef} {...sliderSettings}>
              {images.map((image) => (
                <button className="image" key={image.id}>
                  <img className='imagem-teste' src={image.image} alt="Imagem do evento" />
                </button>
              ))}
            </Slider>
          </div>
          <button type="button" className="arrow-button" onClick={sliderRef?.slickNext}>
            <img src={RightArrow} alt="seta-direita" />
          </button>
        </div>
    </StyledCarousel>
  )
};

export default Carousel;

