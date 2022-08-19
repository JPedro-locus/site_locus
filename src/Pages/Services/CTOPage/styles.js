import styled from 'styled-components';

export const StyledMainCTO = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  position: relative;
  margin-bottom:180px;
  color:#232323;
  height: max-content;
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
  height: 2150px;
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
  @media only screen and (min-width:900px) and (max-width:1300px){
   margin-right:180px;
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
  @media only screen and (min-width:900px) and (max-width:1000px){
    left: 0px;
    position: block;
  }
  @media only screen and (min-width:1000px) and (max-width:1300px){
    margin-left:120px;
    position: block;
  }
`;


export const StyledServiceTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 49px;
  color: #232323;
  max-width: 225px;
  margin: 15px auto;

  @media only screen and (max-width:900px){
    font-size: 32px;
  }

`;

export const StyledMaxWidth = styled.div`
  width: 900px;
  margin: 0 auto;
  position: relative;

  @media only screen and (max-width:1220px){
    
  }
  @media only screen and (max-width:900px){
    width: 100%;
  }
`;

export const StyledServiceDescription = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #616861;
  font-weight:600;
  @media only screen and (max-width:1220px){
    margin-left:100px;
    margin-right:40px;
  }
  @media only screen and (max-width:900px){
    margin-top:10px;
    margin-left:30px;
  }
`;

export const StyledTitleAdvantages = styled.p`
  font-weight: 700;
  font-size: 32px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #232323;
  margin-top:40px;
  margin-bottom:100px;
  @media only screen and (max-width:1220px){
    margin-left:100px;
    margin-right:40px;
  }
  @media only screen and (max-width:900px){
    margin-left:30px;
    font-size:24px;
    margin-bottom:120px;
  }
`

export const StyledCards = styled.section`
  display: flex;
  align-items:center;
  flex-direction:row;
  justify-content:space-between;
  max-width:1150px;

  @media only screen and (max-width:900px){
    flex-direction:column;
    align-items:flex-start;
    justify-content:flex-start;
  }
`

export const StyledCardsLeft = styled.section`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  margin-right:20px;
  @media only screen and (max-width:900px){
    align-items:flex-start;
    justify-content:flex-start;
  }
`

export const StyledCardsRight = styled.section`
  display: flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  @media only screen and (max-width:900px){
    align-items:flex-start;
    justify-content:flex-start;
  }
`

export const StyledCardColumn1 = styled.section`
  max-width: 445px;
  background: linear-gradient(89.02deg, rgb(0, 255, 172, 0.25) 1.69%, rgb(88, 203, 251, 0.25) 98.31%);
  border-radius: 16px 0px 0px 0px;
  padding: 77px 25px 40px 94px; 
  color:#616861;
  z-index:2;
  margin-bottom:48px; 
  position:relative;
  font-size: 18px;

  @media only screen and (min-width:900px) and (max-width:1140px){
    padding: 67px 15px 30px 74px; 
    max-width: 375px;
  }

  @media only screen and (max-width:900px){
    padding: 60px 20px 24px 20px; 
    font-size:12px;
    max-width: 80%;
    margin-bottom:128px;
    margin-right:20px;
    line-height:18px;
    margin-left:20px;
    border-radius: 0px 16px 0px 0px;
  }
`
export const StyledCardColumn2 = styled.section`
  max-width: 455px;
  background: linear-gradient(89.02deg, rgb(0, 255, 172, 0.25) 1.69%, rgb(88, 203, 251, 0.25) 98.31%);
  border-radius: 0px 16px 0px 0px;
  padding: 77px 25px 40px 94px; 
  color:#616861;
  z-index:2;
  margin-bottom:48px; 
  position:relative;
  font-size: 18px;
  @media only screen and (min-width:900px) and (max-width:1140px){
    padding: 67px 15px 30px 74px; 
    max-width: 375px;
  }

  @media only screen and (max-width:900px){
    padding: 60px 20px 24px 20px; 
    font-size:12px;
    max-width: 80%;
    margin-bottom:128px;
    margin-right:20px;
    line-height:18px;
    margin-left:20px;
  }

`

export const StyledTitleCard = styled.div`
  position: absolute;
  width:353px;
  top:-50px;
  left:-100px;
  background: #6BFFCE;
  height: 106px;
  box-shadow: 0px 16px 28px rgba(97, 104, 97, 0.25);
  color: #232323;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  padding-left:205px;
  padding-right:52px;
  align-items:center;
  display: flex;

  @media only screen and (min-width:900px) and (max-width:1140px){
    padding-left:160px;
  }

  @media only screen and (max-width:900px){
    padding-left:60px;
    width:80%;
    left:-20px;
    padding-left:30px;
    padding-right:30px;
    top:-70px;
  }
  @media only screen and (max-width:400px){
    font-size:18px;
    width:80;
  }
`
export const StyledTitleCard2 = styled.div`
  position: absolute;
  width:340px;
  top:-50px;
  left:-15px;
  background: #6BFFCE;
  height: 106px;
  box-shadow: 0px 16px 28px rgba(97, 104, 97, 0.25);
  color: #232323;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  padding-left:103px;
  padding-right:85px;
  align-items:center;
  display: flex;
  @media only screen and (min-width:900px) and (max-width:1140px){
    padding-left:160px;
  }

  @media only screen and (max-width:900px){
    padding-left:60px;
    width:80%;
    left:-20px;
    padding-left:30px;
    padding-right:30px;
    top:-70px;
  }
  @media only screen and (max-width:400px){
    font-size:18px;
    width:80;
  }
`

export const StyledProcess = styled.div`
  display: flex;
  align-items:center;
  margin-top:80px;
  height: 461px;
  width: 1150px;
  background: linear-gradient(89.02deg, rgba(88, 203, 251, 0.15) 1.69%, rgba(242, 242, 97, 0.15) 98.31%);
  @media only screen and (max-width:900px){
    flex-direction:column;
    margin-top:0px;
    height: 100%;
    margin-bottom:-150px;
  }
`
export const StyledProcessColumn1 = styled.div`
  width: 50%;
  position: relative;
  align-items:center;
  display: flex;
  flex-direction:column;
  justify-content:center;
  height: 554px;
  margin-left:30px;

  @media only screen and (min-width:900px) and (max-width:970px){
    width:50%;
    margin-left:130px;
  }
  /* @media only screen and (min-width:970px) and (max-width:1150px){
    width:50%;
    margin-left:80px;
    height: 100%;
  } */
  
  @media only screen and (max-width:900px){
    height: 100%;
    margin-top:20px;
  }
`
export const StyledProcessColumn2 = styled.div`
  width: 50%;  
  align-items:center;
  display: flex;
  flex-direction:column;
  justify-content:center;
  border-left:2px solid  rgb(0, 255, 172, 1) ;
  height: 554px;
  position: relative;
  align-items:center;
  @media only screen and (min-width:900px) and (max-width:1150px){
    width:50%;
  }
  @media only screen and (max-width:900px){
    border:none;
    height: 100%;
  }

`

export const StyledTitleColumn1 = styled.div`
  position: absolute;
  top:0px;
  left:70px;
  font-size:32px;
  font-weight:600;
  @media only screen and (max-width:900px){
    margin-top:-60px;
    font-size:24px;
    left: 40%;
  }


`
export const StyledTitleColumn2 = styled.div`
  position: absolute;
  top:0px;
  left:40px;
  font-size:32px;
  font-weight:600;
  @media only screen and (max-width:900px){
    position: relative;
    margin-top:70px;
    left:0;
    font-size:24px;
    margin-bottom:32px;
  }
`

export const StyledTextColumn2 = styled.p`
  width: 380px;
  font-weight: 500;
  font-size: 24px;
  color: #616861;
  @media only screen and (min-width:900px) and (max-width:1150px){
    font-size: 16px;
    width: 70%;
    margin-right:40px;
    margin-left:-90px;
  }

  @media only screen and (max-width:900px){
    font-size: 16px;
    width: 50%;
  }

`

export const IconColumn1 = styled.img`
  position: relative;
  @media only screen and (max-width:900px){
    margin-top:50px;
  }
`

export const StyledListProcess = styled.div`
  display: flex;
  font-weight:500;
  margin-bottom:10px;
`
export const StyledIconProcess = styled.p`
  margin-right:16px;
  color:#00FFAC;
  font-weight:700;
  margin-top:-5px;
`
export const StyledIconText1 = styled.p`
  position: absolute;
  color: #616861;
  font-weight:700;
  font-size:24px;
  top:100px;
  left:75px;
  text-align:center;
  z-index:2;
  @media only screen and (max-width:900px){
    font-size:18px;
    top:-10px;
    left:120px;
  }

`
export const StyledIconText2 = styled.p`
  position: absolute;
  color: #616861;
  font-weight:700;
  font-size:24px;
  top:100px;
  left:360px;
  text-align:center;
  z-index:2;
  /* @media only screen and (min-width:900px) and (max-width:1150px){
    left:300px;
  } */
  @media only screen and (max-width:900px){
    font-size:18px;
    top:-10px;
    left:330px;
  }

`
export const StyledIconText3 = styled.p`
  position: absolute;
  color: #616861;
  font-weight:700;
  font-size:24px;
  text-align:center;
  z-index:2;
  top:310px;
  @media only screen and (max-width:900px){
    font-size:18px;
    top:170px;
  }

`

export const styledTextCard = styled.div`

`