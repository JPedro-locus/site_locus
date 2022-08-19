import styled from "styled-components";

export const ContactMain = styled.section`
 width: 100%;
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: center;
 overflow: hidden;
`

export const FirstSection = styled.section`
<<<<<<< HEAD
  width: 100%;
=======
    width: 100%;
>>>>>>> main
  height: calc(100vh - 98px);
  background: linear-gradient(131.35deg, rgb(255, 131, 13, 0.25) -5.15%, rgb(242, 242, 97, 0.25) 52.31%, rgb(255, 255, 255, 0.25) 74.79%);
  display: flex;
  max-height: 1250px;
  flex-direction: row;
  justify-content: center;

<<<<<<< HEAD
=======
  .container{
    width: 100%;
    position:relative;
  }

  .cards{
    display:flex;
  }
>>>>>>> main
  .title {
    @media only screen and (max-width: 768px) {
      margin-top: 55px;
    }
  }
<<<<<<< HEAD

  .contact-path {
    @media only screen and (max-width: 768px) {
      margin-left: 50px;
    }
  }

=======
  .contact-path {
    @media only screen and (max-width: 768px) {
      margin-left: 0px;
      margin-top:-20px;
    }
  }
>>>>>>> main
  @media only screen and (min-width: 0px) {
    .contact-path{
      display:flex;
      background-color: transparent;
      width: 100%;
      font-family: 'Inter', sans-serif;
      display: flex;
      align-items: center;
      justify-content: flex-start;
<<<<<<< HEAD

      b {
        color:#232323!important;
      }

=======
      b {
        color:#232323!important;
      }
>>>>>>> main
      .link-services{
        text-decoration:none!important;
        color:#232323!important;
      }
<<<<<<< HEAD

=======
>>>>>>> main
      .separator{
        width: unset !important;
        margin-left:3px !important;
        margin-right:3px !important;
        color:#232323!important;
      }
    }
<<<<<<< HEAD
    .container {
      width: 100%;
      height: 100%;
      max-width: 1080px;
      display: flex;
      justify-content: start;
      position: relative;
    }
    .text-cards {
      height: 650px;
      display: flex;
      flex-direction: column;
      .title {
        font-family: 'Suez One', serif;
        h1 {
          color: #232323;
          font-family: 'Suez One', serif;
          padding-left: 70px;
        }
        h2 {
          width: 190px;
          color: #616861;
          font-weight: 500;
          margin-top: -30px;
          padding-left: 70px;
        }
      }
    .wrap-cards {
      height: 400px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 40px;
      .cards {
        display: flex;
        align-items: center;
        width: 80%;
      img {
        width: 50px;
        height: 15px;
      }
      p {
        width: 100px;
        color: #616861;
        font-weight: 500;
        font-size: 8px;
      }
    }
  }
  }
    .astronaut {
      position: absolute;
      top: 170px;
      left: 20px;
      img {
        width: 100px;
      }
    }
  }

=======
  }
>>>>>>> main
  @media only screen and (min-width: 320px) {
    height: 600px;
    .text-cards {
      height: 650px;
      .title {
<<<<<<< HEAD
        /* margin-top: 60px; */
        font-family: 'Suez One', serif;
        h1 {
          font-family: 'Suez One', serif;
          padding-left: 50px;
        }

        h2 {
          padding-left: 70px;
          margin: 20px 0;
          font-size: 16px;
=======
        padding-left:0;
        margin-left:20px;
        /* margin-top: 60px; */
       
        h1 {
          font-family: 'Suez One', serif;
          padding-left:0;
          font-size: 32px;
          width:270px;
        }
        h2 {
          font-weight: 500;
          font-size: 12px;
          line-height: 28px;
          letter-spacing: 0.05em;
          color: #616861;
          width:150px;
          
>>>>>>> main
        }
      }
      .wrap-cards {
        justify-content: center;
        align-items: flex-start;
<<<<<<< HEAD
        padding: 0 30px;
        height: max-content;
        .cards {
=======
        padding: 0 10px;
        height: max-content;
        width:200px;
        .cards {
          align-items:center;
>>>>>>> main
        img {
          width: 30px;
          height: 15px;
        }
        p {
          width: 160px;
          font-size: 11px;
<<<<<<< HEAD
=======
          line-height: 15px;
          letter-spacing: 0.05em;
>>>>>>> main
        }
      }
    }
  }
    .astronaut {
      position: absolute;
<<<<<<< HEAD
      top: 190px;
      right: 10vw !important;
      left: unset;
      img {
        width: 170px;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 1000px;

=======
      top: 380px;

      right:0;
      img {
        width: 160px;
      }
    }
  }
  @media only screen and (min-width: 768px) {
    height: 1000px;
>>>>>>> main
    .text-cards {
      height: 900px;
      align-items: center;
      margin-top: 150px;
      .title {
<<<<<<< HEAD
        font-family: 'Suez One', serif;
=======
>>>>>>> main
        width: 700px;
        h1 {
          width: 420px;
          font-size: 40px;
          padding-left: 0;
        }
        h2 {
          padding-left: 0;
          font-size: 16px;
        }
    }
    .wrap-cards {
      width: 700px;
      height: 600px;
      justify-content: start;
      align-self: center;
      margin-top: 0px;
      .cards {
      img {
        width: 30px;
        height: 35px;
        padding-right: 5px;
      }
      p {
        width: 320px;
        font-size: 18px;
        padding-left: 0;
      }
    }
    }
    }
    .astronaut {
      position: absolute;
      top: 250px;
      left: 440px;
      img {
        width: 350px;
      }
    }
  }
<<<<<<< HEAD

=======
>>>>>>> main
  @media only screen and (min-width: 1024px) {
    height: 980px;
    .container {
      justify-content: center;
<<<<<<< HEAD
=======
      width:900px;
>>>>>>> main
    }
    .astronaut {
      position: absolute;
      top: 200px;
      left: 600px;
      img {
        width: 400px;
      }
    }
  }
<<<<<<< HEAD

  @media only screen and (min-width: 1200px) {
    max-height: 850px;
    .container {
      height: 700px;
    }

=======
  @media only screen and (min-width: 1200px) {
    max-height: 850px;
    .container {
      width:1000px;
      height: 700px;
    }
>>>>>>> main
    .text-cards {
      height: 100%;
      align-items: center;
      margin-top: 100px;
      .title {
        width: 900px;
<<<<<<< HEAD
        font-family: 'Suez One', serif;
=======
>>>>>>> main
        h1 {
          width: 419px;
          font-size: 40px;
          padding-left: 0;
        }
        h2 {
<<<<<<< HEAD
          width: 300px;
          padding-left: 0;
          font-size: 24px;
=======
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: 0.05em;
          color: #616861;
          width:500px;
>>>>>>> main
        }
    }
    .wrap-cards {
      width: 880px;
      height: 600px;
      justify-content: start;
      align-self: center;
      margin-top: 0px;
      .cards {
        margin-top: 0px;
      img {
        width: 30px;
        height: 20px;
        padding-right: 5px;
      }
      p {
        width: 320px;
<<<<<<< HEAD
        font-size: 18px;
=======
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.05em;
>>>>>>> main
      }
    }
  }
  }
  .astronaut {
    position: absolute;
    top: 240px;
    left: 630px;
    img {
      width: 400px;
    }
  }
}
<<<<<<< HEAD
=======

>>>>>>> main
`

