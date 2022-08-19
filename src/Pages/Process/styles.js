import styled from 'styled-components';

export const MainProcess = styled.div`
  color: #232323;
  .column2-process-two {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
  }
  @media only screen and (max-width:1023px){
    display:none;
  }
`
export const MainProcessMobile = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  color:#232323;
  overflow: hidden;
  .container-one-mobile{
    background: rgb(242, 242, 97);
    background: linear-gradient(90deg, rgba(242, 242, 97, 0.15) 0%, rgba(255, 13, 91, 0.15) 100%);
    height: calc(100vh - 97px);
    display: flex;
    max-height:1000px;
    flex-direction:column;
    @media only screen and (min-width:390px) and (max-height:680px){
      height:680px;
    }
    @media only screen and (max-width:390px) and (max-height:690px){
      height:690px;
    }
  }
  @media only screen and (min-width:1023px){
    display:none;
  }
 
`
export const StyledFirstScreen = styled.div`
  height: 110vh;
  max-height: 1200px;
  font-size: 16px;
  min-height: max-content;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const StyledLeftContent = styled.div`
  background: rgb(242, 242, 97);
  background: linear-gradient(90deg, rgba(242, 242, 97, 0.15) 0%, rgba(255, 13, 91, 0.15) 100%);
  width: 45%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const StyledTextContainer = styled.div`
  margin: 0px 80px 25% 0px;
  width: 50%;
`;

export const StyledDescription = styled.p`
  line-height: 28px;
  color: #616861;
`;

export const StyledSubtitle = styled.h2`
  font-size: 48px;
  margin-top: 24px;
  margin-bottom: 37px;
  font-weight: 400;
  font-family: 'Suez One', serif;
`;

export const StyledRelease = styled.img`
  width: 25%;
  height: 25%;
  max-width: 180px;
  top: -15%;
  position: absolute;
`;

export const StyledImageContainer = styled.div`
  width: 55vw;  
  height: calc(100vh - 98px);
  max-height: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  align-self: flex-start;
`;

export const StyledGreenArrow = styled.img`
  position: absolute;
  top: calc(-15% + 25%);
  z-index: 2;
  height: 9%;
  animation: anim 2s infinite linear;

  @keyframes anim {
    0%   {top: calc(-15% + 25%)}
    20%   {top: calc(-15% + 26%)}
    40%   {top: calc(-15% + 27%)}
    60%   {top: calc(-15% + 27%)}
    80%   {top: calc(-15% + 26%)}
    100%   {top: calc(-15% + 25%)}
  }
`;

export const StyledFlowContainer = styled.div`
  margin-top: 22vh;
  margin-right: 10vw;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
`;

export const StyledImgFlow = styled.img`
  min-width: 400px;
  height: 70%;
  width: 70%;
  object-fit: fill;
`;

export const StyledArrowFlow = styled.img`
  min-width: 300px;
  height: 50%;
  width: 50%;
  position: absolute;
  z-index: 2;
  animation: rotation 1s infinite linear;

  @keyframes rotation {
    0%   {transform: rotate(0deg)}
    20%   {transform: rotate(3deg)}
    40%   {transform: rotate(5deg)}
    60%   {transform: rotate(5deg)}
    80%   {transform: rotate(3deg)}
    100%   {transform: rotate(0deg)}
  }
`;

export const StyledPath = styled.p`
  margin-bottom: 50px;

  span {
    font-weight: 700;
  }
  
  .link-event-specific{
    text-decoration:none!important;
    margin-top:17px;
    color:#232323!important;
    //text-transform:lowercase;
  }
`;

export const StyledSecondScreen = styled.div`
  height: max-content;
  display: flex;
`;

export const StyledColumn = styled.div`
  width: 50%;
`;

export const StyledColumn2 = styled.div`
  width: 50%;
  margin-top:220px;
`;

export const StyledDividerProcess = styled.div`
  margin-top: -205px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  p {
    font-family: 'Inter', serif;
    font-weight: 800;
    margin-bottom: 25px;
    font-size: 48px;
    color: #232323;
    line-height: 58px;
    width: 300px;
  }
`;

export const StyledDividerCircle = styled.div`
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #00FFAC;
  margin: 0;
  background-color: ${(props) => props.active ? '#00FFAC' : 'transparent'};
