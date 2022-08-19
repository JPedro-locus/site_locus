import styled from "styled-components";
// import url('https://fonts.googleapis.com/css2?family=Suez+One&display=swap');

export const MainHome = styled.section`
 
  @media only screen and (max-width:900px){
    display: none!important;
  }
  .main-home{
    display: flex;
    width: 100%;
    height:calc(100vh - 98px);
    color: #232323;
    background: rgb(0, 255, 172);
    background: linear-gradient(90deg, rgba(0, 255, 172, 0.5) 0%, rgba(88, 203, 251, 0.5) 100%);
    justify-content: center;
    overflow: hidden;
  }

  .text-main-home {
    color: #232323 !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 1000px;
    color:#232323;
  }

  .animation-text {
    font-family: 'Suez One', serif;
    font-size: 70px;
    position: relative;
  }

  .text-one {
    margin-right: 2px;
    width: 300px;
  }

  .animated-word {
    position: absolute;
    top: 163px;
    left: 204px;
    height: 25px;
  }

  .background-animated-word {
    position: absolute;
    background-color: #FFFFC8;
    height: 43px;
    width: 447px;
    top: 187px;
    left: 200px;
  }

  .text-static-main {
    font-size: 48px;
    color: #616861;
    font-weight: 500;
    width: 332px;
    margin-top: -100px;
  }

  .image-shark-main {
    position: absolute;
    left: 500px;
    top: 40px;
    z-index: 2;
    animation: animaShark 6s forwards infinite;
  }

  @keyframes animaShark {
    0% {
      top: 40px;
    }

    50% {
      top: 50px;
    }

    100% {
      top: 40px;
    }
  }

  .satelite-home{
    position:absolute;
    left:800px;
    width:500px;
    z-index: 1;
    animation: animaSatelite 6s forwards infinite;
    @media only screen and (min-width:900px) and (max-width:1600px){
      width:400px;
      left:600px;
    }
  }
  
  @keyframes animaSatelite {
    0% {
      top: -130px;
    }

    50% {
      top: -100px;
    }

    100% {
      top: -130px;
    }
  }

  .cloud-left {
    position: absolute;
    left: 360px;
    top: 300px;
    animation: animaCloudLeft 3s forwards infinite;
  }

  @keyframes animaCloudLeft {
    0% {
      left: 320px;
    }

    50% {
      left: 330px;
    }

    100% {
      left: 320px;
    }
  }

  .cloud-right {
    position: absolute;
    left: 750px;
    top: 220px;
    animation: animaCloudRight 3s forwards infinite;
  }

  @keyframes animaCloudRight {
    0% {
      left: 750px;
    }

    50% {
      left: 760px;
    }

    100% {
      left: 750px;
    }
  }

  .image-hole {
    position: absolute;
    left: 500px;
    top: 340px;
  }

  @media only screen and (min-width:900px) and (max-width:1600px) {

    .image-shark-main{
        width:400px;
        left:440px;
    }

    .image-hole{
      width: 420px;
      left: 500px;
      top: 320px;
    }

    .cloud-right{
      top:150px;
      width: 290px;
    }

    .cloud-left{
      top:290px;
      left: 350px;
      width: 240px;
    }

    .text-main-home{
      margin-left:40px;
    }

    @keyframes animaCloudLeft {
      0% {
        left: 380px;
      }

      50% {
        left: 390px;
      }

      100% {
        left: 380px;
      }
    }
  }

`;

