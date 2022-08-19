import React from 'react';
import { useTranslation } from "react-i18next";

import { MainIntroduction } from "./styles";
import MoonImg from '../../images/process-moon.svg';
import satelliteServices from "../../images/satelite.svg";
import { Link } from "react-router-dom";

function IntroductionServicesMobile({ service }) {
  const { t } = useTranslation();
  return (
    <MainIntroduction>
      <Link className="back-services-mobile" to="/services">{'<'} Back</Link>
      <div className="service-path">
        <Link className="link-services" to="/">Home</Link>
        <p className="separator"><b>/</b></p>
        <Link className="link-services" to="/services">Services</Link>
        <p><b>{ service }</b></p>
      </div>
      <div className="container-text-services-mobile">
        <img className="satellite-mobile-services" src={satelliteServices} alt="" />
        <p className="title-services-mobile">{t("text1-services")}</p>
        <p className="text-services-mobile">{t("text2-services")}</p>
        <img className="moon-img-services" src={MoonImg} alt="" />
      </div>
    </MainIntroduction>
  );
}

export default IntroductionServicesMobile