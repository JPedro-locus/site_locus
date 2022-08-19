

import styled from "styled-components";

import logoWebSummit from "./images/img-logo-web.svg";
import logoWebSummit1 from "./images/img-logo-web1.svg";
import webSummit from "./images/img-web.svg";
import webSummit1 from "./images/img-web1.svg";
import year2021 from "./images/2021.svg";
import year2021White from "./images/2021-branco.svg";
import year2022 from "./images/2022.svg";
import year2022White from "./images/2022-branco.svg";
import ImgCollisionBlackWhite from "./images/collisionEventoBlackWhite.jpg";
import ImgCollisionColorful from "./images/collisionEvento.svg"
import LogoCollisionBlackWhite from "./images/logo-collision.svg";
import LogoCollisionColorful from "./images/collisionLogo.png";
import LogoEmergeBlackWhite from "./images/emerge-logo.svg";
import LogoEmergeColorful from "./images/eMerge_Americas_Logo_3.jpg";
import ImgEmergeBlackWhite from "./images/emergeBlackWhite.svg";
import ImgEmergeColorful from "./images/emergeColorful.svg";

export default styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction:column;
  

  .txt-card-event{
    margin-bottom:18px;
    margin-top:26px;
    font-weight:700;
    color:#232323;

    @media only screen and (max-width:1024px){
      font-size:18px;
      text-decoration:underline!important;
      margin-bottom:15px;
    }
  }

  /* ######################## Web summit ######################## */

  .item1-carousel-five{
    width: 348px;
    overflow:hidden;
    align-items:center;
    background-color:#FFFFFF;
    text-align:center;
    font-weight:400;
    display:flex;
    flex-direction:column;
    height:700px;
    p{
      font-size:16px;
      width: 348px;
      height:64px
      padding:5px;
      cursor:pointer;
    }
  }

  .txt-card-event:hover{
    font-size:18px;
    text-decoration:underline;
    margin-bottom:15px;
  }
  .img-logo-web{
    background-image: url(${logoWebSummit});
    width:100%;
    height:135px;
  }

  .img-web-summit{
    background-image: url(${webSummit1});
    width:348px;
    height:224px;
    position:relative;
  }

  .card2022-1{
    width: 311px;
    height: 122px;
    top:130px;
    left:15px;
    position: absolute;
    background-image: url(${year2021White}) ;
    background-repeat: no-repeat;
  }

  .item1-carousel-five:hover{
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    .img-web-summit{
      background-image: url(${webSummit});
    }
    .img-logo-web{
      background-image: url(${logoWebSummit1});
      width:100%;
    }
    .card2022-1{
    width: 311px;
    height: 122px;
    top:130px;
    left:15px;
    position: absolute;
    background-image: url(${year2021}) ;
    background-repeat: no-repeat;
    }
  }
  @media only screen and (max-width:1024px){
    .item1-carousel-five{
      box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);    
    }
    .img-web-summit{
      background-image: url(${webSummit});
    }
    .img-logo-web{
      background-image: url(${logoWebSummit1})!important;     
    }
    .card2022-1{
      background-image: url(${year2021}) ;
      background-repeat: no-repeat;
    }
  }


  .txt1-card-event{
    width:290px!important;
    color:#616861;
    font-size:16px;
  }

  /* ############################################################ */

  /* ########################## eMerge ########################## */

  .item2-carousel-five{
    width: 348px;
    overflow:hidden;
    align-items:center;
    background-color:#FFFFFF;
    text-align:center;
    font-weight:400;
    display:flex;
    flex-direction:column;
    height:700px;
    p{
      font-size:16px;
      width: 348px;
      height:64px
      padding:5px;
      cursor:pointer;
    }
  }

  .img-logo-emerge{
    background-image: url(${LogoEmergeBlackWhite});
    width:100%;
    height:135px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .img-emerge{
    background-image: url(${ImgEmergeBlackWhite});
    width:348px;
    height:224px;
    position:relative;
  }

  .card2022{
    width: 338px;
    height: 122px;
    top:130px;
    left:5px;
    position: absolute;
    background-image: url(${year2022White}) ;
    background-repeat: no-repeat;
  }

  .item2-carousel-five:hover{
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    .img-emerge{
      background-image: url(${ImgEmergeColorful});
      background-repeat: no-repeat;
      width: 100%;
    }
    .img-logo-emerge{
    background-image: url(${LogoEmergeColorful});   
    }
    .card2022{
    width: 338px;
    height: 122px;
    top:130px;
    left:5px;
    position: absolute;
    background-image: url(${year2022}) ;
    background-repeat: no-repeat;
    }
  }

  @media only screen and (max-width:1024px){
    .item2-carousel-five{
      box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);    
    }
    .img-emerge{
      background-image: url(${ImgEmergeColorful});
    }
    .img-logo-emerge{
      background-image: url(${LogoEmergeColorful})!important;     
    }
    .card2021{
      background-image: url(${year2021}) ;
      background-repeat: no-repeat;
    }
  }
  

  /* ############################################################ */

  /* ######################## Collision ######################## */

  .item3-carousel-five{
    width: 348px;
    overflow:hidden;
    align-items:center;
    background-color:#FFFFFF;
    text-align:center;
    font-weight:400;
    display:flex;
    flex-direction:column;
    height:700px;
    p{
      font-size:16px;
      width: 348px;
      height:64px
      padding:5px;
      cursor:pointer;
    }
  }

  .img-logo-collision{
    background-image: url(${LogoCollisionBlackWhite});
    width:100%;
    height:135px;
    background-repeat: no-repeat;
    background-position: center;
  }

  .img-collision{
    background-image: url(${ImgCollisionBlackWhite});
    width:348px;
    height:224px;
    position:relative;
  }

  .item3-carousel-five:hover{
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    .img-collision{
      background-image: url(${ImgCollisionColorful});
    }
    .img-logo-collision{
    background-image: url(${LogoCollisionColorful});   
    }
    .card2022{
    width: 338px;
    height: 122px;
    top:130px;
    left:5px;
    position: absolute;
    background-image: url(${year2022}) ;
    background-repeat: no-repeat;
    }
  }

  @media only screen and (max-width:1024px){
    .item3-carousel-five{
      box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);    
    }
    .img-collision{
      background-image: url(${ImgCollisionColorful});
    }
    .img-logo-collision{
      background-image: url(${LogoCollisionColorful})!important;     
    }
    .card2022{
      background-image: url(${year2022}) ;
      background-repeat: no-repeat;
    }
  }

  /* ############################################################ */

  .item-upcoming-carousel-five{
    height:700px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    background-color:#FFFFFF;
    width:348px;
    text-align:center;
    color:#616861;
    font-size:16px;
    filter: grayscale(10%);
  }
  .background-event-upcoming{
    opacity:0.6;
  }

  .img-event-upcoming{
    width:268px;
    height:49px;
    margin-top:58px;
    margin-bottom:24px
  }

  .txt-card-event-upcoming{
    font-weight:700;
    margin-top:0px;
  }
  .txt1-card-event-upcoming{
    width: 290px;
    margin-left:25px;
  }
  /* ############################################################ */

`