export const AboutHome = styled.section`
  @media only screen and (max-width:900px){
    display:none;
  }
  .div-about-home-one {
    display: flex;
    justify-content: space-between;
    height: 770px;
    position: relative;
  }

  .rectangle-home{
    margin-top: 200px;
  }

  .map-home{
    position: relative;
    z-index: 1;
  }

  .map-home-position {
    position: absolute;
    top: 300px;
    left: 180px;
    animation: animaPosition 1.5s forwards;
    z-index: 1;
  }


  .map-home-position-static {
    position: absolute;
    top: 230px;
    left: 180px;
    z-index: 1;
  }

  .container-rectangle-home{
    height: 1800px;
    overflow: hidden;
  }

  @keyframes animaPosition {
    0% {
      top: 230px;
    }

    50% {
      top: 200px;
    }

    100% {
      top: 230px;
    }
  }

  .div-about-home-two {
    position: relative;
    width: 100%;
    overflow: hidden;

  }

  .wave-animation {
    display: block;
    animation: animaWave 10s forwards infinite;
  }

  @keyframes animaWave {
    0% {
      margin-left: -100px;
    }

    50% {
      margin-left: -1700px;
    }

    100% {
      margin-left: -100px;
    }
  }


  .text-about-home {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 25px;
    margin-top: 180px;
    text-align: left;
    max-width:775px;
    position: relative;
  }

  .title-about-home {
    font-size: 70px;
    font-family: 'Suez One', serif;
    width: max-content;
    margin-bottom: 0px;
    color: #232323;
  }

  .text1-about-home {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: #616861;
  }

  .button-about-home {
    text-align: left !important;
    color: #232323;
    font-weight: 700;
    cursor:pointer;
    width: max-content;
    margin-top:24px;
    height:28px;
  }

  .button-about-home:hover{
    font-size:20px;
    border-bottom:2px solid black;
    margin-top:19px;
  }

  @media only screen and (min-width:2000px) {

  @keyframes animaWave {
    0% {
      margin-left: -100px;
    }

    50% {
      margin-left: -700px;
    }

    100% {
      margin-left: -100px;
    }
  }
  }



  @media only screen and (min-width:1200px) and (max-width:1380px) {
    .rectangle-home {
      margin-left: -120px;
    }

  }
  @media only screen and (min-width:811px) and (max-width:1200px) {

    .rectangle-home {
      display: none;
    }

    .img-rectangle-home {
      width: 150%;
    }

    .title-about-home {
      width: 350px;
    }

    .text-about-home{
      max-width:450px;
    }
  }
`;

export const CasesHome = styled.section`
  .home-cases-main {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .div-cases-home-one {
    width: 100%;
    font-weight: 900;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index:1;

    .rec-slider-container {
      max-width: 1312px;
      margin:0 auto;
    }
  }

  .cases-texts {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    @media only screen and (max-width:1100px){
      width: 90%;
    }

    .title-cases-home {
      font-size: 48px;
      font-family: 'Suez One', serif;
      margin-bottom: 48px;
      color:#232323;
    }
  
    .button-cases-home {
      text-align: left !important;
      color: #232323;
      font-weight: 700;
      cursor:pointer;
      width: max-content;
      height:24px;

      &:hover {
        font-size:20px;
        border-bottom:2px solid black;
        margin-bottom:22px;
      }
    }
  }

  @media only screen and (min-width:1200px) and (max-width:1380px) {
    .div-cases-home-one {
      margin-top: 100px;
    }
  }

  @media only screen and (max-width:1315px) {
    .div-cases-home-one {
      width: 1000px;
    }
  }
`;

export const ServicesHome = styled.section`
  @media only screen and (max-width:900px){
    display:none;
  }
  .home-services-main{
    height:1200px;
    margin-top: -800px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    margin-bottom:109px;
    color:#232323;
  }

  .home-services-one{
    max-width: 1200px;
    width: 100%;
    z-index: 2;
  }
  .home-services-two{
    overflow: hidden;
    width: 100%;
    height: 970px;
    display: flex;
    flex-direction:column;
    align-items: center;
    text-transform:uppercase;
  }
  
  .title-home-services{
    font-size:70px;
    font-family: 'Suez One', serif;
    margin-bottom: 28px;
    color:#232323;
  }

  .text1-about-services {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: #616861;
    max-width: 775px;
  }

  .button-home-services{
    text-align: left !important;
    color: #232323;
    font-weight: 700;
    cursor:pointer;
    width: max-content;
    margin-top:47px;
  }
  .button-home-services:hover{
    font-size:20px;
    border-bottom:2px solid black;
    margin-bottom:10px;
  }

  .main-animation-services{
    width: 1312px!important;
    display: flex;
    align-items:flex-end;
    justify-content:space-around;
    @media only screen and (max-width:1200px){
      width: 900px!important;
      align-items:center;
      justify-content:center;
    }
  }


  .div-animation-services{
    display: flex;
    width: 300px;
    height:400px;
    flex-direction:column;
    align-items:center;
    justify-content:end;
    position: relative;
    font-size:24px;
    font-weight:800;
    text-align:center;
    cursor: pointer;
  }

  .text-animation-services{
      font-size:24px; 
      height:4px;
      white-space: nowrap;
      @media only screen and (max-width:1200px){
        font-size:18px;
      }
    }
  #cloud-home{
    margin-left:13px;
  }
  #staff-home{
    margin-left:-20px;
  }
  .div-animation-services:hover{

    .image-service1{
      transition: top 0.3s;
      top:100px;
    }
    .image-service2{
      transition: top 0.3s;
      top:100px;
    }
    .image-service3{
      transition: top 0.3s;
      top:150px;
    }
    .image-service4{
      transition: top 0.3s;
      top:105px;
    }
    .image-service5{
      transition: top 0.3s;
      top:100px;
    }
    .image-service6{
      transition: top 0.3s;
      top:150px;
    }
    .image-service7{
      transition: top 0.3s;
      top:130px;
    }
    .image-service8{
      transition: top 0.3s;
      top:155px;
    }

      p{
        font-size:28px;
        margin-bottom:20px;
        @media only screen and (max-width:1200px){
        font-size:18px;
      }
      }
  }

  .arrow-service{
    margin-top:10px;
    margin-bottom:10px;
  }
  #arrowOneServices{
    margin-left:15px;
  }
  .image-service1{
    position:absolute;
    top:118px;
  }
  .image-service2{
    position:absolute;
    top:120px;
  }
  .image-service3{
    position:absolute;
    top:162px;
  }
  .image-service4{
    position:absolute;
    top:117px;
  }
  .image-service5{
    position:absolute;
    top:117px;
  }
  .image-service6{
    position:absolute;
    top:170px;
  }
  .image-service7{
    position:absolute;
    top:145px;
  }
  .image-service8{
    position:absolute;
    top:175px;
  }
@media only screen and (min-width:811px) and (max-width:1320px) {
  .home-services-one{
    padding-left:80px;
    box-sizing: border-box;
  }
}
`

