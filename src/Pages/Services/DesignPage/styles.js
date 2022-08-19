import styled from 'styled-components';

export const StyledServiceContent = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media only screen and (max-width:1000px){
    display: none;
  }
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
export const StyledLine = styled.div`
  width: 5px;
  height: 2000px;
  border-left: 2px solid #00FFAC;
  z-index: 2;
  margin-right: 70px;

  @media only screen and (max-width:1140px){
    margin-right: 180px;
  }

  @media only screen and (max-width:1000px){
    position: absolute;
    height: 1476px;
    left:20px;
  }
`;

export const StyledLineTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: -140px;
  left: -140px;
  z-index: 2;

`;

export const StyledServiceTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 49px;
  color: #232323;
  max-width: 225px;
  margin: 15px auto;

  @media only screen and (min-width:1001px) and (max-width:1140px){
    margin-left: 80px;
  }
  @media only screen and (max-width:1000px){
    margin-left: 20px;
    font-size:32px;
    margin-top:-120px;
  }
`;

export const StyledMaxWidth = styled.div`
  max-width: 775px;
  margin: 0 auto;
  position: relative;
`;

export const StyledServiceDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #616861;
  font-weight:600;

  @media only screen and (max-width:1000px){
    font-size:12px;
    margin-left:40px;
    margin-right:40px;
    margin-bottom:32px;
  }
`;


export const StyledTopic = styled.div`
  width: ${(props) => props.infinite ? "50%" : "440px"};
  border-radius: ${(props) => props.infinite ? "0" : "32px 0px 0px 32px"};
  height: ${(props) => props.height ? `${props.height}` : '350px'} ;
  background: linear-gradient(89.02deg, rgb(0, 255, 172, 0.25) 1.69%, rgb(88, 203, 251, 0.25) 98.31%);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;

  h2 {
    font-weight: 800;
    font-size: 32px;
    line-height: 32px;
    color: #232323;
  }

  p {
    margin: 0;
  }

  @media only screen and (max-width:1000px){
    width:95%;
    padding:0;
    padding-bottom:25px;
    border-radius: ${(props) => props.infinite ? "0 32px 32px 0" : "32px 0px 0px 32px"};
    h2 {
      font-size: 24px;
      color: #232323;
      margin-left:40px;
      width: 140px;
      margin-bottom:35px;
      padding-top:30px;
    }

    p {
      margin-left:40px;
      font-size: 12px;
    }
  }
  @media only screen and (min-width:500px) and (max-width:1000px){
    justify-content: center; 
  }
  @media only screen and (max-width:350px){
    justify-content: center; 
    height: 400px;
  }
`;

export const StyledBlockContent = styled.div`
  max-width: 340px;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  margin-right: 50px;
  position: relative;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #616861;
  }

  @media only screen and (max-width:1000px){
    p{
      font-size:12px;
    }
  }
`;

export const StyledFlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTopicImg = styled.img`
  margin-top: -110px; 

  @media only screen and (max-width:1000px){
    height: 100px;
    position: absolute;
    right: -20px;
    top:150px;
  }
`;

export const StyledRowContent = styled.div`
  left: 0;
  width: 100%;
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  flex-direction: row;
  margin: 50px 0;

  @media only screen and (max-width:1000px){
    margin-left:0;
  }

  .adjust-image{
    //margin-top: -45px;
  }
`;

export const StyledSteps = styled.div`
  width: ${(props) => props.infinite ? "50%" : "630px"};
  height: max-content;
  background: linear-gradient(89.02deg, rgb(88, 203, 251, 0.15) 1.69%, rgb(242, 242, 97, 0.15) 98.31%);
  border-radius: 32px;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const StyledStepRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin: 15px 0;

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #616861;
    margin-left: 20px;
    max-width: 335px;
  }
`;

export const StyledStepImgTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -20px;

  h2 {
    width: 150px;
    font-weight: 800;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    color: #616861;
  }
`;

export const StyledServiceContentMobile = styled.div`
  height: 1600px;
  width: 100%;
  @media only screen and (min-width:1001px){
    display: none;
  }

  .button-modal{
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-left:35px;
    margin-top:10px;
    border-bottom:2px solid #232323;
    padding-bottom:4px;
    font-weight: 700;
    margin-bottom:40px;
  }

  @media only screen and (max-width:350px){
      margin-bottom:150px;
  }
`

export const StyledBack = styled.p`
  position: absolute;
  top:100px;
  font-size:16px;
  left:20px;
  font-weight:600;
  cursor:pointer;
`