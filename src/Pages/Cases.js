import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

import CallActionContact from "../Components/CallActionContact";
import imgProjeto4 from "./images/capa-Repense.webp";
import imgProjeto3 from "./images/meuDimDimCapa.svg";
import imgProjeto2 from "./images/case2.webp";
import imgProjeto1 from "./images/case1.webp";
import Line2 from "./images/Line2.svg";
import Line3 from "./images/Line3.svg";
import Mouse from '../Components/Mouse';
import iconDesktopOn from "./images/desktopon.svg";
import iconWebOn from "./images/webon.svg";
import iconAndroidOn from "./images/androidon.svg";

import iconMobileOff from "./images/mobileoff.svg";
import iconWebOff from "./images/weboff.svg";
import iconDesktopOff from "./images/desktopoff.svg";

import rectanguleOne from "./images/Rectangle1.svg";
import { Link } from "react-router-dom";
import CarouselSix from "../Components/Carousels/CarouselSix/CarouselSix.jsx";

import imgCaseMobile from "./images/case1-mobile.svg";
import imgCaseMobile1 from "./images/case2-mobile.svg";
import imgCaseMobile2 from "./images/meuDimDimCapa-mobile.jpg";
import imgCaseMobile3 from "./images/capa-Repense.webp";

import {
  MainCases,
  CasesOne,
  MobileCases
}
  from "../Styles/Cases.style";

