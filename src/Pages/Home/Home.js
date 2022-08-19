import React, { useState, useEffect } from "react";
import Mouse from '../../Components/Mouse';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Customer1 from '../../Assets/catersi.svg';
import Customer2 from '../../Assets/open-co.svg';
import Customer3 from '../../Assets/junt.png';
import Customer4 from '../../Assets/Linx.svg';
import Customer5 from '../../Assets/Stone.svg';
import Customer6 from '../../Assets/farmly.svg';
import Customer7 from '../../Assets/Neemo.svg';
import Customer8 from '../../Assets/linker.svg';
import Customer9 from '../../Assets/TIM.svg';
import Customer10 from '../../Assets/americanas.svg';
import Customer11 from '../../Assets/studioZ.svg';
import Customer12 from '../../Assets/meu-dimdim.svg';

import {
  MainHome,
  AboutHome,
  CasesHome,
  ServicesHome,
  EventsCareersHome,
  IdeaHome,
  StyledButton,
  MainHomeMobile,
  AboutHomeMobile,
  CarouselsHomeMobile,
  EventsCareersHomeMobile,
  StyledCustomers,
  StyledGrid,
  StyledCustomersMobile
} from "./Home.style";
import Typewriter from "typewriter-effect";
import astronautMain from "../images/astronaut.svg";
import mapHome from "../images/Mapa.svg";
import towerMobile from "../images/torre-mobile.svg";
import mapHomeMobile from "../images/mapa-mobile.svg";
import rectangleHome from "../images/Rectangle.svg";
import CarouselThree from "../../Components/Carousels/CarouselThree/CarouselThree.jsx";
import CarouselFour from "../../Components/Carousels/CarouselFour/CarouselFour.jsx";
import dialogImg from "../images/dialog-img-home.svg";
import moonImg from "../images/lua-home.svg";
import astronautsImg from "../images/fale-conosco.svg";
import holeHome from "../images/buraco-home.svg";
import cloudLeft from "../images/nuvem-esq.svg";
import cloudRight from "../images/nuvem-dir.svg";
import positionMap from "../images/localizacao.svg";
import wave from "../images/Onda.svg";
import smoke from "../images/smoke.svg";
import dashOne from "../images/dash1.svg";
import dashTwo from "../images/dash2.svg";
import dashThree from "../images/dash3.svg";
import dashFour from "../images/dash4.svg";
import imageServicesOne from "../images/animationOne-services.svg";
import shadowOne from "../images/sombra-design.svg";
import arrowServices from "../images/Seta-Baixo.svg";
import imageServicesTwo from "../images/animationTwo-services.svg";
import shadowTwo from "../images/sombra2.svg";
import imageServicesThree from "../images/animationThree-services.svg";
import shadowThree from "../images/sombra3.svg";
import imageServicesFour from "../images/animationFour-services.svg";
import shadowFour from "../images/sombra4.svg";
import ArrowRight from '../../Assets/arrow-right.svg';
import shadowFive from "../images/sombra5.svg";
import imageServicesFive from "../images/animationFive-services.svg";
import shadowSix from "../images/sombra6.svg";
import imageServicesSix from "../images/animationSix-services.svg";
import shadowSeven from "../images/sombra7.svg";
import imageServicesSeven from "../images/animationSeven-services.svg";
import shadowEight from "../images/sombra8.svg";
import imageServicesEight from "../images/animationEight-services.svg";
import AstronautsMobile from '../images/astronauts-mobile.svg';
import imgServices from "../images/conteudo.svg";
import imgServices1 from "../images/conteudo-1.svg";
import imgServices2 from "../images/conteudo-2.svg";
import imgServices3 from "../images/conteudo-3.svg";
import imgServices4 from "../images/conteudo-4.svg";
import imgServices5 from "../images/conteudo-5.svg";
import imgServices6 from "../images/conteudo-6.svg";
import imgServices7 from "../images/conteudo-7.svg";
import satHome from "../images/satelite-home.svg";

import { FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const { t } = useTranslation();
  const [moon, setMoon] = useState('static-moon-image');
  const [dash1, setdash1] = useState('static-dash-one');
  const [dash2, setdash2] = useState('static-dash-two');
  const [dash3, setdash3] = useState('static-dash-three');
  const [dash4, setdash4] = useState('static-dash-four');
  const [astronauts, setAstronauts] = useState('visible-astronaut');
  const [pingMap, setPingnMap] = useState('map-home-position-static');
  const [pingMapMobile, setPingnMapMobile] = useState('position-mobile-static');

  const [active,setActive] = useState(false)
  const activeForm = () => {
    setActive(true)
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  const changeClass = () => {
    if (window.scrollY >= 6000 && window.scrollY <= 6500) {
      setMoon('moon-image');
      setAstronauts('hidden-astronaut')
    } else if (window.scrollY <= 6000) {
      setMoon('static-moon-image');
      setAstronauts('visible-astronaut')
    }
    if (window.scrollY >= 5000) {
      setdash1('dash-one');
      setdash2('dash-two');
      setdash3('dash-three');
      setdash4('dash-four');
    } else if (window.scrollY <= 4999) {
      setdash1('static-dash-one');
      setdash2('static-dash-two');
      setdash3('static-dash-three');
      setdash4('static-dash-four');
    }
    if (window.scrollY >= 500) {
      setPingnMap('map-home-position');
      setPingnMap('map-home-position');
      setPingnMapMobile('position-mobile');
    } else if (window.scrollY <= 500) {
      setPingnMap('map-home-position-static');
      setPingnMap('map-home-position-static');
      setPingnMapMobile('position-mobile-static');
    }
  };
  const navigate = useNavigate();
  const redirectTo = (path) => {
    navigate(path);
  }
  window.addEventListener('scroll', changeClass, handleScroll);

  return (
    <>
      <MainHome>
        <div className="main-home">
          <div className="text-main-home">
            <div className="animation-text">
              <div className="background-animated-word"></div>
              <img className="image-hole" src={holeHome} alt="" />
              <img className="image-shark-main" src={astronautMain} alt="" />
              <img className="cloud-left" src={cloudLeft} alt="" />
              <img className="cloud-right" src={cloudRight} alt="" />
              <img className="satelite-home" src={satHome} alt="" />
              <p className="text-one">WE CAN DO IT</p>
              <div className="animated-word">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "NOW",
                      "EASY",
                      "FASTER"
                    ],
                  }}
                />
              </div>
            </div>
            <div className="text-static-main">
              <p>Born to solve everyday techonological dilemmas</p>
            </div>
          </div>
        </div>

        <AboutHome>
          <div className="div-about-home-one">
            <div>
              <img className="map-home" src={mapHome} alt="" />
              <img className={pingMap} src={positionMap} alt="" />
            </div>
            <div className="text-about-home">
              <p className="title-about-home">{t("text1-about")}</p>
              <p className="text1-about-home">{t("text1-home-about")}</p>
              <p className="button-about-home" onClick={() => redirectTo('/about')}>{t("text2-home-about")}{'>'}</p>
            </div>
            <div className="container-rectangle-home">
              <div className="rectangle-home">
                <img className="img-rectangle-home" src={rectangleHome} alt="" />
              </div>
            </div>
          </div>
          <div className="div-about-home-two">
            <img className="wave-animation" src={wave} alt="" />
          </div>
        </AboutHome>
        <ServicesHome>
          <div className="home-services-main">
            <div className="home-services-one">
              <p className="title-home-services">{t("text1-home-services")}</p>
              <p className="text1-about-services">{t("text2-home-services")}</p>
              <p className="button-home-services" onClick={() => redirectTo('/services')}>{t("text3-home-services")}{'>'}</p>
            </div>
            <div className="home-services-two">
              <div className="column1-services-home">
                <div className="main-animation-services">
                  <div className="div-animation-services" onClick={() => redirectTo('/design/designinception')}>
                    <img src={shadowOne} alt="" />
                    <p className="text-animation-services" id="arrowOneServices">DESIGN <br /> INCEPTION</p>
                    <img className="image-service1" src={imageServicesOne} alt="" />
                  </div>
                  <div className="div-animation-services" onClick={() => redirectTo('/consultancy/qa')}>
                    <img src={shadowTwo} alt="" />
                    <p className="text-animation-services">QA <br /> Test Factory</p>
                    <img className="image-service2" src={imageServicesTwo} alt="" />
                  </div>
                  <div className="div-animation-services" onClick={() => redirectTo('/consultancy/cloud')}>
                    <img src={shadowThree} alt="" />
                    <p className="text-animation-services" id="cloud-home" >CLOUD <br /> SECURITY</p>
                    <img className="image-service3" src={imageServicesThree} alt="" />
                  </div>
                  <div className="div-animation-services" onClick={() => redirectTo('/contact')}>
                    <img src={shadowFour} alt="" />
                    <p className="text-animation-services">Squad <br /> Outsourcing</p>
                    <img className="image-service4" src={imageServicesFour} alt="" />
                  </div>
                </div>
              </div>
              <div className="column2-services-home">
                <div className="main-animation-services">
                  <div className="div-animation-services" onClick={() => redirectTo('/contact')}>
                    <img src={shadowFive} alt="" />
                    <p className="text-animation-services" id="arrowOneServices">Digital Product <br /> Development </p>
                    <img className="image-service5" src={imageServicesFive} alt="" />
                  </div>
                  <div className="div-animation-services" onClick={() => redirectTo('/dev/customSoftware')}>
                    <img src={shadowSix} alt="" />
                    <p className="text-animation-services">Custom Software <br /> Development</p>
                    <img className="image-service6" src={imageServicesSix} alt="" />
                  </div>
                  <div className="div-animation-services" onClick={() => redirectTo('/contact')}>
                    <img src={shadowSeven} alt="" />
                    <p className="text-animation-services" id="staff-home" >staff <br /> Augmentation</p>
                    <img className="image-service7" src={imageServicesSeven} alt="" />
                  </div>
                  <div className="div-animation-services" onClick={() => redirectTo('/consultancy/CTO')}>
                    <img src={shadowEight} alt="" />
                    <p className="text-animation-services">CTO <br /> AS A SERVICE</p>
                    <img className="image-service8" src={imageServicesEight} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ServicesHome>
        <StyledCustomers className="customers-web">
          <h1>{t("text-client")}</h1>
          <StyledGrid>
            <img src={Customer1} alt="Imagem da logo do cliente" />
            <img src={Customer2} alt="Imagem da logo do cliente" />
