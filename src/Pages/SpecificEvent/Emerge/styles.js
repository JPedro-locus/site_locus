import styled from 'styled-components';
export const StyledEvent = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const StyledSection = styled.section`
  height:max-content;
  padding-top: 80px;
  width: 100%;
  background: linear-gradient(90deg, rgba(102, 51, 218, 0.15) 12.27%, rgba(70, 124, 205, 0.15) 43.41%, rgba(44, 186, 195, 0.15) 71.66%, rgba(34, 210, 191, 0.15) 84.69%);
  display: flex;
  align-items: center;
  position:relative;
  @media only screen and (max-width:1300px){
    height:max-content;
  }
  .specific-event-path{
    display:flex;
    background-color: transparent;
    width: 1100px;
    margin-top:-10px;
    margin-bottom:100px;
    display: flex;
    @media only screen and (max-width:600px){
      width: 100%;
      margin-left:20px;
    }
    @media only screen and (min-width:600px) and (max-width:1200px){
      width: 100%;
      margin-left:80px;
    }
  }


  .link-event-specific{
    text-decoration:none!important;
    margin-top:17px;
    color:#232323!important;
    text-transform:lowercase;
  }

  .separator{
    margin-left:3px;
    margin-right:3px;
  }
`;

export const StyledBanner = styled.div`
  width: 65%;
  max-width: 1312px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;

  @media only screen and (max-width:900px){
    width: 80%;
  }
`;

export const StyledMainImage = styled.img`
  width: 100%;
  border: 24px solid white;
  border-bottom: none;
  object-fit: cover;
  border-radius: 24px 24px 0px 0px;
  @media only screen and (max-width:900px){
    height: 260px;
  }
`;

export const StyledEventCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: max-content;
  width: max-content;
  background-color: white;
  border-radius: 24px 24px 0px 0px;
  margin-bottom: -24px;
  @media only screen and (max-width:900px){
    width: 170px;
    padding: 0px;
  }
`;

export const StyledLogo = styled.div`
  width: 300px;
  padding: 20px 50px 12px 50px;

  img {
    width: 100%;
  }

  @media only screen and (max-width:900px){
    width: 120px
  }
`;

export const StyledDate = styled.div`
  color: #232323;
  padding: 15px 50px 30px 50px;
  border-top: 2px solid #F2F2F2;
  font-size: 45px;
  font-weight: 800;
  @media only screen and (max-width:900px){
    font-size:16px;
    padding: 10px 0px 20px 0px;
  }
`;

export const StyledMainContent = styled.section`
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1312px;
  flex-direction: column;
  padding: 80px;
  box-sizing: border-box;
  @media only screen and (max-width:900px){
   padding: 0;
  }
`;

export const StyledText = styled.p`
  font-size: 22px;
  text-align: center;
  max-width: 80%;

  @media only screen and (max-width:900px){
    margin-top:32px;
    font-size:12px;
  }
`;

export const StyledSubtitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 40px 0 0 0;
  @media only screen and (max-width:900px){
    font-size:16px;
  }
`;

export const StyledTitle = styled.h2`
  font-weight: 700;
  font-size: 67px;
  line-height: 96px;
  letter-spacing: 0.05em;
  text-align: center;
  margin: 0 0 40px 0;
  @media only screen and (max-width:900px){
    font-size:32px;
    margin: 0 0 -10px 0;
  }
`;

export const StyledVisualContent = styled.div`
  max-width: 1312px;
  width: 100%;
  background: linear-gradient(90deg, rgba(102, 51, 218, 0.15) 12.27%, rgba(70, 124, 205, 0.15) 43.41%, rgba(44, 186, 195, 0.15) 71.66%, rgba(34, 210, 191, 0.15) 84.69%);
  padding: 75px;
  margin: 0 80px 0 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 72px 72px 0px 0px;
  @media only screen and (max-width:900px){
    border-radius: 24px 24px 0px 0px;
    padding: 25px;
    font-size:24px;
  }
`;

export const StyledVideo = styled.iframe`
  margin: 50px 0 80px 0;
  @media only screen and (max-width:900px){
    width: 99%;
  }
`;

export const StyledCarousel = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
