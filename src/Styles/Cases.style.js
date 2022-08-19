import styled from "styled-components";

export const MainCases = styled.section`
section{
  display:flex;
  flex-direction: column;
  width: 100%;
}
.rail-cases {
  display: flex;
  margin-top:66px;
  margin-left: 80px;

}

.link-cases {
  text-decoration: none !important;
  color: #232323 !important;
  margin-top: 15px;
}

.separator {
  margin-left: 3px;
  margin-right: 3px;
}


.main-cases{
  width: 100%;
  overflow:hidden;

}

.container-cases-one{
  display: flex;
  margin-bottom: 100px;
  @media only screen and (max-width:900px){
    display: none;
  }

}

.container-cases-three{
  display: flex;
  margin-top: 100px;
  @media only screen and (max-width:900px){
    display: none;
  }
}

.text-router{
  display: flex;
}


.left-cases-one{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content:center;
  width: 50%;
  margin-top:-96px;
}


.right-cases-one{
  width: 50%;
}

.img-projeto-case{
  height: 307px;
  width: 100%;
}


.title-cases{
  p{
  color: #232323;
  font-size: 72px;
  font-family: 'Suez One', serif;
  margin-bottom:0px;
  width: 1250px;
  }
  display:flex;
  justify-content:center;

  @media only screen and (max-width:900px){
    p{
      font-size: 32px;
      margin-top:80px;
      margin-left:-30px;
      margin-bottom:-70px;
    }
  }
}

.text1-cases-one{
  color: #232323;
  font-size: 52px;
  font-weight: 800;
}

.texts-case-one{
  width:580px;
  color: #232323;
  padding-left:75px;
}

.img-projeto1{
  width:648px;
  position: absolute;
  top:-235px;
  left:0px;
  background: radial-gradient(123.35% 123.35% at 50% -15.89%, #616861 0%, #ffffff 100%);
  @media only screen and (min-width:900px) and (max-width:1250px){
    width: 100%;
    top:-170px;
  }
}

.rectangle1-case{
  @media only screen and (min-width:900px) and (max-width:1250px){
    display: none;
  }
}

.text2-cases-one{
  height: 20px;
  width: 10px;
}

.text3-cases-one{
  color: #232323;
  font-weight: 900;
  margin-bottom: 240px;
  cursor:pointer;
  width: 188px;
}
.text3-cases-one:hover{
  border-bottom: 2px solid #232323;
  margin-bottom: 238px;
}

.container-cases-two{
  display: flex;
  @media only screen and (max-width:900px){
    display: none;
  }
}

.left-cases-two{
  display: flex;
  flex-direction: column;
  width: 50%;
}


.right-cases-two{
  width: 50%;
  display: flex;
  flex-direction: column;

}

.rectangle1-cases-background{
  background: rgb(255,131,13);
  background: linear-gradient(90deg, rgba(255,131,13,0.15) 0%, rgba(242,242,97,0.15) 100%); 
  height: 495px;
  width: 100%;
  position: relative;
}

.rectangle2-cases-background{
  background: rgb(88,203,251);
  background: linear-gradient(90deg, rgba(88,203,251,0.15) 0%, rgba(242,242,97,0.15) 100%);
  height: 495px;
  width: 100%;
  position: relative;
}

.img2-projeto2{
  position: absolute;
  top:-236px;
  right:0px;
  width:648px;
  background: radial-gradient(252.76% 136.28% at 50% -28.82%, #E2C4C3 10%, #3D3F8C 65%,  #ffffff 100%);
  @media only screen and (min-width:900px) and (max-width:1250px){
    width: 100%;
    top:-170px;
  }
}

.img4-projeto2{
  position: absolute;
  top:-236px;
  right:0px;
  width:648px;
  //background: none;
  background: radial-gradient(123.35% 123.35% at 50% -15.89%, #047CFA 0%, rgba(35, 35, 35, 0) 100%);
  
  @media only screen and (min-width:900px) and (max-width:1250px){
    width: 100%;
    top:-170px;
  }
}

.img-projeto2{
  position: absolute;
  top:0px;
  right:0px;
  background: rgb(255,255,255);
  @media only screen and (min-width:900px) and (max-width:1250px){
   display: none;
  }
}


.text1-cases-two{
  margin-top:80px;
  color: #232323;
  font-size: 52px;
  font-weight: 800;
}
.text2-cases-two{
  height: 20px;
  width: 10px;
}
.text3-cases-two{
  color: #232323;
  font-weight: 900;
  margin-bottom: 252px;
  cursor:pointer;
  width: 188px;
}
.text3-cases-two:hover{
  border-bottom: 2px solid #232323;
  margin-bottom: 250px;
}

.texts-case-two{
  width:580px;
  margin-left: 80px!important;
}

.title-icons{
  margin-left: -75px;
  display: flex;
}
.text-tile-icons{
  margin-left:17px;
  margin-right:18px;
  color: #616861;
  font-weight: 600;
}

.icons-project1,
.icons-project2{
  margin-left: -105px;
  display: flex;
  justify-content: center;
  padding-bottom:62px;
}

.image-project1,
.image-project2{
  margin-left:75px;
  margin-right:75px;
}



#textsCase,
#textsCase2,
#textsCase3{
  /* you can change these variables to control the border */
  --border-color:#00FFAC;
  --border-width: 17px;
  --bottom-distance: 0px; /* you can increase this */
  
  color: #666;
  display: inline-block;
  background-image: linear-gradient(var(--border-color), var(--border-color));
  background-size: 0% var(--border-width);
  background-repeat: no-repeat;
  transition: background-size 0.3s;
  margin: 0px 0;
  width: 700px;
}



#textsCase{
  background-position: 100% calc(100% - var(--bottom-distance));
}
#textsCase2{
   background-position: 0% calc(100% - var(--bottom-distance));
}
#textsCase3{
  background-position: 100% calc(100% - var(--bottom-distance));
}

.container-cases-three:hover,
.container-cases-two:hover,
.container-cases-one:hover{
  #textsCase,
  #textsCase2,
  #textsCase3{
   background-size: 100% var(--border-width);
   box-shadow: 0 0 0em rgba(161, 161, 161, 0.404);
 }

}

@media only screen and (max-width:1324px){
  .title-cases{
    margin-left:80px;
  }
  .texts-case-one{
    margin-left:150px;
  }
  .line{
    width: 240px;
  }
  .icons-project1{
    justify-content: flex-start;
    margin-left:70px;
  }
  .icons-project2{
    justify-content: flex-start;
    margin-left:58px;
  }
}

`

