import React from "react";
import {
  MainCartesi,
  ContainerOne,
  ContainerTwo,
  ContainerThree,
  ContainerFour
}
  from "./styles";
import capaRepense from "../../images/Capa-Repense.svg";
import { Link } from "react-router-dom";
import logoRepense from "../../images/icone_mobile_repense.svg";
import FrameRepense from "../../images/Frame_Repense.svg";
import img1Repense from "../../images/Repense-img-1.svg";

import mobile from "../../images/desktop-job.svg";
import web from "../../images/web-job.svg";
import Mobile from "../../images/plataformas_mobiles.svg";
import django from "../../images/Django_logo.svg";
import backJob from "../../images/Backend_Repense.svg";
import frontJob from "../../images/Frontend_Repense.svg";
import backJobMobile from "../../images/back_repense_mobile.svg";
import frontJobMobile from "../../images/front_repense_mobile.svg";


import img1Container3 from "../../images/Digital_Product.svg";
import img2Container3 from "../../images/Repense-img-2.svg";
import img3Container3 from "../../images/double_screen_mobile_repense.svg";
import img4Container3 from "../../images/servico-mobile.svg";


import LikeThisProject from "../../../Components/likeThisProject";

const Cartesi = () => {
  return (
    <MainCartesi>
      <ContainerOne>
        <div className="container-one-cartesi">
          <div className="texts-cartesi">
            <div className="rail-cartesi">
              <Link className="link-cartesi" to="/">Home</Link>
              <p className="separator"><b>/</b></p>
              <Link className="link-cartesi" to="/cases">Cases</Link>
              <p className="separator"><b>/</b></p>
              <p><b>Repense</b></p>
            </div>
            <img src={logoRepense} alt="" />
            <h2>REPENSE</h2>
            <p className="text-introduction-cartesi">In order to innovate and strengthen ties with its customers, Repense in partnership with Locus Custom Software, developed an application, with solutions tailored to your business.</p>
            <div className="cartesi-technologies">
              <div className="technology-1">
                <p>Platform:</p>
                <img src={mobile} alt="" />
                <img className="tec-job"  src={web} alt="" />
              </div>
              <div className="technology-2">
                <p>Technology:</p>
                <img src={django} alt="" />
              </div>
            </div>
          </div>
          < div className="container-image">
            <img src={capaRepense} alt="" />
          </div>
        </div>
      </ContainerOne>
      <ContainerTwo>
        <div className="cartesi-technologies-mobile">
          <img src={Mobile} alt="" />
        </div>
        <div className="container-two-cartesi">
          <div className="texts-cartesi-container2">
            <p className="text1-cartesi-container2">About</p>
            <p className="text2-cartesi-container2">About the project</p>
            <p className="text3-cartesi-container2">The development of ways to optimize the application was executed by the design team, which carried out the entire process of screen detailing. Since the conception, besides the technological validation of the idea, integrations and definitions of the technology scope were made. Thus, an MVP was developed to validate the app idea in the market.</p>
          </div>
          <div>
            <div className="img-config">
              <img src={img1Repense} alt="" />
            </div>
          </div>
        </div>
      </ContainerTwo>
      <ContainerThree>
        <div className="container-three-cartesi">
          <div className="left-box-cartesi-3">
            <h2 className="config_02">Offered service</h2>
            <img className="img1-container3" src={img1Container3} alt="" />
            <img className="img1-container3-mobile" src={img4Container3} alt="" />
          </div>
          <div className="reight-box-cartesi-3">
            <img className="img2-container3"src={img2Container3} alt="" />
            <img className="img2-container3-mobile"src={img3Container3} alt="" />
          </div>
        </div>
      </ContainerThree>
      <ContainerFour>
        <div className="container-four-repense">
          <h2>All technologies</h2>
          <div>
            <img className="trocaContexto" src={backJob} alt="" />
            <img className="container-four-mobile" src={backJobMobile} alt="" />
            <img className="container-four-mobile-2" src={frontJobMobile} alt="" />
          </div>
          <img className="trocaContexto" src={frontJob} alt="" />
          
          <p>We developed the app, aiming for more comfort and agility for your users to have a great digital experience.</p>
        
        </div>
      </ContainerFour>
      <LikeThisProject />
    </MainCartesi>

  );
}

export default Cartesi;