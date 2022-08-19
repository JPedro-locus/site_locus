import styled from 'styled-components';

export const StyledThirdScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

export const StyledAstronauts = styled.div`
  height: 50%;
  min-height: 420px;
  padding-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(0, 255, 172);
  background: linear-gradient(90deg, rgba(0, 255, 172, 0.15) 0%, rgba(88, 203, 251, 0.15) 63%, rgba(255, 255, 255, 0.15) 100%);
  position: relative;
  margin-top: 450px;

  @media only screen and (max-width:830px){
    height: 300px;
    min-height: 250px;
  }
  
`;

export const StyledMaxWidth = styled.div`
  max-width: 712px;
  width: 100%;
  height: 100%;
  min-height: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const StyledAstrContent = styled.div`
  position: absolute;
  top: -310px;
  left: 0px;
  margin-left: 250px;
  max-width: 1312px;
  z-index: 2;

  h2 {
    font-family: 'Inter', serif;
    font-size: 40px;
    font-weight: 800;
    text-transform:uppercase;
    white-space: nowrap;
  }

  span {
    background-color: #00FFAC;
    width: 550px;
    padding-left: 431px;
    position: absolute;
    left: -432px;
  }
  @media only screen and (min-width:1300px) and (max-width:1500px) {
    margin-left: 150px;
  }
  @media only screen and (min-width:830px) and (max-width:1300px) {
    margin-left: 100px;
  }
  @media only screen and (min-width:710px) and (max-width:830px){
    top: -200px;
    margin-left: 80px;
    h2 {
    font-size: 30px;
    margin-left: 0px;
    }
    span {
      left: -432px;
    }
  }

  @media only screen and (min-width:570px) and (max-width:710px){
    top: -280px;
    margin-left: 80px;
    h2 {
      font-size: 30px;
      margin-left: 0px;
    }
    span {
      left: -432px;
    }
  }
  
  @media only screen and (max-width:840px){
    top: -370px;
    margin-left: 40px;
    span {
    right:20px!important;
    width: 390px;
    }
  }

  @media only screen and (max-width:570px){
    margin-left:70px;
    h2 {
    font-size: 20px;
    }
  }
`;

export const StyledTextIdeaProcess = styled.p`
  margin-top: 100px;
  font-size: 24px;
  color: #616861;
  width: 400px;
  font-weight: 500;
  line-height: 29px;
  letter-spacing: 0.05em;
  color: #616861;

  @media only screen and (max-width:570px){
    margin-top: 70px;
    font-size:16px;
    max-width: 70%;
    margin-left: 0px;
  }
`;

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
  justify-content: space-between;
  flex-direction: row;
  padding: 0.2rem;
  border-radius: 8px;
  z-index: 2;

  &:hover {
    background: linear-gradient(180deg, rgba(0, 255, 172, 1) 0%, rgba(88, 203, 251, 1) 100%);
    box-shadow: 0px 16px 64px 0px #61686140;
    box-shadow: 0px 6px 8px 0px #61686126;
  }

  p {
    padding: 28px 10px 28px 30px;
    margin: 5px;
    font-weight: 600;
    font-size: 13px;
    font-family: 'Inter', serif;
  }

  img {
    margin-right: 20px;
  }
  @media only screen and (max-width:900px){
    border:3px solid #00FFAC;
    padding: 0;
    box-shadow: 0 0 1em rgba(0, 255, 172, 1);
    p {
      padding: 5px 11px;
    }
    &:hover {
      background:white; 
      box-shadow: 0 0 1em rgba(0, 255, 172, 1);
      border:3px solid #00FFAC;
    }
  }
`;

export const StyledAstronautsImg = styled.section`
  display:flex;
  position: relative;
  justify-content:end;
  width: 700px;
  margin-top:-210px;
  z-index:2;
  margin-right: 100px;

  .smoke2-call {
    position: absolute;
    left: 400px;
    animation: animaSmokeGeneral2 3s forwards infinite;
  }

  .smoke1-call {
    position: absolute;
    left: 250px;
    animation: animaSmokeGeneral 3s forwards infinite;
  }

  @keyframes animaSmokeGeneral {
    0% {
      top:70px;
    }

    40% {
      top:60px;
    }

    80% {
      top: 40px;
      opacity: 0.95;
      -moz-opacity: 0.95;
    }

    100% {
      top: 30px;
      opacity: 0.15;
      -moz-opacity: 0.15;
    }
  }

  @keyframes animaSmokeGeneral2 {
    0% {
      top:90px;
    }

    40% {
      top: 80px;
    }

    80% {
      top: 60px;
      opacity: 0.95;
      -moz-opacity: 0.95;
    }

    100% {
      top: 50px;
      opacity: 0.15;
      -moz-opacity: 0.15;
    }
  }
@media only screen and (min-width:1240px) and (max-width:1400px){
  margin-right:100px;
}
@media only screen and (min-width:900px) and (max-width:1240px){
  width: 500px;
  .smoke2-call {
    left: 290px;
  }
  .smoke1-call {
    left: 182px;
  }
  @keyframes animaSmokeGeneral {
    0% {
      top:45px;
    }

    40% {
      top: 35px;
    }

    80% {
      top: 15px;
      opacity: 0.95;
      -moz-opacity: 0.95;
    }

    100% {
      top: 5px;
      opacity: 0.15;
      -moz-opacity: 0.15;
    }
  }

  @keyframes animaSmokeGeneral2 {
    0% {
      top:60px;
    }

    40% {
      top: 50px;
    }

    80% {
      top: 40px;
      opacity: 0.95;
      -moz-opacity: 0.95;
    }

    100% {
      top: 30px;
      opacity: 0.15;
      -moz-opacity: 0.15;
    }
  }
}
  @media only screen and (min-width:900px) and (max-width:1024px){
    margin-right:40px;
    width: 500px;

  }
  @media only screen and (max-width:900px){
    width: 350px;
    align-self:center;
    margin-right:20%;

    .smoke2-call {
      left: 200px;
      width: 7px;
    }
    .smoke1-call {
      left: 127px;
      width: 7px;
    }
  @keyframes animaSmokeGeneral {
    0% {
      top:35px;
    }

    40% {
      top: 25px;
    }

    80% {
      top: 5px;
      opacity: 0.95;
      -moz-opacity: 0.95;
    }

    100% {
      top: -5px;
      opacity: 0.15;
      -moz-opacity: 0.15;
    }
  }

  @keyframes animaSmokeGeneral2 {
    0% {
      top:40px;
    }

    40% {
      top: 30px;
    }

    80% {
      top: 20px;
      opacity: 0.95;
      -moz-opacity: 0.95;
    }

    100% {
      top: 10px;
      opacity: 0.15;
      -moz-opacity: 0.15;
    }
  }

  }
`;

export const StyledMoonImg = styled.img`
  position: absolute;
  top: -400px;
  right: 0;


  @media only screen and (min-width:600px) and (max-width:830px){
    top: -300px;
  }
  @media only screen and (max-width:600px) {
    top: -250px;
    left:-200px;
    width: 750px;
  }
`;
