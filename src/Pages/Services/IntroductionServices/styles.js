import styled from "styled-components";


export const MainServices = styled.section`
@media only screen and (max-width:899px){
  display: none;
}
.container-introduction-service{
  max-height: 780px;
  width: 100%;
  background: rgb(255,131,13);
  background: linear-gradient(90deg, rgba(255,131,13,0.25) 0%, rgba(242,242,97,0.25) 71.88%, rgba(255,255,255,0.25) 100%);
  margin-bottom: 880px;
  align-items:center;
  display: flex;
  flex-direction:column;

}
.container-main-services{
  align-self:center;
}


.container-one-services{
  display: flex;
  flex-direction: column;
  align-items:flex-end;
  justify-content:center;
  margin-top:40px;
  z-index: 2;
  width: 600px;
}

.service-path{
  display:flex;
  background-color: transparent;
}

.link-services{
  text-decoration:none!important;
  color:#232323!important;
  margin-top:16px;
}

.separator{
  margin-left:3px;
  margin-right:3px;
}

.texts-container-one-services{
  width:546px;
  color:#232323;
  z-index: 2;
}

.title-services-one{
  font-family: 'Suez One', serif;
  font-size:48px;
  font-weight:400;
}

<<<<<<< HEAD
=======
.text-services-one-2{
  line-height:28px;
  margin-top: 18px;
}

>>>>>>> main
.text-services-one{
  line-height:28px;
}
.animation-satellite{
  display:flex;
 align-self:end;
  position: absolute;
  right:0;
}
.img-moon-services{
  position:absolute;
  top:-300px;
  right:0;

}
.img-satellite-services{
  position:absolute;
  animation: animaSatellite 50s forwards infinite;
  z-index: 1;

  @media only screen and (min-width:900px) and (max-width:1040px){
    animation:none;
    width: 250px;
    top:-400px;
    right:20px;
  }
  @media only screen and (min-width:1040px) and (max-width:1200px){
    animation:none;
    width: 250px;
    top:-400px;
    right:80px;
  }
}


@keyframes animaSatellite {
  0% {
    top:-450px;
    right:150px;
  }

  25% {
    top:-320px;
    right:100px;
  }

  50% {
    top:-320px;
    right:200px;
  }

  100%{
    top:-450px;
    right:150px;
  }
}
@media only screen and (min-width:1600px){
  @keyframes animaSatellite {
    0% {
      top:-450px;
      right:500px;
    }

    25% {
      top:-320px;
      right:400px;
    }

    40% {
      top:-320px;
      right:540px;
    }

    70%{
      top:-400px;
      right:100px;
    }

    100%{
      top:-450px;
      right:500px;
    }
  }
}`

export const StyledCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1312px;
  margin: 70px auto;
  padding: 0 30px;
  box-sizing: border-box;

  @media only screen and (max-width:1150px){
    padding: 0 0px;
  }
`;

export const MainServicesMobile = styled.div`
  @media only screen and (min-width:900px){
    display:none;
  }

  .carousel-services-mobile{
    height:480px;
    display:flex;
    align-items:center;
    flex-direction:column;
   .text-carousel-services{
      font-size:24px;
      font-weight:700;
      color:#616861;
    }
  }
`

export const StyledBack = styled.div`
  position: absolute;
  top:120px;
  left:20px;
  background-color:transparent;
  border:none;
`