export const StyledPath = styled.p`
  margin-bottom: 50px;

  span {
    font-weight: 700;
  }
`;

export const SecondSection = styled.div`
  margin-top: 150px;
  padding: 130px 0 0 0;
  border: 1px solid #00FFAC;
  width: 100%;
<<<<<<< HEAD

  h1 {
    background-color: white;
=======
  display:flex;
  align-items:center;
  justify-content: center;

 .lets-talk{
>>>>>>> main
    font-weight: 700;
    font-size: 48px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #232323;
<<<<<<< HEAD
    padding-left: 70px;
    box-sizing: border-box;
    margin-top: -150px;
  }
=======
    padding-left: 60px;
    padding-right: 40px;
    box-sizing: border-box;
    margin-top: -150px;
    background-color: white;
    width:380px;
    @media only screen and (max-width: 500px) {
      font-size: 32px;
      margin-left: 30%;
      margin-top: -250px;
      padding: 100px 0 0 30px;
      width:150px;
    }
    @media only screen and (min-width: 500px)  and (max-width: 870px) {
      font-size: 32px;
      margin-left: 40%;
      margin-top: -250px;
      padding: 100px 0 0 30px;
      width:150px;
    }
  }

>>>>>>> main
`;

export const StyledMainContent = styled.form`
  width: 100%;
  max-width: 1312px;
  margin: auto;
`;

