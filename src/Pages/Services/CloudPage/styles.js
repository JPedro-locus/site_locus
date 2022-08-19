import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1312px;
  width: 100%;
  margin: auto;
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
export const StyledText = styled.div`
  max-width: 775px;
  margin: 0 auto;
  position: relative;
  margin-bottom: 100px;
`;

export const StyledServiceDescription = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #616861;
  font-family: Inter;
  text-align: left;
  width: 720px;

  p{
    margin-left: -75px;
  }


  @media only screen and (max-width:900px){
    margin-top:120px;
    margin-left:40px;
    margin-right:40px;
    margin-bottom:-30px;
    font-size:12px;
    font-weight:600;
  }
  @media only screen and (min-width:500px) and (max-width:900px){
    font-size:18px!important;
  }
`;

export const StyledLine = styled.div`
  width: 5px;
  height: 2250px;
  border-left: 2px solid #6BFFCE;
  z-index: 2;
  margin-right: 70px;
  position: relative;
  
  @media only screen and (max-width:360px){
    height: 3250px;
  }

  @media only screen and (min-width:360px) and (max-width:469px){
    height: 2730px;
  }
  @media only screen and (min-width:469px) and (max-width:500px){
    height: 2530px;
  }
  @media only screen and (min-width:500px) and (max-width:585px){
    height: 2900px;
  }
  @media only screen and (min-width:585px) and (max-width:700px){
    height: 2600px;
  }
  @media only screen and (min-width:700px) and (max-width:900px){
    height: 2400px;
  }
`;



export const StyledLineTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: -140px;
  left: -180px;
  z-index: 2;
  .circle-mobile{
    position: absolute;
    bottom:0;
    left:-6px;
    z-index:10;
    background-color:white;
    @media only screen and (min-width:900px){
      display:none;
      height: 90%;
    }
  }
  @media only screen and (max-width:900px){
    top: -120px;
    left: 20px;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const StyledServiceTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 49px;
  color: #232323;
  max-width: 225px;
  margin: 15px auto;

  @media only screen and (min-width:900px) and (max-width:1250px){
    margin-left: 110px;
  }
  @media only screen and (max-width:500px){
    top: 0px;
    left: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 32px;
    margin-left: 0px;
  }
  @media only screen and (min-width:500px) and (max-width:900px){
    top: 0px;
    left: 0px;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 48px;
    margin-left: 0px;
  }
`;

export const StyledCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  box-sizing: border-box;
`;

export const StyledLastCard = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto 50px auto;
  padding: 53px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  @media only screen and (max-width:900px){
      padding:0;
      max-width:720px;
    }
  img {
    width: 125px;
    height: 95px;
    z-index: 2;
    @media only screen and (max-width:900px){
      height:79px;
    }
  }
`;

export const StyledCardContent = styled.div`
  margin-top: 10px;
  margin-left: 110px;
  @media only screen and (max-width:900px){
    margin-left: 20px;
  }

  h3{ 
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #232323;
    @media only screen and (max-width:500px){
      font-size: 24px;
    }
  }
  p {
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: 0.05em;
    color: #616861;
    @media only screen and (max-width:500px){
      font-size: 16px;
    }
  }
`;
