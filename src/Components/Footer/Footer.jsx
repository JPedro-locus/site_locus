import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Toast from "./Toast/Toast";
import {
  MainFooter,
  FooterOne,
  FooterTwo,
  FooterThree,
  MainFooterMobile,
  FooterOneMobile,
  FooterTwoMobile,
  FooterThreeMobile,
  FooterFourMobile
}
  from "./Footer.styles"

import logoFooter from "./images/Logo-Horizontal.svg";
import imageMap from "./images/mapa.svg";
import imageMapMobile from "./images/mapa-mobile.svg";
import copyIcon from "./images/copy-icon.svg";
import instagram from "./images/Instagram.svg";
import facebook from "./images/Facebook.svg";
import linkedin from "./images/Linkedin.svg";
import youtube from "./images/YouTube.svg";
import twitter from "./images/Twitter.svg";
import FormularioEN from "../Header/FormularioEn";
import FormularioPT from "../Header/FormularioPt";
//import {i18n} from "../../i18n";
import { LanguageSwitcher } from "../LanguageSwitcher";


const Footer = () => {
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

<<<<<<< HEAD
  const { t } = useTranslation();
=======
  const { t, i18n } = useTranslation();
>>>>>>> main
  return (
    <>
      <MainFooter>
        <FooterOne>
          <div>
            <img className="imagem-main" src={logoFooter} alt="" />
          </div>
        </FooterOne>
        <FooterTwo>
          <div className="footer-two-part1">
            <div className="image-map-part1">
              <img src={imageMap} alt="" />
            </div>
            <div className="text-company-addresses">
<<<<<<< HEAD
              <p className="title-main-office">MAIN OFFICE</p>
              <p>Pernambuco - BRAZIL</p>
              <p className="title-internationals-offices">We are also at</p>
              <p>Lisboa - PORTUGAL</p>
=======
              <p className="title-main-office">MAIN OFFICE - South America</p>
              <p>Recife, Pernambuco - BRAZIL</p>
              <p className="title-internationals-offices">MAIN OFFICE - Europe</p>
              <p>Lisbon - PORTUGAL</p>
>>>>>>> main
            </div>
          </div>
          <div className="footer-two-part2">
            {isToast ? <Toast toastText="E-mail copied!" /> : null}
            <p className="title-contact-us">CONTACT US</p>
<<<<<<< HEAD
            <p className="contact-email" onClick={() => copyEmail('contact@locus.software')}>contact@locus.software <img onClick={() => copyEmail('contact@locus.software')} src={copyIcon} /></p>
=======
            <p className="contact-email" onClick={() => copyEmail('contact@locus.software')}>contact@locus.software <img className="adjustCopyBox" onClick={() => copyEmail('contact@locus.software')} src={copyIcon} /></p>
            <p>+55 81 9 9493-9493</p>          
>>>>>>> main
          </div>
          
          <div className="news-letter-block">
            {i18n.language === 'en' ? <FormularioEN/>  : <FormularioPT/>}
          </div>

          <ul className="footer-two-part3">
            <li className="footer-li-menu"> <Link className="link-li1-menu" to="/about">About us</Link></li>
            <li className="footer-li-menu"> <Link className="link-li2-menu" to="/services">Services</Link></li>
            {/* <li className="footer-li-menu"> <Link className="link-li3-menu" to="/cases">Cases</Link></li> */}
            <li className="footer-li-menu"> <Link className="link-li4-menu" to="/process">Process</Link></li>
            <li className="footer-li-menu"> <Link className="link-li4-menu" to="/events">Events</Link></li>
            <li className="footer-li-menu"> <Link className="link-li5-menu" to="/careers">Careers</Link></li>
          </ul>

          <div className="main-footer-three">
            <div className="div-footer-three">
              <div className="social-media">
                <a target="_blank" href="https://web.facebook.com/locus.software/">
                  <img src={facebook} alt="" />
                </a>
                <a target="_blank" href="https://twitter.com/LocusSoftware">
                  <img src={twitter} alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/locus.software/">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://www.linkedin.com/company/locus-custom-software/mycompany/">
                  <img src={linkedin} alt="" />
                </a>
<<<<<<< HEAD
                <a target="_blank" href="">
                  {/* <img src={youtube} alt="" /> */}
=======
                <a target="_blank" href="https://www.youtube.com/channel/UCpelAXyuzKryB-1U65JO2Mg">
                   <img src={youtube} alt="" /> 
>>>>>>> main
                </a>
              </div>
              {/* <div className="terms">Termos e políticas</div> */}
            </div>
          </div>
        </FooterTwo>
        
      </MainFooter>
      <MainFooterMobile>
        <FooterOneMobile>
          <div>
            <img src={logoFooter} alt="" />
          </div>
        </FooterOneMobile>
        <FooterTwoMobile>
          <div className="mobile-footer-menu">
<<<<<<< HEAD
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px" }} to={`/about`}><p>{t("AboutUs")}</p></Link>
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px" }} to={`/services`}><p>{t("Services")}</p></Link>
            {/* <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px" }} to={`/cases`}><p>{t("Cases")}</p></Link> */}
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px" }} to={`/process`}><p>Process</p></Link>
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px" }} to={`/events`}><p>Events</p></Link>
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px" }} to={`/careers`}><p>Careers</p></Link>
=======
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px", fontWeight: "600" }} to={`/about`}><p>{t("AboutUs")}</p></Link>
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px", fontWeight: "600" }} to={`/services`}><p>{t("Services")}</p></Link>
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px",fontWeight: "600" }} to={`/cases`}><p>{t("Cases")}</p></Link> 
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px", fontWeight: "600" }} to={`/process`}><p>Process</p></Link>
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px", fontWeight: "600" }} to={`/events`}><p>Events</p></Link>
            <Link style={{ textDecoration: "none", color: "#616861", fontSize: "16px", fontWeight: "600" }} to={`/careers`}><p>Careers</p></Link>
>>>>>>> main
          </div>
        </FooterTwoMobile>
        <FooterThreeMobile>
          <div className="footer-two-part1">
            <div className="text-company-addresses">
              <p className="title-main-office">MAIN OFFICE</p>
              <p>Pernambuco-BRAZIL</p>
              <p className="title-internationals-offices">We are also at</p>
              <p>Lisboa - PORTUGAL</p>
              <div>
                {isToast ? <Toast toastText="E-mail copied!" /> : null}
                <p className="title-contact-us">CONTACT US</p>
                <p className="contact-email" onClick={() => copyEmail('contact@locus.software')}>contact@locus.software <img onClick={() => copyEmail('contact@locus.software')} src={copyIcon} /></p>
              </div>
<<<<<<< HEAD
              {/* <p>+55 81 0 0000 0000</p> */}
=======
              <p>+55 81 9 9493-9493</p>
>>>>>>> main
            </div>
            <div className="image-map-part1">
              <img src={imageMapMobile} alt="" />
            </div>
          </div>
        </FooterThreeMobile>
        <FooterFourMobile>
          <div className="main-footer-three">
            <div className="div-footer-three">
              <div className="social-media">
                <a target="_blank" href="https://web.facebook.com/locus.software/">
                  <img src={facebook} alt="" />
                </a>
                <a target="_blank" href="https://twitter.com/LocusSoftware">
                  <img src={twitter} alt="" />
                </a>
                <a target="_blank" href="https://www.instagram.com/locus.software/">
                  <img src={instagram} alt="" />
                </a>
                <a href="https://www.linkedin.com/company/locus-custom-software/mycompany/">
                  <img src={linkedin} alt="" />
                </a>
                {/* <a target="_blank" href="">
                  <img src={youtube} alt="" />
                </a> */}
              </div>
              {/* <div className="terms">Termos e políticas</div> */}
            </div>
          </div>
        </FooterFourMobile>

      </MainFooterMobile>
    </>
  );
}

export default Footer;