export const StyledSecondCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #00FFAC;
  padding-right: 40px;
  width: 40%;
  
  @media only screen and (max-width: 1220px) {
    width: 50%;
  }
  @media only screen and (max-width: 870px) {
    width: 100%;
    border-right: none;
    padding-right: 0px;
    margin-bottom: 40px;
  }
`;

export const StyledForms = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  justify-content: center;
  margin-left: 40px;

  @media only screen and (max-width: 1220px) {
    width: 50%;
  }

  @media only screen and (max-width: 870px) {
    width: 100%;
    margin-left: 15px;
  }
`;

export const StyledSecondCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 17px;
  box-sizing: border-box;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 8px 24px rgba(97, 104, 97, 0.15);
  border-radius: 8px;
  margin: 10px 0;

  img {
    margin: 0 15px;
  }

  h3 {
    margin: 4px 0;
  }

<<<<<<< HEAD
=======
  li{
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.05em;
    color: #616861;
  }
>>>>>>> main
  ul {
    margin: 4px 0;
    padding-left: 20px;
  }
<<<<<<< HEAD
=======

  @media only screen and (max-width:700px){
    width: 120%;
    li{
      font-size:12px;
    }
    ul{
      font-size:18px;
    }
    padding: 10px;
  }
>>>>>>> main
`;

export const StyledRowForms = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  @media only screen and (max-width: 1220px) {
<<<<<<< HEAD
    flex-direction: column
=======
    flex-direction: column;
>>>>>>> main
  }

  .withMargin {
    margin-left: 20px;

    @media only screen and (max-width: 1220px) {
      margin-left: 0;
    }
  }
`;

export const StyledTextInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  label {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #232323;
    margin-bottom: 10px;
  }

<<<<<<< HEAD
=======


>>>>>>> main
  input, select {
    font-size: 20px;
    background-color: #F2F2F2;
    padding: 12px 25px;
    border: none;
    border-radius: 8px;
    outline: none;
<<<<<<< HEAD
=======
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.05em;
    color: #616861;
>>>>>>> main

    :hover {
      box-shadow: 0px 2px 4px rgba(97, 104, 97, 0.15), 0px 4px 16px rgba(97, 104, 97, 0.15);
    }

    :focus {
      border: 2px solid #00FFAC;
<<<<<<< HEAD
    }
  }

=======
  
    }
  }

 


>>>>>>> main
  .input-conte  {
    cursor: pointer;
    width: 15px;
    align-self: flex-end;
    margin-top: -38px;
    margin-right: 20px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    color: #CAD5D1;
    margin: 5px 0;
  }
