import styled from 'styled-components';
<<<<<<< HEAD
=======
import "@fontsource/inter";
>>>>>>> main

export const StyledMainCTO = styled.div`
  display: flex;
  flex-direction:column;
  align-items:center;
  position: relative;
  margin-bottom:180px;
  color:#232323;
  height: max-content;
  width: 100%;
  @media only screen and (max-width:900px){
    margin-bottom:40px;
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
  height: 1800px;
  border-left: 2px solid #6BFFCE;
  z-index: 2;
  margin-right: 250px;
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
  left: -120px;
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
  @media only screen and (min-width:900px) and (max-width:1200px){
      left:5px;
    }
`;


export const StyledServiceTitle = styled.h1`
  font-weight: 700;
  font-size: 48px;
  line-height: 49px;
  color: #232323;
  margin: 15px auto;

  @media only screen and (max-width:900px){
    font-size: 32px;
    margin-top:40px;
  }
  @media only screen and (min-width:900px) and (max-width:1200px){
      margin-left:15px;
    }
`;

export const StyledMaxWidth = styled.div`
  width: 950px;
  position: relative;


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
  margin-bottom:30px;
  @media only screen and (max-width:1220px){
    margin-left:100px;
    margin-right:40px;
  }
  @media only screen and (max-width:900px){
    margin-top:40px;
    margin-left:30px;
    font-size: 12px;
  }
`;

export const StyledBox = styled.div`
  height:492px;
  width: 1121px;
  background: linear-gradient(179.22deg, rgba(0, 255, 172, 0) 2.83%, rgba(0, 255, 172,0.15)52.19%,rgba(88, 203, 251,0.15)104.7%);

  @media only screen and (max-width:900px){
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom:150px;
    display: flex;
    justify-content:space-evenly;
  }

`

export const StyledContainerLanguage = styled.div`
  display: flex;
  align-items:center;
  justify-content:center;
  background: linear-gradient(89.02deg, rgba(255, 131, 13, 0.15) 1.69%, rgba(242, 242, 97, 0.15) 98.31%);
  height: 128px;
  width: 100%;
  @media only screen and (max-width:450px){
    height: 100%;
  }
  @media only screen and (min-width:450px) and (max-width:900px){
    flex-direction:column;
    height: 100%;
    width: 100%;
  }
`
export const Language = styled.img`
  margin-left:10px;
`
export const LanguageColumn1 = styled.div`
  margin-left:0px;
`
export const LanguageColumn2 = styled.div`
  margin-left:0px;
`
export const StyledScrum = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #616861;
  max-width:950px;
  margin-top:40px;
  @media only screen and (min-width:900px) and (max-width:1200px){
    max-width:700px;
  }
  @media only screen and (max-width:900px){
    font-size: 12px;
    max-width:80%;
  }
`
<<<<<<< HEAD
=======
export const StyledSubTitle = styled.div`
  width: 935px;
  margin-top: 65px;
  margin-bottom: -15px;
  text-transform: uppercase;
  font-family: "Inter";
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0.05em;
  vertical-align: top;
  text-align: left;
  align-self: left;
  color: #232323;

  @media only screen and (min-width:900px) and (max-width:1200px){
    max-width:700px;
    width: 70%;
  }
  @media only screen and (max-width:900px){
    font-size: 12px;
    max-width:80%;
    width: 70%;
  }
`

>>>>>>> main
export const StyledValue = styled.div`
  max-width:900px;
  margin-top:72px;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #616861;
  position: relative;
  @media only screen and (min-width:900px) and (max-width:1200px){
    max-width:600px;
  }
  @media only screen and (max-width:900px){
    font-size: 12px;
    max-width:70%;
    margin-left:40px;

  }
`
export const TitleValue = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #232323;
  
`

export const NumberValue = styled.div`
  position: absolute;
  font-size: 180px;
  line-height: 218px;
  letter-spacing: 0.05em;
  color: #CAD5D1;
  font-weight: 900;
  left:-122px;
  z-index:2;
  top:-120px;
  @media only screen and (min-width:900px) and (max-width:1200px){
   left:-140px;
   z-index:3;
  }
  @media only screen and (min-width:380px) and (max-width:900px){
    font-size:100px;
    left:-80px;
  }

  @media only screen and (max-width:380px){
    left:-65px;
    font-size:100px;
  }
`

export const BoxColumn = styled.div`
  display: flex;
  justify-content:center;
  align-items:center;
  text-align:center;
 
  @media only screen and (max-width:900px){
    flex-direction:column;
    justify-content:flex-start;
  }
`
export const BoxItem = styled.div`
  width: 200px;
  font-weight: 700;
  @media only screen and (max-width:900px){
    height: 200px;
    display: flex;
    justify-content:end;
    flex-direction:column;
    width: 120px;
    font-size: 12px;
    img{
    width: 110px;
    }
  }
 
`
export const StyledTextBox = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #616861;
  width: 900px;
  margin-top:72px;
  margin-left:109px;
  @media only screen and (min-width:900px) and (max-width:1200px){
      width: 700px;
      margin-left:209px;
    }
    @media only screen and (max-width:900px){
    width: 80%;
    margin-left:0px;
    font-size: 12px;
    position: absolute;
    bottom: 20px;
  }
`