export const EventsCareersHome = styled.section`
  .home-events-careers {
    overflow: hidden;
    height: 2155px;
    background: rgb(246, 246, 239);
    background: linear-gradient(0deg, rgba(246, 246, 239, 0.35) 10%, rgba(242, 242, 97, 0.35) 25%, rgba(255, 131, 13, 0.35) 53%, white 82%);
    color:#232323;
    @media only screen and (max-width:1320px) {
      height: 2100px;
    }
  }

  .home-events-main {
    display: flex;
    flex-direction: column;
    align-items: center;
    height:850px;
    color:#232323;
  }

  .button-events-home{
    text-align: left !important;
    color: #232323;
    font-weight: 700;
    cursor:pointer;
    width: max-content;
    margin-bottom:24px;
    height:24px;
  }

  .button-events-home:hover{
    font-size:20px;
    border-bottom:2px solid black;
    margin-bottom:22px;
  }

  .title-event {
    font-size: 70px;
    font-family: 'Suez One', serif;
    margin-bottom: 48px;
    max-width: 1200px;
    width: 100%;
  }

  .text-event-home {
    width: 774px;
    font-size: 24px;
    color: #616861;
  }

  .home-event-one {
    align-items: center;
    max-width: 1200px;
    width: 100%;
  }

  .careers-home-one {
    display: flex;
    flex-direction:column;
    align-items:center;
  }

  .home-careers-main{
    margin-top:200px
  
  }

  .text-image-careers-home{
    width: 1100px;
    z-index:2;
  }

  .moon-home {
    margin-top: 200px;
    display: flex;
    justify-content: end;
    position: relative;
    z-index:1;
  }
  .static-moon-image{
    position: absolute;
    align-items: center;
    top:-260px;
    right: 0;
    width: 90%;

    @media only screen and (max-width:1320px) {
      top:-400px;
    }
  }

  .moon-image{
    position: absolute;
    animation: animaMoon 4s forwards;
    align-items: center;
    top:-260px;
    right: 0;
    width: 90%;

    @media only screen and (max-width:1320px) {
      top:-400px;
      animation: none;
    }
  }


  @keyframes animaMoon{
    0% {
      width: 90%;
      top:-260px;
      @media only screen and (max-width:1320px) {
        top:-400px;
      }
    }
    100%{
      width: 70%;
      top:-100px;
    }
  }

  /* .astronaut-dialog {
    position: absolute;
    top: 0px;
    left:0px;

    @media only screen and (max-width:1320px) {
      right:100px;
      top: -700px;
    }
  } */

  .visible-astronaut{
    visibility:visible;
    position:absolute;
    left:60%;
    top:-700px;
  }

  .hidden-astronaut{
    animation: animaAstronauts 4s forwards;
    left:60%;
    top:-700px;
    position:absolute;
  }


  @keyframes animaAstronauts{
    0%{
      opacity: 1;
      left:60%;
     top:-700px;
    }

    100%{
      opacity: 0;
      left:60%;
      top:-700px;
    }
  }


  .static-dash-one{
    position: absolute;
    top: 58px;
    right:176px;
    width: 3px;
  }


  .dash-one{
    position: absolute;
    top: 58px;
    right:176px;
    animation: animaDashOne 3s forwards;
    width: 3px;
  }


  @keyframes animaDashOne{
    0%{
    height:0px;
    }
    5%{
      height:15px;
    }

    30%{
      height:15px;
    }
    60%{
      height:15px;
    }

    100%{
      height:15px;
    }
  }

  .static-dash-two{
    position: absolute;
    top: 71px;
    right:176px;
    height:2px;
  }


  .dash-two{
    position: absolute;
    top: 71px;
    right:176px;
    animation: animaDashTwo 3s forwards;
    height:2px;
  }


  @keyframes animaDashTwo{
    0%{
    width:0px;
    }

    30%{
      width:25px;
    }
    60%{
      width:25px;
    }

    100%{
      width:25px;
    }
  }

  .static-dash-three{
    position: absolute;
    top: 71px;
    right:201px;
    height:11px;
  }

  .dash-three{
    position: absolute;
    top: 71px;
    right:201px;
    animation: animaDashThree 3s forwards;
    height:2px;
  }


  @keyframes animaDashThree{
    0%{
    height:0px;
    }

    30%{
      height:0px;
    }
    60%{
      height: 11px;
    }

    90%{
      height: 11px;
    }
    100%{
      height: 11px;
    }
  }



  .static-dash-four{
    position: absolute;
    top: 110px;
    right:166px;
    height:2px;
  }

  .dash-four{
    position: absolute;
    top: 110px;
    animation: animaDashFour 4s forwards;
    height:2px;
  }


  @keyframes animaDashFour{
    0%{
      width:0px;
      }

    40%{
      right:181px;
      width:0px;
    }
    60%{
      right:166px;
      width:20px;
    }

    100%{
      right:166px;
      width:20px;
    }
  }



  .title-careers-home {
    width: 500px;
    font-size: 48px;
    font-family: 'Suez One', serif;
    margin-bottom: 0;
  }

  .subtitle-home-careers {
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: #616861;
    max-width: 550px;
  }

  .button-home-careers:hover{
    background: rgb(0,255,172)!important;
    background: linear-gradient(90deg, rgba(0,255,172,1) 0%, rgba(88,203,251,1) 100%)!important;
    color:black!important;
    border: solid 3px transparent;
    background-clip: none;
  }
  .text-home-careers-button{
    margin-left: 70px;
    font-weight: 900!important;
    margin-right: -60px;
    cursor: pointer;
  }
  .button-home-careers{
    height:100px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:#616861;
    background-color: white;
    width:290px;
    font-size: 14px;
    border: solid 3px transparent;
    border-radius: 8px;
    background-image: linear-gradient(white, white), radial-gradient(circle at top left, #00FFAC, #58CBFB);
    background-origin: border-box;
    background-clip: content-box, border-box;
    white-space: nowrap;
    cursor: pointer;
    text-align: center;
  }

  @media only screen and (min-width:811px) and (max-width:1320px) {
    .home-events-main {
      overflow: hidden;
    }

    .careers-home-one {
      justify-content:center;
    }

    .text-image-careers-home{
      width:840px;
      position: relative;
    }
    .container-moon{
      margin-top:570px;
    }

    .title-careers-home{
      width: 700px;
      text-transform: uppercase;
      margin-bottom: 0;
    }
    .button-home-careers{
      position: absolute;
      left:200px;
    }
    .texts-event-home{
      padding-left: 80px;
      box-sizing: border-box;
    }
    .div-image-astronauts-home {
      width: 700px;
      align-items:center;
    }

    .home-event-one {
      margin-bottom: 100px;
    }

}`