`;

export const StyledRange = styled.div`
  width: 100%;
  padding: 0 70px;
  box-sizing: border-box;

  input[type=range] {
    -webkit-appearance: none;
    margin: 10px 0;
    width: 100%;
  }
  input[type=range]:focus {
    outline: none;
  }
  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 7px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #00ffac;
    background: #00ffac;
    border-radius: 10px;
    border: 1px solid #00ffac;
  }
  input[type=range]::-webkit-slider-thumb {
    box-shadow: 0px 0px 1px ;
    border: 3px solid #00ffac;
    height: 29px;
    width: 29px;
    border-radius: 31px;
    background: white;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -13px;
  }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background: #00ffac;
  }
  input[type=range]::-moz-range-track {
    width: 100%;
    height: 7px;
    cursor: pointer;
    animate: 0.2s;
    box-shadow: 0px 0px 0px #00ffac;
    background: #00ffac;
    border-radius: 10px;
    border: 1px solid #00ffac;
  }
  input[type=range]::-moz-range-thumb {
    box-shadow: 0px 0px 1px ;
    border: 3px solid #00ffac;
    height: 29px;
    width: 29px;
    border-radius: 31px;
    background: white;
    cursor: pointer;
  }
  input[type=range]::-ms-track {
    width: 100%;
    height: 7px;
    cursor: pointer;
    animate: 0.2s;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type=range]::-ms-fill-lower {
    background: #00ffac;
    border: 1px solid #00ffac;
    border-radius: 20px;
    box-shadow: 0px 0px 0px #00ffac;
  }
  input[type=range]::-ms-fill-upper {
    background: #00ffac;
    border: 1px solid #00ffac;
    border-radius: 20px;
    box-shadow: 0px 0px 0px #00ffac;
  }
  input[type=range]::-ms-thumb {
    box-shadow: 0px 0px 1px ;
    border: 3px solid #00ffac;
    height: 29px;
    width: 29px;
    border-radius: 31px;
    background: white;
    cursor: pointer;
  }
  input[type=range]:focus::-ms-fill-lower {
    background: #00ffac;
  }
  input[type=range]:focus::-ms-fill-upper {
    background: #00ffac;
  }

  input {
    width: 100%;
  }
`;

export const StyledRangeValues = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin-left: -15px;
`;

export const StyledPoint = styled.p` 
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #CAD5D1;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  align-self: center;
  margin: 100px auto -30px auto;
`;

export const StyledSendButton = styled.button`
  width: 150px;
  height: 65px;
  font-size: 16px;
  color: #616861;
  font-weight: 600;
  border: 2px solid #00FFAC;
  border-radius: 5px;
  cursor: pointer;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
<<<<<<< HEAD

=======
  z-index:2;
>>>>>>> main
  .background {
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
    margin-left: 15px;
    background-color: #00FFAC;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .check {
    width: 13px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  :hover {
    transition: 0.5s;
    background: rgb(0,255,172)!important;
    background: linear-gradient(90deg,rgba(0,255,172,1) 0%,rgba(88,203,251,1) 100%)!important;
  }

  p {
    margin: 0;
    width: max-content;
  }

  img {
    width: 25px
  }
`;

export const StyledCheckbox = styled.input`
  width: 25px;
  height: 25px;
`;

export const StyledFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 60px 50px 0px 50px;

  @media only screen and (max-width: 870px) {
    flex-direction: column;
  }
`;

export const StyledMaxWidth = styled.div`
  max-width: 1312px;
  margin: auto;
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 0.05em;
    color: #232323;
    margin: 0 auto;
    margin-top: 250px;
    width: 100%;
    padding-left: 70px;
    box-sizing: border-box;

    @media only screen and (max-width: 900px) {
      padding-left: 70px;
<<<<<<< HEAD
=======
      font-size:32px;
>>>>>>> main
    }
  }
`

export const ThirdSection = styled.section`
  width: 100%;
  position: relative;
`;

export const StyledWaveContainer = styled.div`
  width: 100%;
  z-index: -1;
  position: absolute;
  top:0;
<<<<<<< HEAD
=======

  @media only screen and (max-width:900px){
    right:220px;
  }
>>>>>>> main
`;

export const StyledCards = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 0 70px 150px;
  height: 530px;
  flex-wrap: wrap;

  @media only screen and (max-width: 1270px) {
    max-width: 900px;
    height: 800px;
    margin: auto;
    margin-bottom: 90px;
  }

  @media only screen and (max-width: 820px) {
    display: none;
  }
`;

