
import styled from "styled-components";

export const MainAbout = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  color:#232323;
  overflow: hidden;

.main-about {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;

}
/* 
.div-green{
  top: 54vh;
  width: 60%;
  height: 338px;
  position: absolute;
  background-color: #6BFFCE;
  z-index: 1;
  @media only screen and (max-width:1080px){
    display: none;
  }
} */

.tower-about{
  @media only screen and (max-width:600px){
    display: none;
  }
}
.tower-about-mobile{
  @media only screen and (min-width:600px){
    display: none;
  }
}


.container-link{
  display:flex;
  background-color: transparent;
  margin-top:-80px;
  margin-bottom:120px;
  @media only screen and (max-width:800px){
    margin-left:20px;
    margin-bottom:-120px;
    margin-top:-120px;
  }
  @media only screen and (min-width:800px) and (max-width:1200px){
    margin-left:0px;
    margin-top:-120px;
  }


}

.link-about{
  text-decoration:none!important;
  color:#232323!important;
  margin-top:15px;
}

.separator{
  margin-left:3px;
  margin-right:3px;
}


.div-about-one{
  width: 100%;
  display: flex;
  justify-content: center;
  height: 930px;
  max-height:1300px;
  align-items:center;
  position: relative;

  @media only screen and (max-width:1200px){
    align-items:flex-start;

  }
  
  @media only screen and (max-width:600px){
    max-height:1000px;
  }
  @media only screen and (min-width:800px) and (max-width:1100px){

    justify-content:flex-start;
  }
}

.img-background{
  position: absolute;
  bottom:0;
  width: 100%;
  @media only screen and (max-width:600px){
    top:0px;
    height:900px;
  }
  @media only screen  and (min-width:600px) and (max-width:800px){
    bottom:400px;
  }
  @media only screen and (min-width:800px) and (max-width:1200px){
    bottom:400px;
  }
}

.img-about-one{
  margin-top: 340px;
  img{
    position: absolute;
    right:0;
    top:150px;
  }
  @media only screen and (max-width:600px){
    img{
      margin-top:-120px;
      width: 180px;
    }
  }
  @media only screen  and (min-width:600px) and (max-width:1200px){
    img{
      margin-top:-50px;
      width: 250px;
    }
  }
  /* @media only screen and (min-width:700px) and (max-width:1000px){
    margin-top:0px;
    img{
      margin-top:150px;
     width: 400px;
    }
  } */
 
}


.text-container-about-one{
  align-self:start;
  @media only screen and (max-width:1200px){
    margin-top:200px;
  }
  @media only screen and (min-width:800px) and (max-width:1200px){
    margin-left:80px;
  }
}
.container-about-one {
  display: flex;
  width: 1124px;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  @media only screen and (max-width:1200px){
    flex-direction:column;
    align-items:center;
    width: 100%;
  }
}

