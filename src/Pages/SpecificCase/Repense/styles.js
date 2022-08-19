import styled from "styled-components";

export const MainCartesi = styled.section`


`

export const ContainerOne = styled.div`
  width:100%;
  height:calc(100vh - 97px);
  min-height:1050px;
  background: radial-gradient(123.35% 123.35% at 50% -15.89%, #047CFA 0%, rgba(35, 35, 35, 0) 100%);
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
    
    @media screen and (min-width:551px) and (max-width: 850px) {
      margin-bottom: 32px;
      margin-top: 182px;
    }
    
    @media only screen and (min-width: 350px) and (max-width:550px){
      margin-bottom: 32px;
      margin-top: 52px;
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
    
    @media screen and (min-width:551px) and (max-width: 850px) {
      width: 90%;
      font-size: 15px;
      margin-bottom:70px;
    }
    
    @media only screen and (min-width: 350px) and (max-width:550px){
      width: 90%;
      font-size: 12px;
      margin-bottom:70px;
    }

  }

  .ajuste_Logo{
    position: absolute;
    right: 1520px;
    top: 365px;
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
    margin-top: 300px;
    @media only screen and (min-width:850px) and (max-width:1100px){
      img{
        width: 400px;
      }
    }
    
    @media screen and (min-width:551px) and (max-width: 850px) {
      img{
        margin-top: -360px;
        margin-left: 50px;
        width: 60%;
      }
    }
    
    @media only screen and (min-width: 350px) and (max-width:550px){
      img{
        margin-top: -300px;
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

  .img-config{
    @media screen and (min-width:551px) and (max-width: 850px) {
      position: absolute;
      width: 70%;
      right: 125px;
      top: 1450px;
    }
    
    @media only screen and (min-width: 350px) and (max-width:550px){
      position: absolute;
      width: 100%;
      right: 5px;
      top: 1560px;
    }
  }

  .cartesi-technologies-mobile{
    display:flex;
    justify-content:space-between;
    margin-right: 150px;
    margin-bottom: 36px;

    @media screen and (min-width:801px) and (max-width: 850px){
      display:flex;
      justify-content:space-between;
      margin-right: 505px;
      margin-bottom: 36px;
    }

    @media screen and (min-width:551px) and (max-width: 800px) {
      display:flex;
      justify-content:space-between;
      margin-right: 465px;
      margin-bottom: 36px;
    }
    
    @media only screen and (min-width: 350px) and (max-width:550px){
      display:flex;
      justify-content:space-between;
      margin-right: 145px;
      margin-bottom: 36px;
    }

    @media only screen and (min-width:850px){
      display: none;
    }
  }

  .block-cartesi{
    font-weight: 700;
  }

  .technology-2{
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #232323;
    margin-right:0px;
    margin-bottom:30px;
    img{
      margin-top:0px;
    }
  }
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

    @media only screen and (min-width: 551px)  and (max-width:850px){
      font-size:17px;
    }

    @media only screen and (min-width: 350px) and (max-width:550px){
      font-size: 12px;
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
  background: linear-gradient(89.02deg, rgba(4, 124, 250, 0.15) 1.69%, rgba(202, 212, 209, 0.15) 98.31%, rgba(255, 255, 200, 0.15) 98.31%);
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

  .img2-container3{
    //position: relative;
    margin-top: 570px;
    margin-right: -150px;
    @media only screen and (min-width:400px) and (max-width:500px){
      margin-top: 32px;
      margin-right: 210px;
    }
  }
  .img2-container3-mobile{
    visibility: hidden;
  }

  .img1-container3-mobile{
    visibility: hidden;
  }

  .config_02{
    margin-bottom: -20px;
  }
  @media only screen and (min-width:1100px) and (max-width:1400px){
    .left-box-cartesi-3{
      margin-left:40px;
    }
  }

  @media only screen and (min-width:801px) and (max-width:850px){
    height:658px;
    align-items:center;
    justify-content:center;
    margin-top:140px;
    .container-three-cartesi{
      //width: 90%;
      //height: 40%;
      justify-content:center;
      flex-direction: column;
      align-items:center;
      margin-top: 150px;
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
      visibility: hidden;
      width:90%;
      margin-left:20px;
    }
    .img2-container3-mobile{
      visibility: visible;
      position: absolute;
      right: 115px;
      width:70%;
      bottom: -1640px;
      margin-left:8px;
    }
    h2{
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #232323;
    }
    .left-box-cartesi-3{
      visibility: hidden;
    }
    .img1-container3-mobile{
      visibility: visible;
      width: 90%;
      margin-top: 500px;
    }

    .config_02{
      visibility: hidden;
    }

    .configText{
      background-color: red;
      width: 100%;
    }
  }

  @media only screen and (min-width:550px) and (max-width:800px){
    height:658px;
    align-items:center;
    justify-content:center;
    margin-top:140px;
    .container-three-cartesi{
      //width: 90%;
      //height: 40%;
      justify-content:center;
      flex-direction: column;
      align-items:center;
      margin-top: 150px;
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
      visibility: hidden;
      width:90%;
      margin-left:20px;
    }
    .img2-container3-mobile{
      visibility: visible;
      position: absolute;
      right: 115px;
      width:70%;
      bottom: -1740px;
      margin-left:8px;
    }
    h2{
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #232323;
    }
    .left-box-cartesi-3{
      visibility: hidden;
    }
    .img1-container3-mobile{
      visibility: visible;
      width: 90%;
      margin-top: 500px;
    }

    .config_02{
      visibility: hidden;
    }

    .configText{
      background-color: red;
      width: 100%;
    }
  }

  @media only screen and (min-width:400px) and (max-width:549px){
    height:658px;
    align-items:center;
    justify-content:center;
    margin-top:140px;
    .container-three-cartesi{
      //width: 90%;
      //height: 40%;
      justify-content:center;
      flex-direction: column;
      align-items:center;
      margin-top: 150px;
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
      visibility: hidden;
      width:90%;
      margin-left:20px;
    }
    .img2-container3-mobile{
      visibility: visible;
      position: absolute;
      right: 25px;
      width:90%;
      bottom: -1740px;
      margin-left:8px;
    }
    h2{
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #232323;
    }
    .left-box-cartesi-3{
      visibility: hidden;
    }
    .img1-container3-mobile{
      visibility: visible;
      width: 90%;
      margin-top: 80px;
    }

    .config_02{
      visibility: hidden;
    }
  }

  @media only screen and (min-width: 380px) and (max-width: 399px){
    height:658px;
    align-items:center;
    justify-content:center;
    margin-top:140px;
    .container-three-cartesi{
      //width: 90%;
      //height: 40%;
      justify-content:center;
      flex-direction: column;
      align-items:center;
      margin-top: 150px;
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
      visibility: hidden;
      width:90%;
      margin-left:20px;
    }
    .img2-container3-mobile{
      visibility: visible;
      position: absolute;
      right: 25px;
      width:90%;
      bottom: -1930px;
      margin-left:8px;
    }
    h2{
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #232323;
    }
    .left-box-cartesi-3{
      visibility: hidden;
    }
    .img1-container3-mobile{
      visibility: visible;
      width: 90%;
      margin-top: 490px;
    }

    .config_02{
      visibility: hidden;
    }
  }

  @media screen and (min-width: 370px) and (max-width:379px){
    height:658px;
    align-items:center;
    justify-content:center;
    margin-top:140px;
    .container-three-cartesi{
      //width: 90%;
      //height: 40%;
      justify-content:center;
      flex-direction: column;
      align-items:center;
      margin-top: 150px;
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
      visibility: hidden;
      width:90%;
      margin-left:20px;
    }
    .img2-container3-mobile{
      visibility: visible;
      position: absolute;
      right: 25px;
      width:90%;
      bottom: -1990px;
      margin-left:8px;
    }
    h2{
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #232323;
    }
    .left-box-cartesi-3{
      visibility: hidden;
    }
    .img1-container3-mobile{
      visibility: visible;
      width: 90%;
      margin-top: 450px;
    }

    .config_02{
      visibility: hidden;
    }
  }
  
  @media screen and (min-width: 340px) and (max-width:369px){
    height:658px;
    align-items:center;
    justify-content:center;
    margin-top:140px;
    .container-three-cartesi{
      //width: 90%;
      //height: 40%;
      justify-content:center;
      flex-direction: column;
      align-items:center;
      margin-top: 150px;
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
      visibility: hidden;
      width:90%;
      margin-left:20px;
    }
    .img2-container3-mobile{
      visibility: visible;
      position: absolute;
      right: 25px;
      width:90%;
      bottom: -1930px;
      margin-left:8px;
    }
    h2{
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      letter-spacing: 0.05em;
      color: #232323;
    }
    .left-box-cartesi-3{
      visibility: hidden;
    }
    .img1-container3-mobile{
      visibility: visible;
      width: 90%;
      margin-top: 450px;
    }

    .config_02{
      visibility: hidden;
    }
  }

  @media only screen and (min-width:850px) and (max-width:1100px){
    .left-box-cartesi-3{
      margin-left:80px;
      width: 150%;
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

  .trocaContexto{
    @media only screen and (max-width:850px){
      visibility: hidden;
      width: 100%;
    }
  }

  .container-four-mobile{
    visibility: hidden;
    @media only screen and (max-width:850px){
      
      width: 100%;
      visibility: visible;
      margin-top: -550px;
      margin-bottom: 140px;
    }
  }

  .container-four-mobile-2{
    visibility: hidden;
    @media only screen and (max-width:850px){
      width: 100%;
      visibility: visible;
      margin-top: -117px;
      margin-bottom: 550px;
      //margin-top: -450px;
    }
  }

  .configText{
    @media only screen and (max-width:850px){
      margin-top: -750px;
      size: 50px;
    }
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

  .container-four-repense{
    width: 1300px;
    @media only screen and (min-width:850px) and (max-width:1350px){
      //background-color: red;
      margin-left:80px;
    }
    
    @media only screen and (min-width: 551px)  and (max-width:850px){
      margin-top: 322px;
      p{
        //background-color: red;
        //max-width:440px;
        //font-weight: 400;
        font-size: 45px;
        line-height: 28px;
        letter-spacing: 0.05em;
        margin-top: -980px;
        color: #616861;
      }
    }

    @media only screen and (min-width: 350px) and (max-width:550px){
      margin-top: 182px;
      p{
      max-width:440px;
      font-weight: 400;
      font-size: 16px;
      line-height: 28px;
      letter-spacing: 0.05em;
      margin-top: -760px;
      color: #616861;
      }
    }
  }
`