export const StyledCardsMobile = styled.div`
  display: none;
  align-items: center;
  flex-direction: row;
  justify-content: center;
<<<<<<< HEAD
  margin: 0 70px 100px;
  height: 530px;
  flex-wrap: wrap;

  @media only screen and (max-width: 820px){
    display: flex;
  }

=======
  margin: 0 30px 100px;
  height: 530px;
  flex-wrap: wrap;
  width:340px;
  @media only screen and (max-width: 820px){
    display: flex;
  }
  @media only screen and (min-width: 400px) and (max-width:500px){
    width:350px;
    margin: 0 30px 100px;
  }
  @media only screen and (min-width: 500px) and (max-width:600px){
    width:400px;
    margin: 0 70px 100px;
  }
  @media only screen and (min-width: 600px) and (max-width:700px){
    width:500px;
    margin: 0 100px 100px;
  }
  @media only screen and (min-width: 700px) and (max-width:900px){
    width:500px;
    margin: 0 140px 100px;
  }
>>>>>>> main
  .rec-carousel {
    height: 500px !important;
  }

  /* .rec-carousel-item-visible {
    display: flex;
  } */

  .rec-item-wrapper, .rec-slider {
    height: 100%;
  }

  .rec-arrow {
    z-index: 2;
    align-self: flex-end;
    margin-bottom: -100px;
    background-color: transparent;
    box-shadow: none;
    position: absolute;
/* 
    &:hover:enabled {
      background-color: unset !important;
    } */

    &.rec-arrow-right {
<<<<<<< HEAD
      right: 41%;
    }

    &.rec-arrow-left {
      left: 41%;
=======
      right: 35%;
    }

    &.rec-arrow-left {
      left: 35%;
>>>>>>> main
    }

    &.rec-arrow_active{
      background-color: none!important;
    }
  }

  .rec-pagination {
    margin-top: 70px;
  }

  .rec-dot {
    background-color: #CAD5D1;
    box-shadow: 0 0 1px 3px #CAD5D1;
    margin: 0 10px;
    width: 9px;
    height: 9px;
  }

  .rec-dot_active {
    background-color: #00FFAC;
    box-shadow: 0 0 1px 3px #00FFAC;
  }

<<<<<<< HEAD
  @media only screen and (max-width:700px){
    .rec-arrow {

    &.rec-arrow-right {
      right: 24%!important;
    }

    &.rec-arrow-left {
      left: 24%;
    }

    }
  }


  @media only screen and (min-width:700px) and (max-width:900px){
    .rec-arrow {

    &.rec-arrow-right {
      right: 24%!important;
    }

    &.rec-arrow-left {
      left: 24%;
    }

    }
  }
=======
>>>>>>> main
`;

export const FourthSection = styled.div`
  width: 100%;
  max-width: 1312px;
  margin-bottom: 150px;
<<<<<<< HEAD

=======
>>>>>>> main
  h1 {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.05em;
    color: #232323;
    max-width: 275px;
    margin-top: 0px;
    padding-left: 70px;

    @media only screen and (max-width: 1270px) {
      padding-left: 70px;
    }
  }
`;

export const StyledMapContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
<<<<<<< HEAD
=======
  
>>>>>>> main

  .address-pt{
    position:absolute;
    left:420px;
    top:140px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #616861;
    line-height: 22px;
<<<<<<< HEAD
=======
    @media only screen and (min-width:1200px){
      display:none;
    }
>>>>>>> main
    @media only screen and (max-width:700px){
      font-size: 12px;
      left:230px;
      top:90px;
    }
    @media only screen and (min-width:700px) and (max-width:1000px){
      left:35%;
      top:20%;
      font-size: 12px;
    }
    button{
      background:transparent;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;
      color: #232323;
      border:none;
      cursor: pointer;
      @media only screen and (max-width:900px){
        font-size: 12px;
        text-decoration:underline;
      }
    }
    button:hover{
      font-size:18px;
      text-decoration:underline;
      @media only screen and (max-width:900px){
      font-size: 12px;
      line-height: 12px;
    }
    }
  }
  .address-br{
    position:absolute;
    left:320px;
    top:400px;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #616861;
    line-height: 22px;
    @media only screen and (max-width:700px){
      font-size: 12px;
      left:170px;
      top:260px;
    }
    @media only screen and (min-width:700px) and (max-width:1000px){
      left:26%;
      top:53%;
      font-size: 12px;
    }
<<<<<<< HEAD
=======

    @media only screen and (min-width:1200px){
      display:none;
    }
>>>>>>> main
    button{
      background:transparent;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      letter-spacing: 0.05em;
      color: #232323;
      border:none;
      cursor: pointer;
      @media only screen and (max-width:900px){
        font-size: 12px;
        text-decoration:underline;
      }
    }
    button:hover{
      font-size:18px;
      text-decoration:underline;
      @media only screen and (max-width:900px){
      font-size: 12px;
      line-height: 12px;
      }
    }
  }