const Cases = () => {
  const navigate = useNavigate();
  const redirectTo = (path) => {
    navigate(path);
  }
  const { t } = useTranslation();

  return (
    <>
      <MainCases>
        <section>
          <div className="main-cases">
            <div className="rail-cases">
                <Link className="link-cases" to="/">Home</Link>
                <p className="separator"><b>/</b></p>
                <p><b>Cases</b></p>
              </div>
            <div className="title-cases" >
              <p>CASES</p>
            </div>
            <div className="container-cases-one">
              <div className="left-cases-one" >
                <div id="textsCase" >
                  <div className="texts-case-one">
                    <p className="text1-cases-one">CARTESI</p>
                    <p className="text2-cases-one"></p>
                    <p className="text3-cases-one" onClick={() => redirectTo('/cases/cartesi')}>See the entire project {'>'} </p>
                    <div >
                      <div className="title-icons">
                        <img className="line" src={Line2} alt="" />
                        <p className="text-tile-icons">Plataforms</p>
                        <img className="line" src={Line3} alt="" />
                      </div>
                      <div className="icons-project1">
                        <img src={iconDesktopOn} alt="" />
                        <img className="image-project1" src={iconMobileOff} alt="" />
                        <img src={iconWebOff} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="right-cases-one">
                <div className="img-projeto-case"></div>
                <div className="rectangle1-cases-background">
                  <img className="img-projeto1" src={imgProjeto1} alt="" />
                  <img className='rectangle1-case' src={rectanguleOne} alt="" />
                </div>
              </div>
            </div>
            
            <div className="container-cases-two">
              <div className="left-cases-two">
                <div className="img-projeto-case"></div>
                <div className="rectangle2-cases-background">
                  <img className="img-projeto2" src={rectanguleOne} alt="" />
                  <img className="img2-projeto2" src={imgProjeto2} alt="" />
                </div>
              </div>
              <div className="right-cases-two">
                <div id="textsCase2">
                  <div className="texts-case-two"  >
                    <p className="text1-cases-two">JOBPASS</p>
                    <p className="text2-cases-two"></p>
                    <p className="text3-cases-two"  onClick={() => redirectTo('/cases/jobpass')}>See the entire project {'>'} </p>
                    <div>
                      <div className="title-icons">
                        <img className="line" src={Line2} alt="" />
                        <p className="text-tile-icons">Plataforms</p>
                        <img className="line" src={Line3} alt="" />
                      </div>
                      <div className="icons-project2">
                        <img src={iconDesktopOff} alt="" />
                        <img className="image-project2" src={iconAndroidOn} alt="" />
                        <img src={iconWebOn} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-cases-three">
              <div className="left-cases-one" >
                <div id="textsCase3" >
                  <div className="texts-case-one">
                    <p className="text1-cases-one">MEU DIMDIM</p>
                    <p className="text2-cases-one"></p>
                    <p className="text3-cases-one" onClick={() => redirectTo('/cases/meudimdim')}>See the entire project {'>'} </p>
                    <div >
                      <div className="title-icons">
                        <img className="line" src={Line2} alt="" />
                        <p className="text-tile-icons">Plataforms</p>
                        <img className="line" src={Line3} alt="" />
                      </div>
                      <div className="icons-project1">
                        <img src={iconDesktopOff} alt="" />
                        <img className="image-project1" src={iconAndroidOn} alt="" />
                        <img src={iconWebOff} alt="" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="right-cases-one">
                <div className="img-projeto-case"></div>
                <div className="rectangle1-cases-background">
                  <img className="img-projeto1" src={imgProjeto3} alt="" />
                  <img className='rectangle1-case' src={rectanguleOne} alt="" />
                </div>
              </div>
            </div>

            <div className="container-cases-two">
              <div className="left-cases-two">
                <div className="img-projeto-case"></div>
                <div className="rectangle2-cases-background">
                  <img className="img-projeto2" src={rectanguleOne} alt="" />
                  <img className="img4-projeto2" src={imgProjeto4} alt="" />
                </div>
              </div>
              <div className="right-cases-two">
                <div id="textsCase2">
                  <div className="texts-case-two"  >
                    <p className="text1-cases-two">JOBPASS</p>
                    <p className="text2-cases-two"></p>
                    <p className="text3-cases-two"  onClick={() => redirectTo('/cases/jobpass')}>See the entire project {'>'} </p>
                    <div>
                      <div className="title-icons">
                        <img className="line" src={Line2} alt="" />
                        <p className="text-tile-icons">Plataforms</p>
                        <img className="line" src={Line3} alt="" />
                      </div>
                      <div className="icons-project2">
                        <img src={iconDesktopOff} alt="" />
                        <img className="image-project2" src={iconAndroidOn} alt="" />
                        <img src={iconWebOn} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <MobileCases>
              <div className="main-card1-mobile">
                <div className="background-card-mobile-case"></div>
                <div className="card-mobile-cases">
                  <img src={imgCaseMobile} alt="" />
                  <p className="title-case-mobile">CARTESI</p>
                  {/* <p className="subtitle-case-mobile">Descrição curta sobre o projeto</p> */}
                  <p className="link-case-mobile" onClick={() => redirectTo('/cases/cartesi')}>See the entire project {'>'}</p>
                </div>
              </div>
              <div className="main-card2-mobile">
              <div className="background2-card-mobile-case"></div>
                <div className="card-mobile-cases">
                  <img src={imgCaseMobile1} alt="" />
                  <p className="title-case-mobile">JOBPASS</p>
                  {/* <p className="subtitle-case-mobile">Descrição curta sobre o projeto</p> */}
                  <p className="link-case-mobile" onClick={() => redirectTo('/cases/jobpass')}>See the entire project {'>'}</p>
                </div>
              </div>
              <div className="main-card3-mobile">
                <div className="background-card-mobile-case"></div>
                <div className="card-mobile-cases">
                  <img className="redimensionar" src={imgCaseMobile2} alt="" />
                  <p className="title-case-mobile">MEU DIMDIM</p>
                  {/* <p className="subtitle-case-mobile">Descrição curta sobre o projeto</p> */}
                  <p className="link-case-mobile" onClick={() => redirectTo('/cases/meudimdim')}>See the entire project {'>'}</p>
                </div>
              </div>
              <div className="main-card2-mobile">
              <div className="background2-card-mobile-case"></div>
                <div className="card-mobile-cases">
                  <img className="repense_config" src={imgCaseMobile3} alt="" />
                  <p className="title-case-mobile">REPENSE</p>
                  {/* <p className="subtitle-case-mobile">Descrição curta sobre o projeto</p> */}
                  <p className="link-case-mobile" onClick={() => redirectTo('/cases/repense')}>See the entire project {'>'}</p>
                </div>
              </div>
            </MobileCases>
            <CasesOne>
              {/* <div className="container-carousel-six">
                <div className="div-carousel-six">
                  <CarouselSix />
                </div>
              </div> */}
            </CasesOne>
          </div>
        </section>
      </MainCases>
      <CallActionContact />
      <Mouse />
    </>
  );
}

export default Cases;