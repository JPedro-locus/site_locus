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
  height: 1500px;
  border-left: 2px solid #00FFAC;
  z-index: 2;
  margin-right: 70px;

  @media only screen and (max-width:1140px){
    margin-right: 180px;
  }

  @media only screen and (max-width:1000px){
    position: absolute;
    height: 1906px;
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



export const StyledServiceContentMobile = styled.div`
  height: 2100px;
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
export const StyledCardsSquad = styled.div`
  p{
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-top: 40px;
    color: #616861;
  }

  @media only screen and (max-width:900px){
      margin-left:40px;
      margin-right:20px;
      p{
        font-size: 12px;
      }
  }
`
export const TextCardsSquad = styled.div`

  p{
    margin-top: 0px;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #616861;
    padding-left:24px;
    text-transform: lowercase;
    border-width: 2px;
    border-style: solid;
    border-right: none;
    text-transform:none;
    border-image: 
    linear-gradient(
      to bottom, 
      #00FFAC, 
      #58CBFB
    ) 1 100%;
    @media only screen and (max-width:900px){
      padding-left: 12px;
    }
}

  
  `