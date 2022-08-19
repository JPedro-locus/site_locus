import React from "react";
import {
  Mainjobpass,
  ContainerOne,
  ContainerTwo,
  ContainerThree,
  ContainerFourJob
}
  from "./styles";
import block from "../../images/block.svg";
import { Link } from "react-router-dom";
import logojobpass from "../../images/icone-jobpass.svg";
import img1jobpass from "../../images/capa-jobpass.svg";

import mobile from "../../images/desktop-job.svg";
import web from "../../images/web-job.svg";

import img1Container3 from "../../images/services-job.svg";
import img2Container3 from "../../images/Jobpass-telas.svg";

import frontJob from "../../images/front-job.svg";
import backJob from "../../images/back-job.svg";
import Python from "../../images/python.svg";
import Java from "../../images/java.svg";


import backJobpass from "../../images/Jobpass-telas.svg";

import LikeThisProject from "../../../Components/likeThisProject";

const jobpass = () => {
  return (
    <Mainjobpass>
      <ContainerOne>
        <div className="container-one-jobpass">
          <div className="texts-jobpass">
            <div className="rail-jobpass">
              <Link className="link-jobpass" to="/">Home</Link>
              <p className="separator"><b>/</b></p>
              <Link className="link-jobpass" to="/cases">Cases</Link>
              <p className="separator"><b>/</b></p>
              <p><b>jobpass</b></p>
            </div>
            <img src={logojobpass} alt="" />
            <h2>jobpass</h2>
            <p className="text-introduction-jobpass">We entered a project with Jobpass, which is a software company. With the Jobpass application, companies can manage the flow of people in their office, allowing employees to book workstations, meeting rooms, parking spaces and other spaces. So employees far from the office can be connected to various coworking spaces and coffee shops. An Airbnb of the work office.</p>
            <div className="jobpass-technologies">
              <div className="technology-1">
                <p>Platform:</p>
                <img src={mobile} alt="" />
                <img className="tec-job"  src={web} alt="" />
              </div>
              <div className="technology-2">
                <p>Technology:</p>
                <img src={Python} alt="" />
                <img className="tec-job" src={Java} alt="" />
              </div>
            </div>
          </div>
          < div className="container-image">
            <img src={img1jobpass} alt="" />
          </div>
        </div>
      </ContainerOne>
      <ContainerTwo>
        <div className="jobpass-technologies-mobile">
       
        </div>
        <div className="container-two-jobpass">
          <div className="texts-jobpass-container2">
            <p className="text1-jobpass-container2">About</p>
            <p className="text2-jobpass-container2">About the project</p>
            <p className="text3-jobpass-container2">We at Locus custom Software, came in with the mission to make the Super App Jobpass Multitenant where your facility is able to serve multiple clients in a single facility.</p>
          </div>

        </div>
      </ContainerTwo>
      <ContainerThree>
        <div className="container-three-jobpass">
          <div className="left-box-jobpass-3">
            <h2>Offered service</h2>
            <img className="img1-container3" src={img1Container3} alt="" />
          </div>
          <div>
            <img className="img-container2" src={img2Container3} alt="" />
          </div>
        </div>
      </ContainerThree>
      <ContainerFourJob>
        <div className="container-four-jobpass">
          <h2>All technologies</h2>
          <div>
            <img src={backJob} alt="" />
          </div>
          <img src={frontJob} alt="" />
          <p>As a benefit, we brought advances and error handling through the application. Providing improvements in the security of both the mobile application and the part that runs in the cloud.</p>
        </div>
      </ContainerFourJob>
      <LikeThisProject />
    </Mainjobpass>

  );
}

export default jobpass;