import styled from "styled-components";


export const MainFooter = styled.section`
   height:656px;
   width:100%;
   display:flex;
   flex-direction:column;
   align-items:center;
   background-color:RGB(226, 226, 226);
   font-size:16px!important;
   color:#616861;
   border-top:2px solid #00FFAC ;

   @media only screen and (max-width:1000px){
     display:none;
   }
`;

export const FooterOne = styled.section`
   max-width:1100px;
   display:flex;
   margin-top:80px;
   margin-right: 140px;
   @media only screen and (min-width:1024px) and (max-width:1100px){
    max-width:1000px;
   }
`;

export const FooterTwo = styled.section`
    max-width:1100px;
    margin-top:61px;
    display: flex;
    flex-direction:row;
    margin-bottom:45px;

    .text-company-addresses{
      margin-top: 80px;
      padding-left: -65px;

      /*modifique aqui desktop*/
      @media only screen and (min-width:1300px) and (max-width:1400px){
        max-width: 50px; 
        margin-left: 5px;
      }

      /*modifique aqui NestHub Max*/
      @media only screen and (min-width:800px) and (max-height:1200px){
        max-width: 55px;
        margin-left: -45px;
        margin-right: -70px;
        padding-left: 20px;
      }

      /*modifique aqui Nest Hub
      @media only screen and (min-width:600px) and (max-height:1024px){
        max-width: 160px;
        margin-left: -100px;
        margin-right: -150px;
        padding-left: 20px;
      }*/
    }
    
    @media only screen and (min-width:1024px) and (max-width:1100px){
    max-width:1000px;
    }

    .footer-two-part1{
    display: flex;
    flex-direction:row!;
    align-items:flex-start;
    margin-right: 150px;
    font-weight: 500;
    margin-top: -10px;
    //background-color: red;
    p{
      width: 250px;
      margin-top:0px;
    }

    /*modifique aqui*/
      @media only screen and (min-width:1300px) and (max-width:1400px){
       margin-right: 250px;
       margin-left: -100px;
       padding: 0px;
      }  

      /*modifique aqui NestHub Max*/
      @media only screen and (min-width:800px) and (max-height:1200px){
        margin-right: 290px;
        margin-left: -165px;
        padding-left: 90px;
      }

      /*modifique aqui Nest Hub
      @media only screen and (min-width:600px) and (max-height:1024px){
        margin-right: 220px;
        margin-left: -10px;
        padding-left: 5px;
      }*/

    }
  .title-contact-us,
  .title-internationals-offices,
  .title-main-office{
    font-weight:900!important;
    font-size:16px;
    margin-bottom:16px;
    margin-top:16px;
    color:#616861!important;
<<<<<<< HEAD
    text-transform:uppercase;
    
=======
    //text-transform:uppercase;
  }
  .contact-email{
    cursor:pointer;
  }
  .adjustCopyBox{
    position: absolute;
    margin-top: 4px;
    margin-left: 22.22px;
    //bottom: 5px;
    //top: -3px;

>>>>>>> main
  }
  .contact-email{
    cursor:pointer;
  }
  .footer-two-part2{
<<<<<<< HEAD
    width:260px;
    border-right:2px solid #CAD4D1;
    border-left:2px solid #CAD4D1;
    padding-right:100px;
    padding-left:100px;
=======
    //background-color: red;
    width:260px;
    //border-right:2px solid #CAD4D1;
    //border-left:2px solid #CAD4D1;
    padding-right:200px;
    padding-left:-950px;
>>>>>>> main
    height:188px;
    margin-top:53px;
    text-align:left;
    @media only screen and (min-width:1024px) and (max-width:1100px){
      padding-right:0px;
      padding-left:50px;
    }
  }  

  .footer-two-part3{
    //background-color: red;
    margin-left: -1270px;
    padding: -50px;
    width: 10px;
    display: flex;
<<<<<<< HEAD
    flex-direction:column;
    align-items:end;
    justify-content:end;
    margin-top:50px;
    text-transform:uppercase;
=======
    flex-direction: row;
    align-items: end;
    margin-top: 235px;
    margin-bottom: 120px;
    text-transform:uppercase;
    //white-space: 50px;
    
>>>>>>> main
  }
    .footer-li-menu{
      
      list-style-type: none;
      margin-bottom:-45px;
      //border-spacing: 350px;
      text-decoration:none;
      color:#616861!important;
      font-weight: 600;
      //border-left: 1660px;
      padding: 60px;
      z-index: 999;

      /*modifiquei aqui*/
      @media only screen and (min-width:1300px) and (max-width:1400px){
        margin-left: 150px;
        margin-right: -50px;
        padding: 0px;
      }

      /*modifique aqui NestHub Max*/
      @media only screen and (min-width:800px) and (max-height:1200px){
        margin-left: 195px;
        margin-right: -200px;
        padding-left: 25px;
      }

      /*modifique aqui Nest Hub
      @media only screen and (min-width:600px) and (max-height:1024px){
        margin-left: 450px;
        margin-right: -400px;
        padding: 0px;
       // padding-left: -20px;
       // padding-right: 10px;
      }*/
    }

    .footer-li-menu:hover{
      //list-style-type: disc;
      
    }

    .link-li1-menu,
    .link-li2-menu,
    .link-li3-menu,
    .link-li4-menu,
    .link-li5-menu{
      text-decoration:none;
      color:#616861!important;
      border-bottom:1px solid transparent;
      transition: all 0.2s ease-out;
    }

    .link-li1-menu:hover,
    .link-li2-menu:hover,
    .link-li3-menu:hover,
    .link-li4-menu:hover,
    .link-li5-menu:hover{
      border-bottom:1px solid grey;
    }

    .news-letter-block{
      width: 200px;
      padding-top: 40px;
    }

    .main-footer-three{
      margin-top: 70px;
      max-width:100%;
      display: flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
      margin-right: 1300px;
    }

    .div-footer-three{
      margin-left: 45px;
      width: 1100px;
      display:flex;
      justify-content:space-between;
      margin-top:286px;
    }

    .social-media{
      display:flex;
      width:350px;
      justify-content:space-between;
      
     @media only screen and (min-width:1024px) and (max-width:1100px){
       margin-left:20px;
     }

     /*modifiquei aqui desktop*/
      @media only screen and (min-width:1300px) and (max-width:1400px){
        padding-left:100px;
        padding-right: 10px;
      }

      /*modifique aqui NestHub Max*/
      @media only screen and (min-width:800px) and (max-height:1200px){
        margin-left: 150px;
        margin-right: -150px;
        padding-left: 25px;
      }

      /*modifique aqui Nest Hub
      @media only screen and (min-width:600px) and (max-height:1024px){
        margin-left: 400px;
        margin-right: -150px;
        padding-left: 25px;
      }*/
  }

`;