`;

export const StyledMap = styled.img`
  object-fit: cover;
  width: 1350px;
  margin-left: -200px;
<<<<<<< HEAD

=======
  @media only screen and (min-width:1200px){
    display:none
  }
>>>>>>> main
  @media only screen and (max-width: 990px) {
    margin-left: -180px;
  }
`;
<<<<<<< HEAD
=======
export const StyledMapDesktop = styled.div`
  position:relative;
  @media only screen and (max-width:1200px){
      display:none
    }
  .recife-container{
    position: absolute;
    width:120px;
    height:80px;
    left:400px;
    bottom:190px;
    opacity: 0.4;
    
  }
  .pt-container{
    position: absolute;
    width:120px;
    height:80px;
    left:494px;
    bottom:405px;
    opacity: 0.4;
  }

  .address-pt-desktop{
    bottom:10px;
    left: 70px;
    visibility: hidden;
    transition: 0.5s ease-in;
    position:absolute;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #616861;
    line-height: 22px;
    width: 200px;
  }
  .line-map-pt{
    position: absolute;
    left:52px;
    bottom:30px;
    height:8px;
    width:3px;
    background: rgba(255, 13, 91, 0.8);
    transition: 0.5s ease-in;
  }
  .circle-map-pt{
    position: absolute;
    left:45px;
    bottom:15px;
    transition: 0.5s ease-in;
    color: rgba(255, 13, 91, 0.7);
  }
  .portugal{
    position: absolute;
    left:10px;
    bottom:25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(255, 13, 91, 1);
    transition: 0.5s ease-in;
  }

  .pt-container:hover{
    opacity: 1;
    .portugal{
      bottom:-20px;
      left:-280px;
      font-size: 200px;
    }
    .line-map-pt{
      height:65px;
      width: 4px;
      background: rgba(255, 13, 91, 1);
    }
    .circle-map-pt{
      padding:8px;
      border-radius: 64px;
      margin-bottom:-8px;
      margin-left:-8px;
    }
    .address-pt-desktop{
      bottom:10px;
      visibility: visible;
    }

  }


  .recife-container:hover{
    opacity: 1;
    .recife{
      bottom:153px;
      left:-250px;
      font-size: 200px;
    }
    .line-map{
      height:211px;
      width: 4px;
      background-color: red;
    }
    .circle-map{
      padding:8px;
      border-radius: 64px;
      margin-bottom:-8px;
      margin-left:-8px;
    }
    .address-br-desktop{
      bottom:160px;
      visibility: visible;
    }
  }

  .address-br-desktop{
    bottom:10px;
    left: 70px;
    visibility: hidden;
    transition: 0.5s ease-in;
    position:absolute;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.05em;
    color: #616861;
    line-height: 22px;
    width: 200px;
  }
  .line-map{
    position: absolute;
    left:52px;
    bottom:40px;
    height:8px;
    width:3px;
    background-color: #FF0D5B;
    transition: 0.5s ease-in;
  }
  .circle-map{
    position: absolute;
    left:45px;
    bottom:25px;
    transition: 0.5s ease-in;
  }
  .recife{
    position: absolute;
    left:10px;
    bottom:25px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(255, 13, 91, 1);
    transition: 0.5s ease-in;
  }
`

>>>>>>> main

export const StyledContactWays = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: row;
  position: absolute;
  right: -80px;
  top: -80px;
  width: 600px;

  @media only screen and (max-width: 1470px) {
    right: 0;
  }

  @media only screen and (max-width: 990px) {
    .disable {
      display: none;
    }

    right: -180px;
  }

  @media only screen and (max-width: 950px) {
    display: none;
  }

  h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 48px;
    letter-spacing: 0.05em;
    color: #232323;
    max-width: 230px;
    margin-right: 10px;
  }
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 850px;
`;