export const IdeaHome = styled.section`
  .home-idea {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-height: 560px;
  }

  .main-text-idea-home {
    margin-top: -300px;
    width: 1150px;
    height: 350px;
    position: relative;

  }

  .title-text-idea-home,
  .title2-text-idea-home {
    font-size: 35px;
    font-weight: 800;
    font-family: 'Inter', sans-serif!important;
    font-style: bold!important;
    text-transform:uppercase;
  }

  .title2-text-idea-home {
    margin-top: -40px;
    background-color: #00FFAC;
    width: 700px;
    padding-left: 500px!important;
    position: absolute;
    right: 450px;
    @media only screen and (max-width:1325px){
      padding-left:100px!important;
    }
  }

  .text-idea-home {
    margin-top: 100px;
    font-size: 24px;
    color: #616861;
    width: 400px;
  }

  .idea-home-astronauts {
    height: 650px;
    z-index:1;
    width: 100%;
    display: flex;
    justify-content: center;
    background: rgb(0, 255, 172);
    background: linear-gradient(90deg, rgba(0, 255, 172, 0.15) 0%, rgba(88, 203, 251, 0.15) 63%, rgba(255, 255, 255, 0.15) 100%);
  }

  .button-idea-home{
    margin-top:-30px;
  }

  .div-idea-home-astronauts{
    width: 1150px;
  }

  .div-image-astronauts-home {
    max-width: 1312px;
    display: flex;
    justify-content: flex-end;
    height: 483px;
    position: relative;
  }

  .image-atronauts-home {
    position: absolute;
    margin-top: -320px;
    width: 700px;
    right: -70px;
  }

  .moon-home {
    margin-top: 100px;
    display: flex;
    justify-content: end;
    position: relative;
  }

  /* .static-moon-image{
    align-items: center;
  } */

  /* .moon-image{
    position: absolute;
    animation: animaMoon 4s forwards;
    height: 950px;
    align-items: center;
    top:-350px;
    right: 0;
    width: 100%;
  }


  @keyframes animaMoon{
    0%{
      width: 1530px;
    }

    100%{
      width: 1280px;
    }
  } */

  /* .astronaut-dialog {
    position: absolute;
    top: -450px;
    right:415px;
  } */

  .title-careers-home {
    width: 500px;
    font-size: 48px;
    font-family: 'Suez One', serif;
    margin-bottom: 0;
  }

  .smoke1 {
    position: absolute;
    left: 775px;
    top: -260px;
    animation: animaSmokeHome 2s forwards infinite;
  }

  .smoke2 {
    position: absolute;
    left: 930px;
    top: -240px;
    animation: animaSmokeHome2 2s forwards infinite;
  }

  @keyframes animaSmokeHome {
    0% {
      top: -255px;    
    }

    40% {
      top: -265px;
    }

    100% {
      top: -280px;
      opacity:0.15;
    }
  }

  @keyframes animaSmokeHome2 {
    0% {
      top: -235px;    
    }

    40% {
      top: -245px;
    }

    100% {
      top: -260px;
      opacity:0.15;
    }
  }

  .subtitle-careers-home {
    font-size: 24px;
    color: #616861;
    width: 500px;
  }


  @media only screen and (min-width:811px) and (max-width:1320px) {

    .idea-home-astronauts {
      height: 562px;
    }

    .div-idea-home-astronauts {
      height: 732px;
      width: 800px;
      justify-content:center;
      align-items:center;
    }
    .image-atronauts-home {
      margin-top: 120px;
      width: 500px;
      right: 0;
    }
    .div-image-astronauts-home {
      max-width: 700px;
    }
    .smoke1 {
      margin-top: 407px;
      left: 380px;
    }
    .smoke2 {
      left: 490px;
      margin-top: 410px;
    }
    .main-text-idea-home {
      width: 700px;
      justify-content: center;
      margin-left:-80px;
    }
    .title2-text-idea-home {
      left:-94px;
    }
  }`

