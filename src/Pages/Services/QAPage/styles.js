import styled from 'styled-components';

export const StyledServiceContent = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;
  overflow:hidden;
  margin-top: -180px;
`;
export const MainIntroductionServices= styled.div`
  @media only screen and (max-width:900px){
    display: none;
  }
`;
export const MainIntroductionServicesMobile= styled.div`
  @media only screen and (min-width:900px){
    display: none;
  }
`;
export const StyledServiceTitle = styled.div`
  margin: 15px auto 15px auto;
  max-width: 1312px;
  width: 100%;

  @media only screen and (min-width:900px) and (max-width:1350px){
    margin: 20px 210px 20px 50px;
  }

  h1 {
    //background-color: red;
    max-width: 320px;
    font-size: 48px;
    font-weight: 700;
    line-height: 49px;
    color: #232323;
    @media only screen and (max-width:900px){
      font-size:32px;
      margin-left:20px;
    }
  }

  .adjustDistance{
    margin-top: -30px;
  }
`;

export const StyledRowContent = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  flex-direction: row;
  margin: 70px 0;
`;

export const StyledRightBlock = styled.div`
  background: ${(props) => props.isGreen ? 'linear-gradient(89.02deg, rgb(88, 203, 251, 0.15) 1.69%, rgb(242, 242, 97, 0.15) 98.31%);' : 'linear-gradient(89.73deg, rgb(242, 242, 97, 0.15) 0.49%, rgb(255, 13, 91, 0.15) 99.52%)'};
  width: 50%;
  border-radius: 48px 0px 0px 48px;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #232323;
    margin-top: 96px;
    width: 465px;
  }

  @media only screen and (max-width:900px){
    display: none;
  }
`;

export const StyledLeftBlock = styled.div`
  width: 50%;
  height: max-content;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-direction: column;

  @media only screen and (max-width:670px){
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    margin-top:-40px;
  }

  @media only screen and (min-width:670px) and (max-width:900px){
    width: 100%;
    margin-top:-40px;
  }
`;

export const StyledSmallBlock = styled.div`
  max-width: 650px;
  width: 100%;
  height: max-content;
  background: ${((props) => props.isGreen ? 'linear-gradient(89.02deg, rgb(0, 255, 172, 0.25) 1.69%, rgb(88, 203, 251, 0.25) 98.31%);' : 'linear-gradient(89.73deg, rgb(242, 242, 97, 0.15) 0.49%, rgb(255, 13, 91, 0.15) 99.52%)')};
  margin-top: -30px;
  border-radius: 0px 0px 0px 48px;
  box-sizing: border-box;
  @media only screen and (max-width:900px){
   margin-left:20px;
  }
`;

export const StyledTitleContainer = styled.div`
  background: #6BFFCE;
  box-shadow: 0px 16px 28px rgba(97, 104, 97, 0.25);
  z-index: 2;
  width: 80%;
  align-self: flex-start;
  justify-content: flex-end;
  @media only screen and (min-width:750px) and (max-width:900px){
    align-self: center;
  }

  h2 {
    font-weight: 700;
    font-size: 30px;
    line-height: 32px;
    width: max-content;
    margin: 20px 210px 20px auto;
    color: #232323;

    @media only screen and (min-width:900px) and (max-width:1200px){
      margin: 20px 210px 20px 40px;
      width: 90%;
    }

    @media only screen and (max-width:900px){
      margin-left:20px;
      font-size:24px;
      width: 90%;
    }
  }
`;

export const StyledFullBorder = styled.div`
  width: 100%;
  border-bottom: 1px solid ${(props) => props.isGreen ? "#58CBFB" : "#FF830D"};
  padding: 25px 90px;
  box-sizing: border-box;

  @media only screen and (min-width:900px) and (max-width:1250px){
    padding: 25px 50px;
  }
  @media only screen  and (max-width:900px){
    padding: 25px 20px;
  }

  &.isFirst  {
    padding-top: 50px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 5px 0;
    @media only screen and (max-width:500px){
      font-size:16px;
    }
  }

  p {
    margin: 5px 0;
    width: 460px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #616861;
    @media only screen and (max-width:500px){
      font-size:12px;
      width: 97%;
    }

    @media only screen and (min-width:500px) and (max-width:1024px){
      width:97%;
    }
  }
`;

export const StyledFullWithoutBorder = styled.div`
  width: 100%;
  padding: 20px 90px 50px 90px;
  box-sizing: border-box;

  @media only screen and (min-width:900px) and (max-width:1250px){
    padding: 20px 50px 50px 50px;
  }
  @media only screen  and (max-width:900px){
    padding: 25px 20px;
  }

  &.isFirst  {
    padding-top: 50px;
  }

  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    margin: 5px 0;
    @media only screen and (max-width:500px){
      font-size:16px;
    }
  }

  p {
    margin: 5px 0;
    width: 460px;
    font-weight: 400;
    line-height: 28px;
    color: #616861;
    @media only screen and (max-width:500px){
      font-size:12px;
      width: 97%;
    }
    @media only screen and (min-width:500px) and (max-width:1024px){
      width:97%;
    }
  }

  
`;

export const StyledHalfBorder = styled.div`
  border-bottom: 1px solid ${(props) => props.isGreen ? "#58CBFB" : "#FF830D"};
  padding: 20px 90px 50px 90px;
  box-sizing: border-box;
  max-width: 665px;

  .modal-structural-title,
  .modal-non-functional-title,
  .modal-functional-title{
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #232323;
    margin-left:-20px;
    margin-top:40px;
  }
  .modal-structural-subtitle,
  .modal-non-functional-subtitle,
  .modal-functional-subtitle{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #232323;
    margin-top:10px;
  }

  @media only screen and (min-width:900px) and (max-width:1250px){
    padding: 20px 50px 50px 50px;
  }

  @media only screen and (max-width:900px){
    padding: 10px 10px 10px 0px;
  }
`;

export const StyledHalfWithoutBorder = styled.div`
  text-align: center;
  padding: ${(props) => props.tallPadding ? '20px 90px 200px 90px' : '20px 90px 50px 90px'};
  box-sizing: border-box;
  max-width: 665px;

  @media only screen  and (min-width:900px) and (max-width:1250px){
    padding: ${(props) => props.tallPadding ? '20px 50px 200px 50px' : '20px 50px 50px 50px'};
  }

  @media only screen and (max-width:900px){
    padding: 20px 20px 0px 0px;
  }
`;

export const StyledList = styled.ul`
  max-width: 490px;
  text-align: justify;
  font-weight: 400;
  line-height: 24px;
  padding: 0;
  color: #000000;
  li {
    margin: 7px 0;
  }
  .modal-structural-subtitle,
  .modal-non-functional-subtitle,
  .modal-functional-subtitle{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #232323;
  }
  @media only screen and (max-width:900px){
    font-family: 'Inter';
    font-size: 12px;
    line-height: 15px;
  }

`;

export const  ButtomModalMobile = styled.section`
  @media only screen and (min-width:900px){
    display:none!important;
  }
  .button-modal-structural,
  .button-modal-non-functional,
  .button-modal-functional{
    background-color:transparent;
    border:none;
    font-weight:700;
    margin-left:0px;
    margin-top:10px;
    margin-bottom:20px;
    border-bottom:2px solid #232323;
    padding-bottom:4px;
    width: 112px;
  }
`