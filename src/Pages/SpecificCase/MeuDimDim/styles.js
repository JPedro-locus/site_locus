import styled from "styled-components";

export const Mainmeudimdim = styled.section`


`

export const ContainerOne = styled.div`
  width:100%;
  height:calc(100vh - 97px);
  min-height:1050px;
  background-image: radial-gradient(136.28% 136.28% at 50% -28.82%, RGB(214, 238, 191) 0%, rgba(83, 183, 84, 0) 135%);
  display: flex;
  align-items:center;
  justify-content:center;
  .container-one-meudimdim{
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

  .logo{
    @media only screen and (min-width:850px) and (max-width:1100px){
      margin-top: -85px;
    }
  }

  .rail-meudimdim {
    display: flex;
    margin-bottom: 88px;
    color: #000 !important;

    @media only screen and (max-width:850px){
      margin-bottom: 32px;
      margin-top:-45px;
    }

    @media only screen and (max-width:650px){
      margin-bottom: 32px;
      margin-top:-90px;
    }
  }

  .link-meudimdim {
    text-decoration: none !important;
    color: #9caa8e!important;
    margin-top: 15px;
  }

  .separator {
    color: #9caa8e;
    margin-left: 3px;
    margin-right: 3px;
  }

  .meudimdim-technologies{
    display:flex;
    justify-content:space-between;
    width: 450px;
    margin-top:100px;
    @media only screen and (max-width:850px){
      visibility: hidden;
      position:absolute;
      width: 90%;
      top:1050px;
      justify-content:flex-start;
      img{
        height: 60px;
        margin-left:20px;
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

  .text-introduction-meudimdim{
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
      margin-bottom:50px;
    }
  }

  .block-meudimdim{
    font-weight: 700;
  }

  .retroceder{
    
  }

  .technology-2,
  .technology-1{
    align-items: center;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #232323;

    @media only screen and (min-width: 650px) and (max-width:850px){
      display:flex;
      flex-direction:column;
      align-items:center;
      right: 300px;

    }

    @media only screen and (max-width:650px){
      display:flex;
      flex-direction:column;
      align-items:center;
    }
  }
  .tec-job{
    margin-left:20px;
  }
  .container-image{

    margin-top: 350px;

    @media only screen and (min-width:850px) and (max-width:1100px){
      img{
        width: 400px;
      }
    }
    @media only screen and (max-width:850px){
      img{
        margin-left: 38px;
        width: 80%;
        margin-top:-350px;
        margin-bottom: 75px;
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
    margin-top:5px;
  }
  
  .meudimdim-technologies-mobile{
    display:none;
    justify-content:space-between;
    margin-right: 70px;

    @media only screen and (min-width:810px) and (max-width:850px){
      display:flex;
      justify-content:space-between;
      margin-right: 478px;
    }

    @media only screen and (min-width:765px) and (max-width:810px){
      display:flex;
      justify-content:space-between;
      margin-right: 431px;
    }

    @media only screen and (min-width:650px) and (max-width:765px){
      display:flex;
      justify-content:space-between;
      margin-right: 400px;
    }

    @media only screen and (min-width: 540px)  and (max-width:650px){
      display:flex;
      justify-content:space-between;
      margin-right: 224px;
    }

    @media only screen and (min-width: 400px)  and (max-width:539px){
      display:flex;
      justify-content:space-between;
      margin-right: 111px;
    }

    @media only screen and (min-width: 376px)  and (max-width:400px){
      display:flex;
      justify-content:space-between;
      margin-right: 90px;
    }

    @media only screen and (min-width: 361px) and (max-width:375px){
      display:flex;
      justify-content:space-between;
      margin-right: 76px;
    }

    @media only screen and (max-width:360px){
      display:flex;
      justify-content:space-between;
      margin-right: 65px;
    }

  }
  .block-meudimdim{
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


  .container-two-meudimdim{
    width: 1300px;
    display:flex;
    justify-content:space-between;
    align-items:flex-end;
    margin-top:80px;
    max-height:500px;
    @media only screen and (max-width:850px){
      left: 19px;
      flex-direction:column;
      width: 90%;
      margin-right:20px;
      margin-left:20px;
      margin-top:0px;
      padding-bottom:250px;
    }
  }
  .text1-meudimdim-container2{
    font-weight: 700;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0.05em;
    color: #232323;
    @media only screen and (max-width:850px){
      font-size:14px;
    }
  }
  .text2-meudimdim-container2{
    font-weight: 700;
    font-size: 56px;
    line-height: 68px;
    color: #232323;
    @media only screen and (max-width:850px){
      font-size:24px;
      line-height: 24px;
    }
  }
  .text3-meudimdim-container2{
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
    .container-two-meudimdim{
      margin-left:40px;
      margin-right:40px;
    }
    img{
      width: 500px;
    }
    .texts-meudimdim-container2{
      width: 450px;
    }
  }
  @media only screen and (min-width:850px) and (max-width:1100px){
    .texts-meudimdim-container2{
      width: 400px;
      size: 12px;
    }
    img{
      width: 400px;
    }

    .container-two-meudimdim{
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
  background: linear-gradient(89.02deg, rgba(83, 183, 84, 0.15) 1.69%, rgba(255, 255, 200, 0.15) 98.31%);
  height:354px;
  display:flex;
  justify-content:center;
  z-index:1;

  h2{
    @media only screen and (max-width:850px){
      margin-top: -500px;
      margin-left:-40px;
    }
  }

  .container-three-meudimdim{
    position: relative;
    width: 1300px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media only screen and (min-width:850px) and (max-width:1350px){
      margin-left:80px;
    }
    @media only screen and (max-width:850px){
      margin-top: 70px;
    }

  }

  .img-container2{
    width: 100%;
    border-radius: 1%;
    width: 425px;
    right: -170px;
    position: relative;
    box-shadow: 0 0 2em rgba(123, 122, 122,0.6);
    //visibility: hidden;
    animation: animaBlur 0.9s forwards;

    @keyframes animaBlur {
      from{

      }
      to{
        filter: brightness(50%);
        box-shadow:0 0 2em rgba(123, 122, 122,0.1);
      }
    }

    @media only screen and (min-width:850px) and (max-width:1100px){
      width: 380px;
      margin-bottom: 9px;
      right: -150px;
    }

    @media only screen and (min-width:810px) and (max-width:850px){
      width: 219px;
      margin-right: 290px;
      margin-top:60px;
    }

    @media only screen and (min-width:650px) and (max-width:810px){
      width: 219px;
      margin-right: 360px;
      margin-top:60px;
    }

    @media only screen and (min-width:529px) and (max-width:650px){
      width: 219px;
      margin-right: 270px;
      margin-top:60px;
    }

    @media only screen and (min-width:395px) and (max-width:529px){
      width: 219px;
      margin-right: 220px;
      margin-top:60px;
    }

    @media only screen and (min-width:391px) and (max-width:395px){
      width: 219px;
      margin-right: 215px;
      margin-top:78px;
    }

    @media only screen and (min-width:380px) and (max-width:391px){
      width: 219px;
      margin-right: 206px;
      margin-top:75px;
    }

    @media only screen and (max-width:380px){
      width: 219px;
      margin-right: 205px;
      margin-top:72px;
    }


  }

  .img-service{
    margin-left: 110px;
    margin-right: auto;
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

  .animationMeuDimDim{
    position: absolute;
    right: 0px;
    margin-top:-220px;
    padding: 25px;
    height: 900px;
    overflow: hidden;
  }
  
  .containerDaAnimacaoMeuDimDim{
    position: absolute;
    width: 427px;
    right: 25px;
    animation: animaFiltro 1s forwards;
    visibility: visible;
    border-radius: 1%;
    bottom: 90px;


    @media only screen and (min-width:850px) and (max-width:1100px){
      
      margin-top: -720px;
      width: 380px;
    }

    @media only screen and (min-width:810px) and (max-width:850px){
      width: 220px;
      right: 235px;
      top:224px;
    }

    @media only screen and (min-width:650px) and (max-width:810px){
      width: 220px;
      right: 214px;
      top:224px;
    }

    @media only screen and (min-width:529px) and (max-width:650px){
      width: 220px;
      right: 125px;
      top:224px;
    }

    @media only screen and (min-width:395px) and (max-width:529px){
      width: 220px;
      margin-right: 49px;
      margin-bottom:330px;
    }

    @media only screen and (min-width:391px) and (max-width:395px){
      width: 220px;
      margin-right: 45px;
      margin-bottom:329px;
    }

    @media only screen and (max-width:391px){
      width: 220px;
      margin-right: 35px;
      margin-bottom:330px;
    }


    
    
  }

  @keyframes animaFiltro{
    from{
      visibility: hidden;
      bottom: -650px;
    }
    to{
      //box-shadow: 0 -270px 0 rgba(123, 122, 122,0.6);
      visibility: visible;
      bottom: 90px;
    }
  }
  .telaEscura{
    visibility: visible;
    //visibility: hidden;
    position: absolute;
    width: 425px;
    border-radius: 1%;
    right: 25px;
    animation: animaSegundaTela 0.9s forwards;

    @media only screen and (min-width:850px) and (max-width:1100px){
      margin-top: 90px;
      width: 380px;
    }

    @media only screen and (min-width:810px) and (max-width:850px){
      width: 218px;
      right: 235px;
      margin-top: 61px;
    }

    @media only screen and (min-width:650px) and (max-width:810px){
      width: 218px;
      right: 215px;
      margin-top: 61px;
    }

    @media only screen and (min-width:529px) and (max-width:650px){
      width: 218px;
      right: 125px;
      margin-top: 61px;
    }

    @media only screen and (min-width: 390px) and (max-width:529px){
      width: 210px;
      right: 80px;
      margin-top: 80px;
    }
    

    @media only screen and (max-width:390px){
      width: 220px;
      right: 60px;
      margin-top: 74px;
    }
  }

  @keyframes animaSegundaTela {
    0%{
      visibility: hidden;
    }
    25%{
      visibility: hidden;
    }
    50%{
      visibility: hidden;
    }
    65%{
      visibility: visible;
    }
    75%{
      visibility: visible;
    }
    100%{
      visibility: visible;
    }
  }
  .animacaoDoBotao{
    background-color: transparent;
    cursor: pointer;
    border: none;
    position: relative;
    width: 170px;
    height: 42px;
    z-index: 1;
    top: -60px;
    right: 27px;
    border-radius: 3%;

    @media only screen and (min-width:850px) and (max-width:1100px){
      right: 25px;
      width: 150px;
      margin-top: 799px;
    }

    @media only screen and (min-width:650px) and (max-width:850px){
      width: 90px;
      height: 30px;
      right: -288px;
      z-index: 999;
      margin-top: 5px;
    }

    @media only screen and (min-width:529px) and (max-width:650px){
      width: 100px;
      height: 30px;
      right: -280px;
      margin-top: 5px
    }

    @media only screen and (min-width:400px) and (max-width:529px){
      width: 100px;
      height: 30px;
      right: -280px;
      margin-top: 25px;
    }

    @media only screen and (max-width:400px){
      width: 100px;
      height: 30px;
      right: -280px;
      margin-top: 7px;
    }
  }
  .ultimaAnimacaoMeuDimDim{
    visibility: hidden;
    position: absolute;
    margin-top: -300px;
    width: 430px;
    
    right: 21px;
  }

  .fimDaAnimacao{
    visibility: visible;
    position: absolute;
    margin-top: 0px;
    width: 428px;
    border-radius: 1%;
    right: 23px;

    @media only screen and (min-width:850px) and (max-width:1100px){
      margin-top: 87px;
      margin-right: 1px;
      width:381px;
    }

    @media only screen and (min-width:820px) and (max-width:850px){
      width: 230px;
      height: 900px;
      margin-top: -170px;
      margin-right: 208px;
      margin-bottom:330px;
    }

    @media only screen and (min-width:650px) and (max-width:819px){
      width: 230px;
      height: 900px;
      margin-top: -660px;
      margin-right: 188px;
      margin-bottom:330px;
    }

    @media only screen and (min-width:529px) and (max-width:650px){
      width: 230px;
      height: 900px;
      margin-top: -660px;
      margin-right: 95px;
      margin-bottom:330px;
    }

    @media only screen and (min-width: 395px) and (max-width:529px){
      width: 230px;
      height: 900px;
      margin-top: -660px;
      margin-right: 45px;
      margin-bottom:330px;
    }

    @media only screen and (min-width: 390px) and (max-width:395px){
      width: 230px;
      height: 900px;
      margin-top: -660px;
      margin-right: 35px;
      margin-bottom:330px;
    }

    @media only screen and (min-width: 376px) and (max-width:389px){
      width: 230px;
      height: 900px;
      margin-top: -665px;
      margin-right: 40px;
      margin-bottom:330px;
    }

    @media only screen and (min-width: 371px) and (max-width:376px){
      width: 230px;
      height: 900px;
      margin-top: -665px;
      margin-right: 33px;
      margin-bottom:330px;
    }

    @media only screen and (max-width: 370px){
      width: 230px;
      height: 900px;
      margin-top: -660px;
      margin-right: 27px;
      margin-bottom:330px;
    }

  }

  @media only screen and (max-width:850px){
    //background-color: red;
    height:200%;
    margin-top: -200px;
    align-items:center;
    justify-content:center;
    margin-top:-90px;
    .container-three-meudimdim{
      width: 80%;
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
  .container-four-meudimdim{
    width: 1300px;
    @media only screen and (min-width:850px) and (max-width:1350px){
      margin-left:80px;
    }
  }
  
  .ajusteParaMobile{
    @media only screen and (max-width:850px){
    }

  }

  .trocaContexto{
    margin-top: 20px;
    @media only screen and (max-width:850px){
      visibility: hidden;
      margin-top: 20px;
    }
  }

  .trocaContexto2{
    visibility: hidden;
    margin-top:20px;
    @media only screen and (max-width:850px){
      width: 100%;
      visibility: visible;
      margin-top: -220px;
    }
  }

  @media only screen and (max-width:850px){
    align-items:center;
    .container-four-meudimdim{
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

  .imagemProjeto{
    width: 1300px;
    display:flex;
    justify-content:space-between;
    align-items:center;
  }

  .logo{
    border-radius: 50% !important;
  }
  
`