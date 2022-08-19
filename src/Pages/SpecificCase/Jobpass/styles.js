import styled from "styled-components";

export const Mainjobpass = styled.section`


`

export const ContainerOne = styled.div`
  width:100%;
  height:calc(100vh - 97px);
  min-height:1050px;
  background: radial-gradient(100% 100% at 50% 0%, #87729A 0%, #E2C4C3 60.93%, #FEF7EE 100%);
  display: flex;
  align-items:center;
  justify-content:center;
  .container-one-jobpass{
    width: 1300px;
    display: flex;
    align-items:center;
    justify-content:space-between;

    @media only screen and (max-width:850px){
      flex-direction:column;
      margin-top:150px;
      width: 90%;
    }
    @media only screen and (min-width:850px) and (max-width:1100px){
      width: 800px;
    }
    @media only screen and (min-width:1101px) and (max-width:1350px){
      margin-left:40px;
      margin-right:40px;
    }
  }

  .rail-jobpass {
    display: flex;
    margin-bottom: 88px;
    color: #F2F2F2;
    @media only screen and (max-width:850px){
      margin-bottom: 32px;
      margin-top:-90px;
    }
  }

  .link-jobpass {
    text-decoration: none !important;
    color: #F2F2F2!important;
    margin-top: 15px;
  }

  .separator {
    color: #F2F2F2;
    margin-left: 3px;
    margin-right: 3px;
  }

  .jobpass-technologies{
    display:flex;
    justify-content:space-between;
    width: 450px;
    margin-top:180px;
    @media only screen and (min-width:850px) and (max-width:1100px){
      width: 300px;
    }
    @media only screen and (max-width:850px){
      position:absolute;
      width: 90%;
      top:1000px;
      justify-content:flex-start;
      img{
        height: 60px;
        margin-left:30px;
        margin-top:10px;
      }
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
    color: #232323;
    @media only screen and (max-width:850px){
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
      letter-spacing: 0.05em;
    }
  }

  .text-introduction-jobpass{
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #232323;
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

  .block-jobpass{
    font-weight: 700;
  }

  .technology-2,
  .technology-1{
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #232323;
    @media only screen and (max-width:850px){
      display:flex;
      flex-direction:column;
      align-items:center;
    }
  }
  .tec-job{
    margin-left:20px;
  }
  .container-image{
    @media only screen and (min-width:850px) and (max-width:1100px){
      img{
        width: 400px;
      }
    }
    @media only screen and (max-width:850px){
      img{
        width: 80%;
        margin-top:-40px;
      }
    }
  }
`

export const ContainerTwo = styled.div`
  width:100%;
  display: flex;
  align-items:flex-end;
  justify-content:center;
  @media only screen and (max-width:850px){
    flex-direction:column;
    margin-top:250px;
  }
  
  .jobpass-technologies-mobile{
    display:flex;
    justify-content:space-between;

    @media only screen and (min-width:850px){
      display: none;
    }
  }
  .block-jobpass{
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


  .container-two-jobpass{
    width: 1300px;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    margin-top:80px;
    max-height:500px;
    @media only screen and (max-width:850px){
      flex-direction:column;
      width: 90%;
      margin-right:20px;
      margin-left:20px;
      margin-top:0px;
      padding-bottom:250px;
    }
  }
  .text1-jobpass-container2{
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #232323;
    @media only screen and (max-width:850px){
      font-size:12px;
    }
  }
  .text2-jobpass-container2{
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    color: #232323;
    @media only screen and (max-width:850px){
      font-size:24px;
      line-height: 24px;
    }
  }
  .text3-jobpass-container2{
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #616861;
    margin-bottom:60px;
    width: 400px;
    @media only screen and (max-width:850px){
      font-size:12px;
      width: 90%;
      }
  }
  @media only screen and (min-width:1100px) and (max-width:1350px){
    .container-two-jobpass{
      margin-left:40px;
      margin-right:40px;
    }
    img{
      width: 500px;
    }
    .texts-jobpass-container2{
      width: 450px;
    }
  }
  @media only screen and (min-width:850px) and (max-width:1100px){
    .texts-jobpass-container2{
      width: 400px;
    }
    img{
      width: 400px;
    }

    .container-two-jobpass{
     width: 800px;
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
  background: linear-gradient(89.02deg, rgba(61, 63, 140, 0.15) 1.69%, rgba(251, 122, 91, 0.15) 98.31%);
  height:354px;
  display:flex;
  justify-content:center;
  z-index:1;
  .container-three-jobpass{
    width: 1300px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media only screen and (min-width:850px) and (max-width:1350px){
      margin-left:80px;
    }
  }

  .img-container2{
    margin-top:-450px;
    @media only screen and (min-width:850px) and (max-width:1100px){
      width: 480px;
    }
    @media only screen and (max-width:850px){
      width: 250px;
      margin-top:-800px;
      margin-bottom:200px;
    }
  }

  h2{
    font-weight: 700;
    font-size: 40px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #232323;
    @media only screen and (max-width:850px){
      margin-top:100px;
    }
  }
  @media only screen and (max-width:850px){
    height:100%;
    align-items:center;
    justify-content:center;
    margin-top:-90px;
    .container-three-jobpass{
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

`
export const ContainerFourJob = styled.div`
  width:100%;
  display: flex;
  justify-content:center;
  .container-four-jobpass{
    width: 1300px;
    @media only screen and (min-width:850px) and (max-width:1350px){
      margin-left:80px;
    }
  }
  img{
    margin-top:20px;
  }
  @media only screen and (max-width:850px){
    align-items:center;
    .container-four-jobpass{
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
    @media only screen and (max-width:850px){
      max-width:90%;
    }
  }
 
 
`