export const StyledButton = styled.button`
  background-color: white;
  color: #616861;
  border: transparent;
  background-image: linear-gradient(white,white),radial-gradient(circle at top left,#00FFAC,#58CBFB);
  background-origin: border-box;
  background-clip: content-box,border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0.2rem;
  border-radius: 8px;
  z-index: 2;
  width:230px;
  &:hover {
    background: linear-gradient(180deg, rgba(0, 255, 172, 1) 0%, rgba(88, 203, 251, 1) 100%);
    box-shadow: 0px 16px 64px 0px #61686140;
    box-shadow: 0px 6px 8px 0px #61686126;
  }

  p {
    padding: 28px 10px 28px 30px;
    margin: 5px;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Inter', serif;
  }

  img {
    margin-right: 20px;
  }

  @media only screen and (max-width:900px){
    border:3px solid #00FFAC;
    padding: 0;
    margin-bottom:30px;
    box-shadow: 0 0 1em rgba(0, 255, 172, 1);
    p {
      padding: 5px 11px;
    }
    &:hover {
      background:white; 
      box-shadow: 0 0 1em rgba(0, 255, 172, 1);
    }
  }
  @media only screen and (min-width:900px) and (max-width:1320px) {
   position: absolute;

  }
`;

export const MainHomeMobile = styled.section`
  @media only screen and (min-width:901px){
    display: none;
  }
  .main-home-mobile{
    display: flex;
    width: 100%;
    height:calc(100vh - 56px);
    color: #232323;
    background: rgb(0, 255, 172);
    background: linear-gradient(90deg, rgba(0, 255, 172, 0.5) 0%, rgba(88, 203, 251, 0.5) 100%);
    overflow: hidden;
    align-items:center;
    @media only screen and (max-height:613px){
      height:613px;
    }
  }

  .texts-main-home-mobile{
    width: 350px;
  }
  .animation-text-mobile {
    font-family: 'Suez One', serif;
    font-size: 32px;
    position: relative;
  }

  .div-image-main-mobile{
    height:250px;
    position: relative;
  }
  .text-one-mobile{
    margin-right: 2px;
    width:134px;
    margin-left:20px;
  }

  .animated-word-mobile {
    position: absolute;
    top: 43px;
    left: 117px;
    height: 25px;
  }

  .background-animated-word {
    position: absolute;
    background-color: #FFFFC8;
    height: 24px;
    width: 800px;
    top: 53px;
    left: 120px;
  }

  .text-static-main-mobile {
    font-size: 24px;
    color: #616861;
    font-weight: 500;
    width:166px;
    margin-left:20px;
  }

  .image-shark-main-mobile {
    position: absolute;
    width:250px;
    left:70px;
    z-index:2;
    animation: animaShark1 3s forwards infinite;
  }

  @keyframes animaShark1 {
    0% {
      top: 0px;
    }

    50% {
      top: 10px;
    }

    100% {
      top: 0px;
    }
  }

  .cloud-left-mobile {
    position: absolute;
    width:145px;
    top:135px;
    animation: animaCloudLeft1 3s forwards infinite;
  }

  @keyframes animaCloudLeft1 {
    0% {
      left: 20px;
    }

    50% {
      left: 30px;
    }

    100% {
      left: 20px;
    }
  }

  .cloud-right-mobile {
    position: absolute;
    width:145px;
    top:70px;
    left:200px;
  }


  .image-hole-mobile{
    position: absolute;
    width:259px;
    top:140px;
    left:100px;
  }

  .satelite-home-mobile{
    position:absolute;
    width:160px;
    left:200px;
    top:-100px;
    animation: animaSatMobile 3s forwards infinite;
  }
  @keyframes animaSatMobile {
      0% {
        top:-110px;
      }

      50% {
        top:-100px;
      }

      100% {
        top:-110px;
      }
    }

  @media only screen and (min-width:600px){
    .animation-text-mobile {
      font-size: 40px;
    }
    .text-one-mobile{
      margin-left:80px;
      width:250px;
   }
    .div-image-main-mobile{
      margin-left:150px;
    }

    .background-animated-word {
      height: 32px;
      top: 67px;
      left: 130px;
    }
    .animated-word-mobile {
      top: 53px;
      left: 128px;
    }
    .text-static-main-mobile {
      margin-left:80px;
      font-size:32px;
      width: 350px;
    }
    .image-shark-main-mobile {
      width:350px;
    }
    .image-hole-mobile{
      top:170px;
      width: 400px;
    }
    .cloud-left-mobile{
      width: 200px;
      top:190px;
    }
    .cloud-right-mobile {
      width: 200px;
      top:100px;
    }
    @keyframes animaCloudRight1 {
      0% {
        left: 280px;
      }

      50% {
        left: 290px;
      }

      100% {
        left: 280px;
      }
    }
  }


`
export const AboutHomeMobile = styled.section`
 @media only screen and (min-width:901px){
    display: none;
  }
  .text-about-home-mobile{
    position: relative;
  }
  .title-about-home-mobile{
    margin-top:56px;
    font-size:32px;
    font-family: 'Suez One', serif;
    margin-left:20px;
    color: #232323;
  }
  .text1-about-home-mobile{
    color: #616861;
    margin-left:20px;
    width:230px;
    font-weight:500;
  }

  .button-about-home-mobile{
    margin-left:20px;
    border-bottom:2px solid black;
    padding-bottom:4px;
    font-weight:700;
    width: max-content;
    cursor:pointer;
  }
  .div-about-home-two-mobile {
    position: relative;
    width: 100%;
    overflow-x: hidden;
  }

  .wave-animation-mobile {
    display: block;
    animation: animaWave1 10s forwards infinite;
    height:524px;
    margin-top:100px;
    z-index:1;
  }

  @keyframes animaWave1 {
    0% {
      margin-left: -1000px;
    }

    50% {
      margin-left: -200px;
    }

    100% {
      margin-left: -1000px;
    }
  }

  .tower-mobile{
    position: absolute;
    right: 0;
    top:100px;
  }
  .map-home-mobile{
    position: absolute;
    left: 0;
  }

  .position-mobile-static{
    z-index: 1;
    width: 90px;
    top:115px;
    position: absolute;
    left: 13px;
  }
  .position-mobile{
    position: absolute;
    left: 13px;
    animation: animaPositionMobile 2s forwards;
    animation-delay: 0.25s;
    z-index: 1;
    width: 90px;
  }

  @keyframes animaPositionMobile {
    0% {
      top: 115px;
    }

    50% {
      top: 120px;
    }

    100% {
      top: 120px;
    }
  }
  @media only screen and (min-width:600px){
    .title-about-home-mobile{
      font-size:40px;
      width:250px;
      margin-left:80px;
    }
    .text1-about-home-mobile{
      margin-left:80px;
      width:310px;
      font-size:20px;
    }
    .button-about-home-mobile{
      margin-left:80px;
    }
  }

`