`;

export const StyledAstronautsImg = styled.img`
  position: absolute;
  top: -10px;
  right: 150px;
  width: 600px;

  @media only screen and (max-width:1200px) {
    top: -20px;
    width: 500px;
  }
`;

export const StyledMoonImg = styled.img`
  position: absolute;
  top: -400px;
  right: 0;
`;

export const StyledAstrContent = styled.div`
  position: absolute;
  top: -330px;
  left: 0px;
  margin-left: 100px;
  max-width: 1312px;
  z-index: 2;

  h2 {
    font-family: 'Inter', serif;
    font-size: 48px;
    font-weight: 800;
  }

  span {
    background-color: #00FFAC;
    width: 450px;
    padding-left: 431px;
    position: absolute;
    left: -428px;
  }
`;

export const StyledTextIdeaProcess = styled.p`
  margin-top: 100px;
  font-size: 24px;
  color: #616861;
  width: 400px;
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
`;

export const styledFirstContainerMobile = styled.div`
    background: rgb(242, 242, 97);
    background: linear-gradient(90deg, rgba(242, 242, 97, 0.15) 0%, rgba(255, 13, 91, 0.15) 100%);
    width: 100%;


`

export const StyledTextContainerMobile = styled.div`
    margin: 0px 20px 0 20px;
    padding-top:50px;

  p {
    line-height: 28px;
  }
  @media only screen and (min-width:600px){
    margin: 0px 100px 0 80px;
    padding-top:150px;
  }
`;

export const StyledProcessImg = styled.img`
  margin-top:-80px;
  @media only screen and (max-width:325px){
    margin-top:0px;
    }
`
export const ContainerTwoMobile = styled.div`
  display: flex;
  justify-content:center;
  position: relative;
  width: 310px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: 0.05em;

  .text1{
    position: absolute;
    top:30px;
  }
  .text2{
    position: absolute;
    top:215px;
    left:185px;
  }

  .text3{
    position: absolute;
    top:310px;
    left:1px;
  }

  .text4{
    position: absolute;
    top:394px;
    left:197px;
  }

  .text5{
    position: absolute;
    bottom:-40px;
  }
  @media only screen and (max-width:325px){
    .text1{
      top:110px;
    }
    .text2{
      top:290px;
    }
    .text3{
      top:385px;
    }

    .text4{
      top:470px;
    }

    .text5{
      position: absolute;
      bottom:-40px;
    }
}
`
export const ContainerThreeMobile = styled.div`
  display: flex;
  justify-content:center;
  margin-top:100px;
  flex-direction:column;
  align-items:center;
  h2{
    font-size:24px;
  }
`

export const ContainerFourMobile = styled.div`
  display: flex;
  flex-direction:column;
`

export const CardRightMobile = styled.div`
  display: flex;
  flex-direction:column;
  margin-right:20px!important;
  align-items:center;
  border-bottom:8px solid #00FFAC;
  margin-top:98px;
  background: rgb(88,203,251);
  background: linear-gradient(129deg, rgba(88,203,251,0.15) 25%, rgba(242,242,97,0.15) 66%); 
  position: relative;
  border-radius: 0px 16px 0px 0px;
  .icon-mobile{
    margin-top:-50px;
    margin-left:20px;
  }
  .line{
    position: absolute;
    top:-98px;
    left:20%;
  }
  p{
    width: 90%;
    text-align:center
  }

  @media only screen and (max-width:900px){
    p{
    width: 80%;
    }
  }
`

export const CardLeftMobile = styled.div`
  display: flex;
  flex-direction:column;
  margin-left:20px;
  align-items:center;
  border-bottom:8px solid #00FFAC;
  margin-top:98px;
  background: rgb(88,203,251);
  background: linear-gradient(129deg, rgba(88,203,251,0.15) 25%, rgba(242,242,97,0.15) 66%); 
  position: relative;
  border-radius: 16px 0px  0px 0px;
  .icon-mobile{
    margin-top:-50px;
    margin-right:20px;
  }
  .line{
    position: absolute;
    top:-98px;
    right:20%;
  }
  p{
    width: 90%;
    text-align:center
  }
  @media only screen and (max-width:900px){
    p{
    width: 80%;
    }
  }
`