export const StyledCardsContainerMobile = styled(StyledCardsContainer)`
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 550px;
  margin-bottom: 80px;
<<<<<<< HEAD
=======
  margin-top:80px;
>>>>>>> main

  a {
    width: 100%;
    padding: 0 50px;
    box-sizing: border-box;
  }

  @media only screen and (max-width: 950px) {
    display: flex;
  }
`;

export const StyledMapCard = styled.div`
  background: rgba(202, 213, 209, 0.15);
  border-radius: 16px;
  width: 332px;
  padding: 16px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  height: 180px;
  margin: 15px 0;
  cursor: pointer;
  box-sizing: border-box;

  @media only screen and (max-width: 950px) {
    width: 100%;
  }

  &:hover {
    background: rgba(202, 213, 209, 0.15);
    border: 2px solid rgba(202, 213, 209, 0.5);;
  }

  img {
    margin: 20px 0;
    margin-left: -16px;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #232323;
    margin: 4px 0;
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #616861;
    margin: 3px 0;
  }
`;
<<<<<<< HEAD
=======

export const MainModal = styled.section`

@media only screen and (min-width: 0px) {
  position: relative;
  .modalHidden{
    display:none;
  }
  .modalVisible{
    background-color: rgba(190, 190, 190, 0.5);
    opacity: 1;
    width: 100%;
    height:100%;
    z-index: 10;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content: center;
    animation-name: visibleAnim;
    animation-duration: 0.2s;
    animation-fill-mode: forwards;
  }

  @keyframes visibleAnim {
    from {
        opacity: 0;
        margin-left: -100px;
    }
    to {
        opacity: 1;
        margin-left: 0px;
    }
}
  .box-sucess{
    width: 280px;
    height: 600px;
    background: linear-gradient(135deg, #FFFFFF 39%, #FAFABD 68%, #FBC464 81%);
    overflow: hidden;
    bottom: 1px;
    z-index: 10000;
    border-radius: 12px;
  .sucesso {
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    h1 {
      text-align: center;
      font-weight: 600;
      color: black;
    }
    .fechar {
      margin-top: 8px;
      margin-right: 8px;
      p {
        display: none;
      }
      img {
        cursor: pointer;
      }
    }
  }
  .text-astro{
    display: flex;
    flex-direction: column;
    align-items: center;
    .text {
      display: flex;
      flex-direction: column;
      align-items: center;
      width:210px;
     
      img {
        width: 112px;
        margin-left: -20px;
        padding-top: 35px;
      }
      h2 {
        font-size: 16px;
        text-align: left;
        color: black;
        padding-top: 35px;
        font-weight: 500;
        margin-bottom: 60px;
      }
    }
    .astro {
      img {
        width: 260px;
      }
    }
  }
}

}

@media only screen and (min-width: 768px) {
  .modalHidden{
    display:none;
  }
  .modalVisible{
    background-color: rgba(190, 190, 190, 0.5);
    opacity: 1;
    width: 100%;
    height:100%;
    position: fixed;
    display: flex;
    align-items:center;
    justify-content: center;
  }
  .box-sucess{
    width: 800px;
    height: 370px;
    bottom: 1px;
    overflow: hidden;
    z-index: 10000;
    border-radius: 12px;
    align-self: center;
    background: linear-gradient(160deg, #FFFFFF 39%, #FAFABD 68%, #FBC464 85%);
    .sucesso {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      h1 {
        text-align: center;
        font-weight: 600;
        font-size: 24px;
      }
      .fechar {
        margin-bottom: 18px;
        p {
          font-size: 14px;
          display: block;
        }
        img {
          width: 25px;
          margin-bottom: 7px;
          cursor: pointer;
          margin-left: 14px;
          margin-top: -10px;
        }
      }
    }
    .text-astro{
      display: flex;
      flex-direction: row;
      position:block;


      .text {
        display: flex;
        flex-direction: row;
        margin-top:-120px;
        width:100%;
        img {
          width: 112px;
          margin-left: 0px;
          margin-right: 20px;
        }
        h2 {
          width: 300px;
          font-size: 24px;
          text-align: left;
          color: #000000;
          padding-top: 5px;
          font-weight: 500;
          
        }
      }
      .astro {
        img {
          width: 320px;
          margin-top:50px;
        }
      }
    }
  }


}
`
>>>>>>> main
