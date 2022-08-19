import React, { useState } from "react";
import {
  Mainmeudimdim,
  ContainerOne,
  ContainerTwo,
  ContainerThree,
  ContainerFourJob
}
from "./styles";
import { Link } from "react-router-dom";
import logoMeuDimDim from "../../images/icone_meu_dimdim.svg";
import servico from "../../images/servicoMeuDimDim.svg";

import mobile from "../../images/mobileMeudimdim.svg";

import img1Container1 from "../../images/capa.svg";
import img1Container3 from "../../images/meuDimDim_Photo3.svg";
import animacaoMeuDimDim from "../../images/animacaoMeuDimDim.svg";
import telaMaisEscuraMeuDimDim from "../../images/telaEscuraMeuDimDim.svg";
import animacaoImagemFinal from "../../images/ultimaImagemAnimacao.svg";

import frontJob from "../../images/front_meudimdim.svg";
import Flutter from "../../images/flutter-logo.svg";
import frontMDDMobile from "../../images/Flutter-mobile.svg"

import LikeThisProject from "../../../Components/likeThisProject";

const Meudimdim = () => {
  const [bottonAnimation, setBottonAnimation] = useState(false);
  const [ultimaAnimacaoMeuDimDim, setLastAnimation] = useState("ultimaAnimacaoMeuDimDim");
  const changeStyle = () => {
    setBottonAnimation(true);
    if (bottonAnimation === true) {
      setLastAnimation("ultimaAnimacaoMeuDimDim")
    }
    if (bottonAnimation === false){
      setLastAnimation("fimDaAnimacao")
      setBottonAnimation(false)
    }
  };

  window.addEventListener("changeStyle",changeStyle);

  return (
    <Mainmeudimdim>
      <ContainerOne>
        <div className="container-one-meudimdim">
          <div className="texts-meudimdim">
            <div className="rail-meudimdim">
              <Link className="link-meudimdim" to="/">Home</Link>
              <p className="separator"><b>/</b></p>
              <Link className="link-meudimdim" to="/cases">Cases</Link>
              <p className="separator"><b>/</b></p>
              <p className="actualPage"><b>Meu Dimdim</b></p>
            </div>
            <img className ="logo" src={logoMeuDimDim} alt="" />
            <h2>MEU DIMDIM</h2>
            <p className="text-introduction-meudimdim"> Cashback is a service widely used in consumer loyalty strategies where in practice, it works like this: the customer buys a certain product with your company and part of that money returns to the consumer, as a kind of reward for the purchase. Making purchases and receiving a part of it back seems very interesting, and some of its benefits are that you can use this money in any way you want, paying bills, investing, or making other purchases.</p>
            <div className="meudimdim-technologies">
              <div className="technology-1">
                <p>Platform:</p>
                <img src={mobile} alt="" />
              </div>
              <div className="technology-2">
                <p>Technology:</p>
                <img src={Flutter} alt="" />
              </div>
            </div>
          </div>
          < div className="container-image">
            <img src={img1Container1} alt="" />
          </div>
        </div>
      </ContainerOne>
      <ContainerTwo>
        <div className="meudimdim-technologies-mobile">
          <div className="technology-1">
            <p>Platform:</p>
            <img src={mobile} alt="" />
          </div>
          <div className="technology-2">
            <p>Technology:</p>
            <img src={Flutter} alt="" />
          </div>
        </div>
        <div className="container-two-meudimdim">
          <div className="texts-meudimdim-container2">
            <p className="text1-meudimdim-container2">About</p>
            <p className="text2-meudimdim-container2">About the project</p>
            <p className="text3-meudimdim-container2">Locus started an immersion study for the Meu Dim Dim project, which is a cashback and discount platform that allows the customer to refund part of the money used in online purchases.</p>
          </div>
        </div>
      </ContainerTwo>
      <ContainerThree>
      <div className="container-three-meudimdim">
          <div className="left-box-meudimdim-3">
            <h2>Offered service</h2>
            <img src={servico} alt=""/>
          </div>
          <div className="animationMeuDimDim">
            <img className="img-container2" src={img1Container3} alt="" />
            <img className="telaEscura" src={telaMaisEscuraMeuDimDim} alt=""/>
            <img className = "containerDaAnimacaoMeuDimDim" src={animacaoMeuDimDim} alt="" />
            <button className="animacaoDoBotao" onClick={() => changeStyle()}></button> 
            <img className={ultimaAnimacaoMeuDimDim} src={animacaoImagemFinal} alt=""/>
          </div>
        </div>
      </ContainerThree>
      <ContainerFourJob>
        <div className="container-four-meudimdim">
          <h2 className="ajusteParaMobile">All technologies</h2>
          <img className="trocaContexto" src={frontJob} alt="" />
          <img className="trocaContexto2" src={frontMDDMobile} alt="imagemMobile"/>
          <p>In this project we aim to understand your current situation, offering the best solution for your needs. Through this, we apply improvements in its mobile version using Flutter technology, enabling its users to improve its accessibility and usability.</p>
        </div>
      </ContainerFourJob>
      <LikeThisProject />
    </Mainmeudimdim>

  );
}

export default Meudimdim;