export const CarouselsHomeMobile = styled.section`
  margin-top:-230px;
  margin-bottom:150px;
  @media only screen and (min-width:901px){
    display: none;
  }

  .texts-services-mobile-home,
  .texts-case-mobile-home{
    margin-left:20px;
    margin-bottom:52px;
  }
 
  .title-services-home-mobile,
  .title-cases-home-mobile{
    font-size:32px;
    font-family: 'Suez One', serif;
    margin-bottom:16px;
    color:#232323;
  }
  
  .button-services-home-mobile,
  .button-cases-home-mobile{
    border-bottom:2px solid black;
    padding-bottom:4px;
    font-weight:700;
    width: max-content;
    cursor:pointer;
    position: relative;
    z-index:2;
  }
  .services-home-mobile{
    margin-top:75px;
  }

  .text-services-home-mobile{
    width: 65%;
    color: #616861;
    font-weight:500;
  }

  .images-mobile-services{
    display: flex;
    flex-direction:column;
    width: 100%;
    align-items:center;
    justify-content:center;
    background: linear-gradient(200.43deg, rgba(255,131,13,0.15) 0%,  rgba(242,242,97,0.15) 27.5%, rgba(255,255,255,0.15) 45.13%);
  }

  .line-image-services{
    width: 380px;
    justify-content:center;
    display: flex;
  }
  .image-services-home{
    width: 170px;
    height: 200px;
    margin-bottom:5px; 
    display: flex;
    justify-content:end;
    align-items:center;
    flex-direction:column;
    position: relative;
    cursor: pointer;
  }

  .text-services-mobile{
    position: absolute;
    text-align:center;
    top:170px;
    left:20px;  
    font-size:16px;
    font-weight:800;
    text-transform:uppercase;
    width:130px;
  }



  @media only screen and (min-width:600px){
    .texts-services-mobile-home,
    .texts-case-mobile-home{
      margin-left:80px;
    }
  }
`