<<<<<<< HEAD
            <img src={Customer3} alt="Imagem da logo do cliente" />
=======
            <img className="junt-customer" src={Customer3} alt="Imagem da logo do cliente" />
>>>>>>> main
            <img src={Customer4} alt="Imagem da logo do cliente" />
            <img src={Customer5} alt="Imagem da logo do cliente" />
            <img src={Customer6} alt="Imagem da logo do cliente" />
            <img src={Customer7} alt="Imagem da logo do cliente" />
            <img src={Customer8} alt="Imagem da logo do cliente" />
            <img src={Customer9} alt="Imagem da logo do cliente" />
            <img src={Customer10} alt="Imagem da logo do cliente" />
            <img src={Customer11} alt="Imagem da logo do cliente" />
            <img src={Customer12} alt="Imagem da logo do cliente" />
          </StyledGrid>
        </StyledCustomers>
        <CasesHome>
          <div className="home-cases-main">
            <div className="div-cases-home-one">
              <div className="text-carousel-case-home">
                <div className="cases-texts">
                  <p className="title-cases-home">{t("text1-home-cases")}</p>
<<<<<<< HEAD
                  {/* <p className="button-cases-home" onClick={() => redirectTo('/cases')}>{t("text2-home-cases")}{'>'}</p> */}
=======
                  <p className="button-cases-home" onClick={() => redirectTo('/cases')}>{t("text2-home-cases")}{'>'}</p> 
