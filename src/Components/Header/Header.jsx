<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import { useState, useEffect, Component } from "react";
import {animateScroll as scroll} from "react-scroll";
>>>>>>> main
import LogoComponentSvg from "./LogoComponentSvg";
import { Link } from "react-router-dom";
import { HeaderMain, DivMobile, SideBar } from "./Header.styles";
import { useNavigate } from 'react-router-dom';
import { LanguageSwitcher } from "../LanguageSwitcher";
import { useTranslation,I18 } from "react-i18next";
import { FaArrowRight } from 'react-icons/fa';
import facebookLogo from "../../Assets/facebook-logo.svg";
import instagramLogo from "../../Assets/instagram-logo.svg";
import linkedinLogo from "../../Assets/linkedin-logo.svg";
import twitterLogo from "../../Assets/twitter-logo.svg";
import youtubeLogo from "../../Assets/youtube-logo.svg";
import Toast from "../../Components/Footer/Toast/Toast";
import copyIcon from "../../Assets/copy-icon.svg";
<<<<<<< HEAD
=======
import newsletter from "../../Assets/newsLetter.svg";
import lineHeader from "../../Pages/images/line-menu.svg";
import { useWindowSize } from "../../hooks/useResize";
import FormularioEN from "./FormularioEn";
>>>>>>> main


const Navbar = () => {
  const [isToast, setIsToast] = useState(false);
  useEffect(() => {
  }, [isToast])

  const copyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setIsToast(true);

    setTimeout(() => {
      setIsToast(false);
    }, 2500)
  }
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [mobile, setMobile] = useState(false);
  const window = useWindowSize();

  const [textClose, setTextClose] = useState("text-close-off")
  const [textOpen, setTextOpen] = useState("text-open-on")

  const [frameAni, setFrameAni] = useState("frame")
  const [stickOne, setStickOne] = useState("stick1")
  const [stickTwo, setStickTwo] = useState("stick2")
  const [stickThree, setStickThree] = useState("stick3");
  // Header Underline state
  const [aboutClass, setAboutClass] = useState(false);
  const [servicesClass, setServicesClass] = useState(false);
  const [careersClass, setCareersClass] = useState(false);
  const [worksClass, setWorksClass] = useState(false);

  //Modal home
  const [openModal, setOpenModal] = useState(false);
  
  const handleAnimate = () => {
    setMobile(!mobile)
    if (mobile === false) {
      setStickOne("stick1animate")
      setStickTwo("stick2animate")
      setStickThree("stick3animate")
      setTextOpen("text-open-off")
      setTextClose("text-close-on")
      setOpenModal(true);
    } else if (mobile === true) {
      setStickOne("stick1")
      setStickTwo("stick2")
      setStickThree("stick3")
      setTextClose("text-open-off")
      setTextOpen("text-close-on")
      setOpenModal(false);
    }
  }

  const redirectTo = (path) => {
    navigate(path);
    setMobile(!mobile)
    setStickOne("stick1")
    setStickTwo("stick2")
    setStickThree("stick3")
    setFrameAni("frame")
    setTextClose("text-open-off")
    setTextOpen("text-close-on")
    setOpenModal(false);
  }

  // Functions who handle the state of underline classes
  const handleMain = () => {
    setAboutClass(false)
    setServicesClass(false)
    setCareersClass(false)
    setWorksClass(false)
    setOpenModal(false);
    setStickOne("stick1")
    setStickTwo("stick2")
    setStickThree("stick3")
    setFrameAni("frame")
    setTextClose("text-open-off")
    setTextOpen("text-close-on")
  }

  const scrollToEnd = () => {
    scroll.scrollToBottom();
  }
  
  return (
    <HeaderMain>
      <div className="logo-header">
        <Link to={`/`} onClick={handleMain}><LogoComponentSvg /></Link>
      </div> 
      <div className="menu-language">
<<<<<<< HEAD
        {/* <LanguageSwitcher/> */}
=======
        { <LanguageSwitcher/> }
>>>>>>> main
        <DivMobile>
          <img className="news-letter" src={newsletter} alt="" />
          <button className="buttonForFooter" onClick={() => scrollToEnd()}></button>
          <div onClick={() => handleAnimate()}>
            <p className={textOpen}>Menu</p>
            <p className={textClose}>Close</p>
          </div>

          <div className="hamburguer-menu" onClick={() => handleAnimate()}>
            <div className={stickOne}></div>
            <div className={stickTwo}></div>
            <div className={stickThree}></div>
          </div>
        </DivMobile>
      </div>
      {openModal ? <SideBar>
        <div className="container">
          <img className="img-line" src={lineHeader} alt="" />
          <div className="box-1">
            <div className="wrap-box-1">
              <h1 onClick={() => redirectTo('/about')}>{t("header-about-us")}</h1>
              <h1 onClick={() => redirectTo('/services')}>{t("header-services")}</h1>
              {/* <h1 onClick={() => redirectTo('/cases')}>{t("header-cases")}</h1> */}
              <h1 onClick={() => redirectTo('process')}>{t("header-process")}</h1>
              <h1 onClick={() => redirectTo('/events')}>{t("header-events")}</h1>
              <h1 onClick={() => redirectTo('/careers')}>{t("header-careers")}</h1>
              <div className="wrap-button-box-1">
                <button onClick={() => redirectTo('contact')}>
                  <p>{t("header-button")}</p>
                  <div className="arrow"><FaArrowRight /></div>
                </button>
              </div>
            </div>
          </div>
          <div className="box-2">
            <div className="wrap-box-2">
              <h1>{t("header-talk-to-us")}</h1>
              <div className="container-email-header">
                {isToast ? <Toast toastText="E-mail copied!" /> : null}
                <p onClick={() => copyEmail('contact@locus.software')}>contact@locus.software <img onClick={() => copyEmail('contact@locus.software')} src={copyIcon} /></p>
              </div>
              {/* <h3>+55 81 0 0000-0000</h3> */}
              <div className="social-icons">
                <a target="_blank" href="https://web.facebook.com/locus.software/" rel="noreferrer"><img src={facebookLogo} /></a>
                <a target="_blank" href="https://twitter.com/LocusSoftware" rel="noreferrer"><img src={twitterLogo} /></a>
                <a target="_blank" href="https://www.instagram.com/locus.software/" rel="noreferrer"><img src={instagramLogo} /></a>
                <a target="_blank" href="https://www.linkedin.com/company/locus-custom-software/mycompany/" rel="noreferrer"><img src={linkedinLogo} /></a>
                {/* <a target="_blank" href=""><img src={youtubeLogo} /></a> */}
              </div>
              {/* <h4>{t("header-terms")}</h4> */}
            </div>
          </div>
        </div>
      </SideBar> : ""}
    </HeaderMain >
  );
}

export default Navbar;