export const CasesOne = styled.section`
.container-carousel-six{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.div-carousel-six{
  margin-bottom: 140px;
  margin-top: 140px;
  width: 1312px;
}
@media only screen and (max-width:1324px){
  .div-carousel-six{
   width: 90%;
   min-width:340px;
  }

}

`

export const MobileCases = styled.section`
  width: 100%;
  color:#232323;
  margin-bottom:0px;
  
  .main-card1-mobile{
    position: relative;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media only screen and (min-width:901px){
    display:none;
  }
  }
  .main-card2-mobile{
    position: relative;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media only screen and (min-width:901px){
    display:none;
  }
  }

  .main-card3-mobile{
    position: relative;
    width: 100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    @media only screen and (min-width:901px){
    display:none;
  }
  }

  .card-mobile-cases{
    margin-top:119px;
    width: 295px;
    height:370px;
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    border-bottom:5px solid #00FFAC;
    z-index:2;
    background-color:white;
    img{ 
      width: 100%;
    }
    p{
      margin-left:30px;
      margin-bottom:2px;
    }
    @media only screen and (min-width:700px) and (max-width:900px){
      width:390px;
      height:410px;
    }
  }
  .title-case-mobile{
    font-size:24px;
    font-weight:800;
  }
  .subtitle-case-mobile{
    font-size:12px;
    font-weight:500;
  }

  .link-case-mobile{
    font-size:12px;
    font-weight:700;
    padding-bottom:4px;
    border-bottom:2px solid #232323;
    width: 140px;
  }

  .background-card-mobile-case{
    position: absolute;
    height: 277px;
    width: 70%;
    background: rgb(255,131,13);
    background: linear-gradient(90deg, rgba(255,131,13,0.15) 0%, rgba(242,242,97,0.15) 100%); 
    right:0;
    bottom:-30px;
    z-index:1;
  }

  .background2-card-mobile-case{
    position: absolute;
    height: 277px;
    width: 70%;
    background: rgb(88,203,251);
    background: linear-gradient(90deg, rgba(88,203,251,0.15) 0%, rgba(242,242,97,0.15) 100%);
    left:0;
    bottom:-30px;
    z-index:1;
  }

  .repense_config{
    background: radial-gradient(123.35% 123.35% at 50% -15.89%, #047CFA 0%, rgba(35, 35, 35, 0) 85%);
    height: 245px;
  }

`