export const FooterThree = styled.section`
    max-width:100%;
    border-top: 2px solid #CAD4D1;

    .main-footer-three{
      max-width:100%;
      display: flex;
      flex-direction:row;
      align-items:center;
      justify-content:center;
    }

    .div-footer-three{
      width: 1100px;
      display:flex;
      justify-content:space-between;
      margin-top:26px;
    }

    .social-media{
      display:flex;
      width:350px;
      justify-content:space-between;
      
     @media only screen and (min-width:1024px) and (max-width:1100px){
       margin-left:20px;
     }
  }

`;
export const MainFooterMobile = styled.section`
   padding-top:50px;
   overflow:hidden;
   color:#616861!important;
   border-top:2px solid #00FFAC ;
   z-index:1;
   background-color:rgba(202,212,209,0.25);
   @media only screen and (min-width:600px){
    border-top:2px solid #00FFAC ;
   }
   @media only screen and (min-width:1000px){
     display:none;
   }
`

export const FooterOneMobile = styled.section`
  margin-bottom:40px;
  margin-left:20px;

`

export const FooterTwoMobile = styled.section`
  border-bottom:2px solid #CAD4D1;
  text-transform:uppercase;

  .mobile-footer-menu{
    margin-left:25px;
    text-transform:uppercase;
  }
`

export const FooterThreeMobile = styled.section`
  margin-left:25px;
  .footer-two-part1{
    display:flex;
    border-bottom:2px solid #CAD4D1;
    padding-bottom:48px;
  }

  .title-internationals-offices,
  .title-main-office,
  .title-contact-us{
    font-weight:900;

  }

  .image-map-part1{
    margin-left:25px;
    bottom: 100px;
  }
  
`

export const FooterFourMobile = styled.section`
  margin-bottom:16px;
  .div-footer-three{
     display:flex;
     flex-direction:column;
     align-items:center
   }
   .social-media{
     width: 100%;
     display:flex;
     justify-content:space-evenly;
     margin-bottom:16px;
     margin-top:16px;
   }
`