.text1-about {
  width: 410px;
  font-family: 'Suez One', serif;
  font-size: 58px;
  color: #232323;
  @media only screen and (max-width:800px){
    margin-top:150px;
    font-size: 32px;
    width: 60%;
    margin-bottom:34px;
    margin-left:20px;
  }

  @media only screen and (max-width:600px) and (min-height:800px){
    margin-top:50%;
  }
  @media only screen and (min-width:800px) and (max-width:1200px){
    font-size: 42px;
    margin-top:-50px;
  }
}
.text2-about {
  width: 500px;
  text-align: left;
  color: #616861;
  margin-top: -25px;
  font-size: 24px;
  background: linear-gradient(270deg, rgba(255, 255, 200, 0) 4.16%, #6BFFCE 48.85%, rgba(255, 255, 200, 0) 100%);
  padding-left:150px;
  padding-right:150px;
  padding-top:5px;
  padding-bottom:5px;
  margin-left:-150px;
  @media only screen and (max-width:900px){
    font-size:16px;
    margin-left:20px;
    padding-left:0px;
    padding-right:0px;
    padding-top:0px;
    padding-bottom:0px;
    width: 60%;
  }


}
.container-about-two {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  @media only screen and (max-width:1200px){
    margin-top:-350px;
  }
 
}

.title-container-about-two {
  font-family: 'Suez One', serif;
  font-size: 72px;
  color: #232323;
  font-weight: 400;
  @media only screen and (max-width:800px){
    font-size:32px;
  }
}

.text3-about {
  max-width: 1000px;
  padding-bottom: 100px;
  text-align: center;
  font-size: 24px;
  color: #616861;
  @media only screen and (max-width:800px){
    margin-left:20px;
    margin-right:20px;
    font-size:16px;
    padding-bottom:10px;
  }

}

.text13-about{
  font-weight: 900;
  font-size: 40px;
  line-height: 64px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #232323;
  padding-bottom: 150px;
  @media only screen and (min-width:800px) and (max-width:1330px){
    padding-bottom: 170px;
  }
  @media only screen and (max-width:400px){
    font-size:16px;
  }
}

.image-squad {
  background: rgb(255, 131, 13);
  background: linear-gradient(90deg, rgba(255, 131, 13, 0.15) 0%, rgba(255, 13, 91, 0.15) 100%);
  width: 100%;
  height: 392px;
  position: relative;
  display: flex;
  justify-content:center;

  @media only screen and (max-width:620px){
    height:150px;
  }
  @media only screen and (min-width:620px) and (max-width:830px){
    height:250px;
  }
  @media only screen and (min-width:830px) and (max-width:1330px){
    height:320px;
  }
  
}

.pic-border{
  position: absolute;
  bottom: -40px;
  z-index:2;
  width: 100%;
  @media only screen and (max-width:620px){
    top:-110px;
    img{
      width: 90%;
    }
  }
  @media only screen and (min-width:620px) and (max-width:830px){
    top:-140px;
    img{
      width: 90%;
    }
  }
  @media only screen and (min-width:830px) and (max-width:1100px){
    top:-190px;
    img{
      width: 90%;
    }
  }
  @media only screen and (min-width:1100px) and (max-width:1330px){
    top:-260px;
    img{
      width: 90%;
    }
  }
}
.pic-squad{
  position: absolute;
  bottom: 0px;
  z-index:1;
  width: 100%;
  @media only screen and (max-width:620px){
    top:-90px;
    img{
      width: 90%;
    }
  }
  @media only screen and (min-width:620px) and (max-width:830px){
    top:-115px;
    img{
      width: 90%;
    }
  }
  @media only screen and (min-width:830px) and (max-width:1100px){
    top:-150px;
    img{
      width: 90%;
    }
  }
  @media only screen and (min-width:1100px) and (max-width:1330px){
    top:-210px;
    img{
      width: 90%;
    }
  }
}

.container-about-three {
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
}

.text4-about {
  margin-top: 126px;
  margin-bottom:100px;
  text-align: center;
  font-family: 'Suez One', serif;
  font-size: 48px;
  color: #232323;
  font-weight: 400;
  @media only screen and (max-width:800px){
    width: 80%;
    font-size:32px;
    margin-bottom:17px;
  }

}

.cards-about {
  display: flex;
  justify-content: space-between;
  width: 1180px;
  @media only screen and (max-width:800px){
    width: 100%!important;
    flex-direction:column;
    background: rgb(88,203,251);
    background: linear-gradient(90deg, rgba(88,203,251,0.15) 0%, rgba(242,242,97,0.15) 100%);
    align-items: center;
    border-radius: 16px;
    box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.25);
    justify-content: space-between;
  }
  @media only screen and (min-width:800px) and (max-width:1156px){
    width: 80%!important;
  }
}

.title-card{
  color: #00B377;
  font-weight: 900 !important;
  margin-top: 52px;
  @media only screen and (max-width:800px){
    margin-top: 100px;
  }
}
.culture-card{
  font-size:24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 400px;
  @media only screen and (max-width:379px){
   position: absolute;
   top:970px;
  }
  @media only screen and (min-width:379px) and (max-width:800px){
   position: absolute;
   top:1000px;
  }
}

.card1-about {
  display: flex;
  flex-direction: column;
  width: 458px;
  height: 612px;
  text-align: center;
  background: rgb(88,203,251);
  background: linear-gradient(90deg, rgba(88,203,251,0.15) 0%, rgba(242,242,97,0.15) 100%);
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 4px 28px rgba(97, 104, 97, 0.25);
  justify-content: space-between;
  @media only screen and (max-width:800px){
    background: transparent;
    background: transparent;
    box-shadow:none;
    width: 90%;
  }
  @media only screen and (min-width:800px) and (max-width:1156px){
    margin-right:40px;

  }
}

.card2-about {
  height: 612px;
  display: flex;
  flex-direction: column;
  width: 458px;
  text-align: center;
  background: rgb(88,203,251);
  background: linear-gradient(90deg, rgba(88,203,251,0.15) 0%, rgba(242,242,97,0.15) 100%);
  align-items: center;
  border-radius: 16px;
  box-shadow: 0px 4px 28px rgba(97, 104, 97, 0.25);
  justify-content: space-between;
  @media only screen and (max-width:800px){
    background: transparent;
    background: transparent;
    box-shadow:none;
    width: 90%;
  }
  @media only screen and (min-width:800px) and (max-width:1156px){
    margin-left:40px;
    }
}
.text-card{
  font-size: 16px;
  padding-right: 16px;
  padding-left: 16px;
  margin-top:48px;
}