>>>>>>> main
                </div>
                <CarouselThree />
              </div>
            </div>
          </div>
        </CasesHome>
        <EventsCareersHome>
          <div className="home-events-careers">
            <div className="home-events-main">
              <div className="home-event-one">
                <div className="texts-event-home">
                  <p className="title-event">{t("text1-home-events")}</p>
                  <p className="button-events-home" onClick={() => redirectTo('/events')}>{t("text2-home-events")}{'>'}</p>
                </div>
                <div className="carousel-container-event">
                  <CarouselFour />
                </div>
              </div>
            </div>
            <div className="home-careers-main">
              <div id="anima-astronauts" className="careers-home-one">
                <div className="text-image-careers-home">
                  <p className="title-careers-home">{t("text1-home-careers")}</p>
                  <p className="subtitle-home-careers">{t("text2-home-careers")}</p>
                  <div className="div-button-careers-home">
                    <a target="_blank" href="https://locussoftware.gupy.io./">
                      <StyledButton type="button">
                        <p>{t("joinUs")}</p>
                        <img src={ArrowRight} alt="Seta para direita" />
                      </StyledButton>
                    </a>
                  </div>
                </div>
              </div>
              <div className="container-moon">
                <div className="moon-home">
                  <img className={moon} src={moonImg} alt="" />
                  <div className={astronauts}>
                    <img className="astronaut-dialog" src={dialogImg} alt="" />
                    <img className={dash1} src={dashOne} alt="" />
                    <img className={dash2} src={dashTwo} alt="" />
                    <img className={dash3} src={dashThree} alt="" />
                    <img className={dash4} src={dashFour} alt="" />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </EventsCareersHome>
        <IdeaHome>
          <div id="anima-moon" className="home-idea">
            <div className="main-text-idea-home">
              <p className="title-text-idea-home">{t("text1-idea")}</p>
              <p className="title2-text-idea-home">{t("text2-idea")}</p>
              <p className="text-idea-home">{t("text3-idea")}</p>
            </div>
            <div className="idea-home-astronauts">
              <div className="div-idea-home-astronauts">
                <div className="button-idea-home">
                  <StyledButton type="button" onClick={() => redirectTo('/contact')}>
                    <p>{t("starProject")}</p>
                    <img src={ArrowRight} alt="Seta para direita" />
                  </StyledButton>
                </div>
                <div className="div-image-astronauts-home">
                  <img className="image-atronauts-home" src={astronautsImg} alt="" />
                  <img className="smoke1" src={smoke} alt="" />
                  <img className="smoke2" src={smoke} alt="" />
                </div>
              </div>
            </div>
          </div>
        </IdeaHome>
        <Mouse />
      </MainHome>
      <MainHomeMobile>
        <div className="main-home-mobile">
          <div className="texts-main-home-mobile">
            <div className="animation-text-mobile">
              <div className="background-animated-word"></div>
              <p className="text-one-mobile">WE CAN DO IT</p>
              <div className="animated-word-mobile">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    strings: [
                      "NOW",
                      "EASY",
                      "FASTER"
                    ],
                  }}
                />
              </div>
            </div>
            <div className="text-static-main-mobile">
              <p>Born to solve everyday techonological dilemmas</p>
            </div>
            <div className="div-image-main-mobile">
              <img className="image-hole-mobile" src={holeHome} alt="" />
              <img className="image-shark-main-mobile" src={astronautMain} alt="" />
              <img className="cloud-left-mobile" src={cloudLeft} alt="" />
              <img className="cloud-right-mobile" src={cloudRight} alt="" />
              <img className="satelite-home-mobile" src={satHome} alt="" />
            </div>
          </div>
        </div>
      </MainHomeMobile>
      <AboutHomeMobile>
        <div className="text-about-home-mobile">
          <p className="title-about-home-mobile">{t("text1-about")}</p>
          <p className="text1-about-home-mobile">{t("text1-home-about")}</p>
          <p className="button-about-home-mobile" onClick={() => redirectTo('/about')}>{t("text2-home-about")}{'>'}</p>
          <img className="tower-mobile" src={towerMobile} alt="" />
        </div>
        <div className="div-about-home-two-mobile">
          <img className={pingMapMobile} src={positionMap} alt="" />
          <img className="map-home-mobile" src={mapHomeMobile} alt="" />
          <img className="wave-animation-mobile" src={wave} alt="" />
        </div>
      </AboutHomeMobile>
      <CarouselsHomeMobile>
<<<<<<< HEAD
        <div className="cases-home-mobile">
          <div className="texts-case-mobile-home">
            <p className="title-cases-home-mobile">{t("text1-home-cases")}</p>
            {/* <p className="button-cases-home-mobile" onClick={() => redirectTo('/cases')}>{t("text2-home-cases")}{'>'}</p> */}
          </div>
          <CarouselThree />
        </div>
=======