export const EventsCareersHomeMobile = styled.section`
 @media only screen and (min-width:901px){
    display: none;
  }
  position: relative;

  .cases-home-mobile{
    margin-top:0px;
    z-index:2;
    margin-bottom:80px;
  }
  .texts-careers-home-mobile,
  .texts-events-mobile-home{
    margin-left:20px;
    position: relative;
    z-index:1!important;
  }
  .title-cases-home-mobile{
    margin-left:20px;
  }
  .title-cases-home-mobile,
  .title-careers-home-mobile,
  .title-events-home-mobile{
    font-size:32px;
    font-family: 'Suez One', serif;
    margin-bottom:16px;
    text-decoration:uppercase;
    z-index:1!important;
  }
  .button-events-home-mobile,
  .button-events-home-mobile{
    border-bottom:2px solid black;
    padding-bottom:4px;
    font-weight:700;
    width: max-content;
    cursor:pointer;
  }

  .text-careers-home-mobile,
  .text-events-home-mobile{
    width: 65%;
    color: #616861;
    font-weight:500;
    z-index:1!important;
  }
  .carousel-event-mobile{
    height:550px;
    margin-right:0px;
    margin-left:-15px;
    margin-bottom:180px;
  }
  .container-background-mobile-home{
    position: absolute;
    top:20px;
    height: 100%;
    width: 100%;
  }
  .background-one-events-careers{
    background: rgb(246, 246, 239);
    background: linear-gradient(0deg, rgba(246, 246, 239, 0.35) 1%, rgba(242, 242, 97, 0.35) 5%, rgba(255, 131, 13, 0.35) 53%, white 89%);
    width: 100%;
    height: 88%;
    
   }
   .background-two-events-careers{
    margin-top:-35px;
    background: rgb(0,255,172);
    background: linear-gradient(129deg, rgba(0,255,172,0.35) 6%, rgba(88,203,251,0.35) 70%, rgba(255,255,255,0.35) 88%); 
    width: 100%;
    height: 12.8%;
    top: 1150px;
   }
   
   .container-careers-home-mobile{
     position: relative;
   }


  .container-image-home-astronauts-mobile{
    z-index:1!important;
    overflow: hidden;
    .image-home-astronauts-mobile{
      z-index:1!important;
      width: 100%;
    }
  }
  .title-mobile-home-careers{
    font-size:20px;
    font-weight:800;
    color: #232323;
    z-index:1!important;
    text-transform:uppercase;
    
  }

  .title2-mobile-home-careers {
    font-size:20px;
    font-weight:800;
    color: #232323;
    margin-top: -20px;
    background-color: #00FFAC;
    width: 350px;
    padding-left: 431px!important;
    position: absolute;
    left: -435px;
    text-transform:uppercase;
  }
  .texts-careers-home-mobile{
    margin-top:-120px;
  }
  .text-careers-home-mobile{
    margin-top:60px;
  }

  .div-image-astronauts-home-mobile{
    width: 100%;
    position: relative;
    .image2-atronauts-home-mobile{
      width:330px;
    }
  }
  
  .smoke1 {
    position: absolute;
    width: 7px;
    animation: animaSmokeMobile 3s forwards infinite;
    left:118px;
  }

  .smoke2 {
    position: absolute;
    width: 7px;
    left:190px;
    animation: animaSmokeMobile2 3s forwards infinite;
  }

  @keyframes animaSmokeMobile {
    0% {
      top: 25px;
    }

    40% {
      top: 15px;
    }

    80% {
      top: 10px;
      opacity: 0.95;
    }

    100% {
      top: 5px;
      opacity: 0.15;
    }
  } 

  @keyframes animaSmokeMobile2 {
    0% {
      top: 35px;
    }

    40% {
      top: 25px;
    }

    80% {
      top: 20px;
      opacity: 0.95;
    }

    100% {
      top: 20px;
      opacity: 0.15;
    }
  } 

  @media only screen and (max-width:428px){
    .image-home-astronauts-mobile{
      margin-bottom:40px;
    }
  }
  @media only screen and (min-width:600px){
    .texts-careers-home-mobile,
    .texts-events-mobile-home{
      margin-left:80px;
    }
  }
`;