.pic-card1{
  width: 254px;
  margin-bottom:57px;
}

.pic-card2{
  width: 230px;
  margin-bottom:57px;
}

.container-about-four{
  width: 100%;
  background: rgb(88,203,251);
  background: linear-gradient(90deg, rgba(88,203,251,0.15) 0%, rgba(242,242,97,0.15) 100%);
  margin-top: -110px;
  @media only screen and (max-width:800px){
    margin-top: 200px;
  }
}

.carousel-about{
  margin-top:200px;
  justify-content: center;
  display: flex;
  height:500px;
  @media only screen and (max-width:810px){
    margin-top: 120px;
    width: 90%;
    margin-left:20px;
  }
}

.squad-about{
  height: 1000px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media only screen and (min-width:500px) and (max-width:750px){
    flex-direction:column;
    margin-bottom:150px;
    text-align: left;
    margin-left:20px;
  }
  @media only screen and (min-width:750px) and (max-width:800px){
    flex-direction:column;
    margin-bottom:200px;
    text-align: left;
    margin-left:20px;
  }
  @media only screen and (max-width:500px){
    flex-direction:column;
    text-align: left;
    margin-left:20px;
    margin-top:-100px;
    margin-bottom:20px;
  }
}

.title-squad-about{
  max-width: 680px;
  font-size: 48px;
  font-weight: 400;
  color: #232323;
  font-family: 'Suez One', serif;
  text-transform:uppercase;
  @media only screen and (max-width:800px){
    font-size:32px;
  }
  @media only screen and (min-width:800px) and (max-width:1156px){
    font-size:36px;
    margin-left:20px;
  }
}

.text-squad-about{
  font-size:24px!important;
  color: #616861;
  max-width: 579px;
  align-items: center;
  display: flex;
  flex-direction:column;
  text-transform:lowercase;
  @media only screen and (max-width:800px){
    font-size:16px!important;
    width:90%;
    align-items: flex-start;
  }
}

.button-about-squad{
  background-color: white;
  color: #616861;
  border: transparent;
  background-image: linear-gradient(white,white),radial-gradient(circle at top left,#00FFAC,#58CBFB);
  background-origin: border-box;
  background-clip: content-box,border-box;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 0.2rem;
  border-radius: 8px;
  z-index: 2;
  width:200px;
  font-weight:500;
  &:hover {
    background: linear-gradient(180deg, rgba(0, 255, 172, 1) 0%, rgba(88, 203, 251, 1) 100%);
    box-shadow: 0px 16px 64px 0px #61686140;
    box-shadow: 0px 6px 8px 0px #61686126;
  }

  p {
    padding: 28px 10px 28px 30px;
    margin: 5px;
    font-weight: 600;
    font-size: 14px;
    font-family: 'Inter', serif;
    text-transform:uppercase;
  }

  .arrow {
    margin-right: 20px;
    width:20px;
  }

  @media only screen and (max-width:900px){
    border:3px solid #00FFAC;
    padding: 0;
    margin-bottom:30px;
    box-shadow: 0 0 1em rgba(0, 255, 172, 1);
    p {
      padding: 5px 11px;
      text-transform:uppercase;
    }
    &:hover {
      background:white; 
      box-shadow: 0 0 1em rgba(0, 255, 172, 1);
    }
  }

  }
  

.button-about-squad:hover{
  transition: 0.5s;
    background: rgb(0,255,172)!important;
    background: linear-gradient(90deg, rgba(0,255,172,1) 0%, rgba(88,203,251,1) 100%)!important;
    color:black!important;
    background-clip: none;
    color: #232323;
}

.dialogue{
  @media only screen and (max-width:800px){
    display: none;
  }
}

.dialogue-mobile{
  overflow:hidden;
  width: 100%;
  margin-top:50px;
  margin-bottom:-300px;
  img{
    width: 170%;
    margin-left:-40%;
  }
  @media only screen and (min-width:800px){
    display: none;
  }
}

#mouse-about{
   @media only screen and (max-width:800px){
    display: none;
  }
}
@media only screen and (max-width:1124px){

  .text3-about {  
    max-width: 850px;
  }


  
}

@media only screen and (max-height:960px){
  .div-green{
    top: 55vh;
  }
}


@media only screen and (min-height:1400px){
  .div-green{
    top: 52vh;
  }
}

`