>>>>>>> main
        <div className="services-home-mobile">
          <div className="texts-services-mobile-home">
            <p className="title-services-home-mobile">{t("text1-home-services")}</p>
            <p className="text-services-home-mobile">{t("text2-home-services")}</p>
            <p className="button-services-home-mobile" onClick={() => redirectTo('/services')}>{t("text3-home-services")}{'>'}</p>
          </div>
          <div className="images-mobile-services">
            <div className="line-image-services">
              <div className="image-services-home" onClick={() => redirectTo('/design/designinception')}>
                <img src={imgServices2} alt="" />
                <p className="text-services-mobile">DESIGN INCEPTION</p>
              </div>
              <div className="image-services-home" onClick={() => redirectTo('/consultancy/qa')}>
                <img src={imgServices3} alt="" />
                <p className="text-services-mobile">QA Test Factory</p>
              </div>
            </div>
            <div className="line-image-services">
              <div className="image-services-home" onClick={() => redirectTo('/consultancy/cloud')}>
                <img src={imgServices} alt="" />
                <p className="text-services-mobile">CLOUD SECURiTY</p>
              </div>
              <div className="image-services-home" onClick={() => redirectTo('/contact')}>
                <img src={imgServices1} alt="" />
                <p className="text-services-mobile">Squad Outsourcing</p>
              </div>
            </div>
            <div className="line-image-services">
              <div className="image-services-home" onClick={() => redirectTo('/contact')}>
                <img src={imgServices4} alt="" />
                <p className="text-services-mobile">Digital Product Development </p>
              </div>
              <div className="image-services-home" onClick={() => redirectTo('/contact')}>
                <img src={imgServices5} alt="" />
                <p className="text-services-mobile">staff Augmentation</p>
              </div>
            </div>
            <div className="line-image-services">
              <div className="image-services-home" onClick={() => redirectTo('/dev/customSoftware')}>
                <img src={imgServices6} alt="" />
                <p className="text-services-mobile">Custom Software Development</p>
              </div>
              <div className="image-services-home" onClick={() => redirectTo('/consultancy/CTO')}>
                <img src={imgServices7} alt="" />
                <p className="text-services-mobile">CTO AS A SERVICE</p>
              </div>
            </div>
          </div>
        </div>
      </CarouselsHomeMobile>
      <StyledCustomersMobile className="customers-mobile">
        <h1>{t("text-client")}</h1>
        <StyledGrid>
          <img src={Customer1} alt="Imagem da logo do cliente" />
          <img src={Customer2} alt="Imagem da logo do cliente" />
          <img src={Customer3} alt="Imagem da logo do cliente" />
          <img src={Customer4} alt="Imagem da logo do cliente" />
          <img src={Customer5} alt="Imagem da logo do cliente" />
          <img src={Customer6} alt="Imagem da logo do cliente" />
          <img src={Customer7} alt="Imagem da logo do cliente" />
          <img src={Customer8} alt="Imagem da logo do cliente" />
          <img src={Customer9} alt="Imagem da logo do cliente" />
          <img src={Customer10} alt="Imagem da logo do cliente" />
          <img src={Customer11} alt="Imagem da logo do cliente" />
          <img src={Customer12} alt="Imagem da logo do cliente" />
        </StyledGrid>
      </StyledCustomersMobile>

      <EventsCareersHomeMobile>
        <div className="cases-home-mobile">
          <div className="texts-case-mobile-home">
            <p className="title-cases-home-mobile">{t("text1-home-cases")}</p>
            {/* <p className="button-cases-home-mobile" onClick={() => redirectTo('/cases')}>{t("text2-home-cases")}{'>'}</p> */}
          </div>
          <CarouselThree />
        </div>
        <div className="events-home-mobile">
          <div className="texts-events-mobile-home">
            <p className="title-events-home-mobile">{t("text1-home-events")}</p>
            <p className="button-events-home-mobile" onClick={() => redirectTo('/events')}>{t("text2-home-events")}{'>'}</p>
            <div className="carousel-event-mobile">
              <CarouselFour />
            </div>
          </div>
        </div>
        <div>
          <div className="texts-careers-home-mobile">
            <p className="title-careers-home-mobile">{t("text1-home-careers")}</p>
            <p className="text-careers-home-mobile">{t("text1-home-careers")}</p>
            <a target="_blank" href="https://locussoftware.gupy.io./">
              <StyledButton type="button">
                <p>{t("joinUs")}</p>
                <img src={ArrowRight} alt="Seta para direita" />
              </StyledButton>
            </a>
          </div>
          <div className="container-background-mobile-home">
            <div className="background-one-events-careers"></div>
            <div className="background-two-events-careers"></div>
          </div>
        </div>
        <div className="container-image-home-astronauts-mobile">
          <img className="image-home-astronauts-mobile" src={AstronautsMobile} alt="imagem de astronautas" />
        </div>
        <div className="texts-careers-home-mobile">
          <p className="title-mobile-home-careers">{t("text1-idea")}</p>
          <p className="title2-mobile-home-careers">{t("text2-idea")}</p>
          <p className="text-careers-home-mobile">{t("text3-idea")}</p>
          <StyledButton type="button" onClick={() => redirectTo('/contact')}>
            <p>{t("starProject")}</p>
            <img src={ArrowRight} alt="Seta para direita" />
          </StyledButton>
          <div className="div-image-astronauts-home-mobile">
            <img className="image2-atronauts-home-mobile" src={astronautsImg} alt="" />
            <img className="smoke1" src={smoke} alt="" />
            <img className="smoke2" src={smoke} alt="" />
          </div>
        </div>

      </EventsCareersHomeMobile>
    </>
  );
}

export default Home;

