import styled from "styled-components";

export const MainCartesi = styled.section`


`

export const ContainerOne = styled.div`
  width:100%;
  height:calc(100vh - 97px);
  min-height:1050px;
  background: radial-gradient(123.35% 123.35% at 50% -15.89%, #232323 0%, rgba(35, 35, 35, 0) 100%);
  display: flex;
  align-items:center;
  justify-content:center;
  .container-one-cartesi{
    width: 1300px;
    display: flex;
    align-items:center;
    justify-content:space-between;

    @media only screen and (max-width:850px){
      flex-direction:column;
      width: 90%;
    }
    @media only screen and (min-width:850px) and (max-width:1100px){
      width: 800px;
    }
    @media only screen and (min-width:1101px) and (max-width:1400px){
      margin-left:80px;
      margin-right:80px;
    }
  }

  .rail-cartesi {
    display: flex;
    margin-bottom: 88px;
    color: #F2F2F2;
    @media only screen and (max-width:850px){
      margin-bottom: 32px;
      margin-top:-90px;
    }
  }

  .link-cartesi {
    text-decoration: none !important;
    color: #F2F2F2!important;
    margin-top: 15px;
  }

  .separator {
    color: #F2F2F2;
    margin-left: 3px;
    margin-right: 3px;
  }

  .cartesi-technologies{
    display:flex;
    justify-content:space-between;
    width: 450px;
    margin-top:197px;
    @media only screen and (min-width:850px) and (max-width:1100px){
      width: 300px;
    }
    @media only screen and (max-width:850px){
      display:none;
    }
    
  }

  h2{
    font-family: 'Suez One';
    font-style: normal;
    font-weight: 400;
    font-size: 72px;
    line-height: 94px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #FFFFFF;
    @media only screen and (max-width:850px){
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
      letter-spacing: 0.05em;
    }
  }

  .text-introduction-cartesi{
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    width: 539px;
    @media only screen and (min-width:850px) and (max-width:1100px){
      width: 400px;
    }
    @media only screen and (max-width:850px){
      width: 90%;
      font-size: 12px;
      margin-bottom:70px;
    }
  }

  .block-cartesi{
    font-weight: 700;
  }

  .technology-2,
  .technology-1{
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #232323;
  }

  .container-image{
    @media only screen and (min-width:850px) and (max-width:1100px){
      img{
        width: 400px;
      }
    }
    @media only screen and (max-width:850px){
      img{
        width: 90%;
      }
    }
  }
`

export const ContainerTwo = styled.div`
  width:100%;
  display: flex;
  align-items:flex-end;
  justify-content:center;

  img{
    margin-bottom: -30px;
  }

  @media only screen and (max-width:850px){
    flex-direction:column;
  }

  .cartesi-technologies-mobile{
    display:flex;
    justify-content:space-between;

    @media only screen and (min-width:850px){
      display: none;
    }
  }
  .block-cartesi{
    font-weight: 700;
  }

  .technology-2,
  .technology-1{
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #232323;
    margin-right:80px;
    margin-bottom:30px;
    img{
      margin-top:0px;
    }
  }

  .container-two-cartesi{
    width: 1300px;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    margin-top:80px;
    @media only screen and (max-width:850px){
      flex-direction:column;
      width: 90%;
      margin-right:20px;
      margin-left:20px;
      margin-top:0px;
    }
    @media only screen and (min-width:850px) and (max-width:1300px){
      width: 90%;
      img{
        width: 600px;
      }
    }
  }
  .text1-cartesi-container2{
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #232323;
    @media only screen and (max-width:850px){
      font-size:12px;
    }
  }
  .text2-cartesi-container2{
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    color: #232323;
    @media only screen and (max-width:850px){
      font-size:24px;
      line-height: 24px;
    }
  }
  .text3-cartesi-container2{
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #616861;
    margin-bottom:60px;
    @media only screen and (max-width:850px){
      font-size:12px;
    }
  }
  @media only screen and (min-width:1100px) and (max-width:1400px){
    .container-two-cartesi{
      margin-left:40px;
      margin-right:40px;
    }

    .texts-cartesi-container2{
      width: 450px;
    }
  }
  @media only screen and (min-width:850px) and (max-width:1100px){
    img{
      width: 400px;
    }
  }
  @media only screen and (max-width:850px){
    img{
      margin-top:40px;
      width:100%;
      margin-bottom:-20px;
    }
    .technology-2,
    .technology-1{
      
      margin-right:50px;;
      img{
        margin-top:0px;
      }
    }
  }

`


export const ContainerThree = styled.div`
  width: 100%;
  background: linear-gradient(89.02deg, rgba(97, 104, 97, 0.15) 1.69%, rgba(202, 212, 209, 0.15) 98.31%);
  height:354px;
  display:flex;
  justify-content:center;
  .container-three-cartesi{
    width: 1300px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #232323;
  }
  @media only screen and (min-width:1100px) and (max-width:1400px){
    .left-box-cartesi-3{
      margin-left:40px;
    }
  }

  @media only screen and (max-width:850px){
    height:100%;
    align-items:center;
    justify-content:center;
    margin-top:-90px;
    .container-three-cartesi{

      width: 90%;
      justify-content:center;
      flex-direction:column;
      align-items:center;
      margin-left:20px;
      padding-top:90px;

    }

    img{
      align-self:center;
    }
    .img1-container3{
      width:120px;
      align-self:center;
      margin-left:40px;
    }
    .img2-container3{
      width:90%;
      margin-left:20px;
    }
    h2{
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #232323;
    }
  }
  @media only screen and (min-width:850px) and (max-width:1100px){
    .left-box-cartesi-3{
      margin-left:80px;
    }
    .img2-container3{
      width:90%;
      margin-left:20px;
    }
  }


`
export const ContainerFour = styled.div`
  width:100%;
  display: flex;
  justify-content:center;
  .container-four-cartesi{
    width: 1300px;
  }

  @media only screen and (max-width:850px){
    align-items:center;
    .container-four-cartesi{
      width: 90%;
      display: flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
    }
    h2{
      font-size: 24px!important;
      line-height: 29px;
      text-align:center;
    }
    h3{
      font-size: 12px;
      line-height: 28px;
      letter-spacing: 0.05em;
      text-align:center;
    }
    img{
      width: 250px;
    }
    p{
      font-weight: 400;
      font-size: 12px!important;
      line-height: 24px;
    }
  }


  h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #232323;
    margin-top:72px;
  }

  h3{
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #616861;
  }

  p{
    max-width:440px;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #616861;

  }
  @media only screen and (min-width:850px) and (max-width:1400px){
    margin-left:40px;
  }
`