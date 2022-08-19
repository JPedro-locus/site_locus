import styled from 'styled-components';

export const StyledCarousel = styled.div`
  width: 100%;
  position: relative;
  background: linear-gradient(200.43deg, rgba(255,131,13,0.15) 0%,  rgba(242,242,97,0.15) 27.5%, rgba(255,255,255,0.15) 45.13%);
  padding-top: 50px;


  .rec-arrow {
    z-index: 2;
    align-self: flex-end;
    margin-bottom: -85px;
    background-color: transparent;
    box-shadow: none;
    position: absolute;
<<<<<<< HEAD
    @media only screen and (min-width:1315px){
      display:none!important;
    }


=======
    
>>>>>>> main
    &.rec-arrow-right {
      right: 41%;
    }

    &.rec-arrow-left {
      left: 41%;
    }

    /* &:hover {
      background-color: unset!important;
      box-shadow: none!important;
      color: unset;
    } */

    &.rec-arrow_active{
      background-color: none!important;
    }
  }

  .rec-pagination {
<<<<<<< HEAD
    margin-top: 70px;
    @media only screen and (min-width:1315px){
      display:none!important;
    }
=======
    margin-top: 55px;
    
>>>>>>> main
  }

  .rec-dot {
    background-color: #CAD5D1;
    box-shadow: 0 0 1px 3px #CAD5D1;
    margin: 0 10px;
    width: 9px;
    height: 9px;
  }

  .rec-dot_active {
    background-color: #00FFAC;
    box-shadow: 0 0 1px 3px #00FFAC;
  }

  @media only screen and (max-width:700px){
    .rec-arrow {

    &.rec-arrow-right {
      right: 24%!important;
    }

    &.rec-arrow-left {
      left: 24%;
    }

    }
  }


  @media only screen and (min-width:700px) and (max-width:900px){
    .rec-arrow {

    &.rec-arrow-right {
      right: 24%!important;
    }

    &.rec-arrow-left {
      left: 24%;
    }

    }
  }

`;

export const StyledCardContent = styled.div`
  padding: 20px 45px 50px 45px;
  filter: grayscale(100%)!important;
  position: relative;
  
`;


export const Item = styled.div`
 text-align: left;
  position: relative;
  z-index:1;
  opacity:0.50;
  background: #FFFFFF;

  img{
    height:500px;
    @media only screen and (max-width:900px){
      height:410px;
    }
  }

  .coming-projects{
    font-weight: 800;
    font-size: 72px;
    text-transform: uppercase;
    color: #232323;
    width: 80px;
    text-align:center;
    margin-top:-450px;
    padding-bottom:300px;
    margin-left:70px;
    align-items:center;
    display:flex;
    @media only screen and (max-width:900px){
      font-size:34px;
      margin-top:-320px;
      padding-bottom:220px;
      margin-left:90px;
    }
  }
  .link-card-project-carousel3{
    font-size:16px;
    color: #232323;
    font-weight: 500;
    font-weight: 900;
    padding-bottom:4px;
  }
  .link-card-project-carousel3:hover{
   
    border-bottom:2px solid #232323!important;
  }
  
  @media only screen and (max-width:900px){
    background-size: 100% var(--border-width);
    font-size:12px;
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    .link-card-project-carousel3{
      padding-bottom:4px!important;
      border-bottom:2px solid black;
    }
  }
  @media only screen and (max-width:400px){
    width: 90%;
  }
`


export const StyledItem = styled.div`
  text-align: left;
  position: relative;
  z-index:1;
<<<<<<< HEAD
  opacity:0.50;
  background: #FFFFFF;
  /* display: flex;
=======
  background: #FFFFFF;
   display: flex;
>>>>>>> main
  --border-color:#00FFAC;
  --border-width: 8px;
  --bottom-distance: 0px;
  color: #666;
  display: inline-block;
  background-image: linear-gradient(var(--border-color), var(--border-color));
  background-size: 6% var(--border-width);
  background-repeat: no-repeat;
  transition: background-size 0.3s;
  margin: 0px 0;
  background-position: 100% calc(100% - var(--bottom-distance));
  width: 380px;
  background-color: white; */
/* 
  &:hover{
    background-size: 100% var(--border-width);
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
<<<<<<< HEAD
  } */

  .coming-projects{
    font-weight: 800;
    font-size: 72px;
    text-transform: uppercase;
    color: #232323;
    width: 80px;
    text-align:center;
    margin-top:-450px;
    padding-bottom:300px;
    margin-left:70px;
    align-items:center;
    display:flex;

    @media only screen and (max-width:400px){
      font-size:34px;
      margin-top:-320px;
      padding-bottom:220px;
      margin-left:90px;
    }
  }
=======
  } 
>>>>>>> main

  .link-card-project-carousel3{
    font-size:16px;
    color: #232323;
    font-weight: 500;
    font-weight: 900;
    padding-bottom:4px;
  }

  .link-card-project-carousel3:hover{
   
    border-bottom:2px solid #232323!important;
  }

  
  @media only screen and (max-width:900px){
    background-size: 100% var(--border-width);
    font-size:12px;
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    .link-card-project-carousel3{
      padding-bottom:4px!important;
      border-bottom:2px solid black;
    }
  }
  @media only screen and (max-width:400px){
    width: 90%;
  }
`;

export const StyledCaseImage = styled.img`
  width: 100%;
`;

export const StyledCaseImageRepense = styled.img`
  width: 100%;
  margin-bottom: -64px;
  background: radial-gradient(123.35% 123.35% at 50% -15.89%, #047CFA 0%, rgba(35, 35, 35, 0) 85%);
`;

export const  StyledTitle = styled.p`
  font-size:32px;
  color: #232323;
  font-weight: 900;
  text-transform: uppercase;
  padding-bottom: 12px;
  padding-top: 22px;
  @media only screen and (max-width:900px){
    padding:0;
  }
`;

export const StyledText = styled.p`
  font-size:16px;
  color: #232323;
  font-weight: 500;


`;