export const StyledCustomers = styled.div`
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
<<<<<<< HEAD
  margin: 70px auto 240px auto;
=======
  margin: 70px auto 120px auto;
>>>>>>> main
  padding: 0 50px;
  box-sizing: border-box;

  @media only screen and (max-width:1024px) and (max-width:1100px){
    margin: 130px auto 130px auto;
  }

  h1 {
    max-width: 1090px;
    font-family: 'Suez One', serif;
    font-size: 52px;
    font-weight: 400;
    line-height: 52px;
    letter-spacing: 0.05em;
    text-align: center;
    margin-bottom: 120px;
  }

`;

export const StyledGrid = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: repeat(auto-fill, minmax(171px, 6fr));
  gap: 37px 10px;
<<<<<<< HEAD
=======
  margin-bottom: 70px;
>>>>>>> main

  .junt-customer{
    margin-bottom: 20px;
  }
  img {
    margin: auto;
  }
  @media only screen and (min-width:360px) and (max-width:450px){
    gap: 37px 50px;
    width: 100%;
    margin-left:-50px;
    grid-template-columns: repeat(auto-fill, minmax(90px, 6fr));
<<<<<<< HEAD
    
=======
    margin-bottom: 0px;
>>>>>>> main
  }
`;

export const StyledCustomersMobile = styled(StyledCustomers)`
  @media only screen and (min-width:900px){
    display: none;
  }
  h1 {
    font-size: 24px;
    line-height: 31px;
    color: #000000;
    margin: auto auto 70px auto;
  }
`;
