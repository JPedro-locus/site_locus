import React from "react";
import {
  MainCartesi,
  ContainerOne,
  ContainerTwo,
  ContainerThree,
  ContainerFour
}
  from "./styles";
import block from "../../images/block.svg";
import { Link } from "react-router-dom";
import logoCartesi from "../../images/icone-cartesi.svg";
import desktop from "../../images/desktop-cartesi.svg";
import img1Cartesi from "../../images/laptop-cartesi.svg";

import img1Container3 from "../../images/img1-container3.svg";
import img2Container3 from "../../images/img2-container3.svg";
import backendCartesi from "../../images/backend-cartesi.svg";

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
              <p><b>Cartesi</b></p>
            </div>
            <img src={logoCartesi} alt="" />
            <h2>CARTESI</h2>
            <p className="text-introduction-cartesi">Locus Custom Software is with Cartesi, a organization which offers the first Blockchain operational system focused in DApps development using a verifiable distributed computation system, supported by Blockchain technology, with great scalability and security capacities.</p>
            <div className="cartesi-technologies">
              <div className="technology-1">
                <p>Platform:</p>
                <img src={desktop} alt="" />
              </div>
              <div className="technology-2">
                <p>Technology:</p>
                <p className="block-cartesi">Blockchain</p>
              </div>
            </div>
          </div>
          < div className="container-image">
            <img src={block} alt="" />
          </div>
        </div>
      </ContainerOne>
      <ContainerTwo>
        <div className="cartesi-technologies-mobile">
          <div className="technology-1">
            <p>Platform:</p>
            <img src={desktop} alt="" />
          </div>
          <div className="technology-2">
            <p>Technology:</p>
            <p className="block-cartesi">Blockchain</p>
          </div>
        </div>
        <div className="container-two-cartesi">
          <div className="texts-cartesi-container2">
            <p className="text1-cartesi-container2">About</p>
            <p className="text2-cartesi-container2">About the project</p>
            <p className="text3-cartesi-container2">Blockchain consists of a network of secure linked blocks that always carry a content along with a fingerprint. Our mission in this project was to participate in the launch of their first product on the market, where together with our squad, we presented insights about how this project could be improved, and how it could be more accessible to developers.</p>
          </div>
          <div>
            <img src={img1Cartesi} alt="" />
          </div>
        </div>
      </ContainerTwo>
      <ContainerThree>
        <div className="container-three-cartesi">
          <div className="left-box-cartesi-3">
            <h2>Offered service</h2>
            <img className="img1-container3" src={img1Container3} alt="" />
          </div>
          <div className="reight-box-cartesi-3">
          <img className="img2-container3" src={img2Container3} alt="" />
          </div>
        </div>
      </ContainerThree>
      <ContainerFour>
        <div className="container-four-cartesi">
          <h2>All technologies</h2>
          <h3>Backend</h3>
          <img src={backendCartesi} alt="" />
          <p>We make your expansion and capability of use possible, through the construction of DApps in some mainstream development areas, delivering the best possible result.</p>
        </div>
      </ContainerFour>
      <LikeThisProject />
    </MainCartesi>

  );
}

export default Cartesi;