

import styled from "styled-components";

import logoWebSummit from "./images/img-logo-web.svg";
import logoWebSummit1 from "./images/img-logo-web1.svg";
import webSummit from "./images/img-web.svg";
import webSummit1 from "./images/img-web1.svg";
import year2021 from "./images/2021.svg";
import year2021White from "./images/2021-branco.svg";
import year2022 from "./images/2022.svg";
import year2022White from "./images/2022-branco.svg";
import logoCollision from "./images/logo-collision.svg";
import logoCollisionColorful from "./images/collisionLogo.png"
import Collision from "./images/collisionEventoBlackWhite.jpg";
import CollisionColorful from "./images/collisionEvento.svg";
import logoEmergeBlackWhite from "./images/emerge-logo.svg";
import logoEmergeColorful from "./images/eMerge_Americas_Logo_3.jpg";
import emergeBlackWhite from "./images/emergeBlackWhite.svg";
import emergeColorful from "./images/emergeColorful.svg";


export default styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction:column;
  margin-top:63px;
  
  .item1-carousel-four{
    width: 348px;
    height: 421px;
    overflow:hidden;
    align-items:center;
    background-color:white;
    text-align:center;
    font-weight:900;
    p{
      font-size:16px;
      width: 348px;
      height: 64px
      padding: 5px;
      cursor:pointer;
    }
  }

  .item2-carousel-four{
    width: 348px;
    height: 421px;
    overflow:hidden;
    align-items:center;
    background-color:white;
    text-align:center;
    font-weight:900;
    p{
      font-size:16px;
      width: 348px;
      height: 64px
      padding: 5px;
      cursor:pointer;
    }
  }

  .item3-carousel-four{
    width: 348px;
    height: 421px;
    overflow:hidden;
    align-items:center;
    background-color:white;
    text-align:center;
    font-weight:900;
    p{
      font-size:16px;
      width: 348px;
      height: 64px
      padding: 5px;
      cursor:pointer;
    }
  }
  

  .sc-furwcr,
   .gnUtRS,
    .rec,
     .rec-pagination{
       background-color:red!important;
     }
     
  .txt-card-event-home:hover{
    font-size:18px;
    text-decoration:underline;
  }
<<<<<<< HEAD

  .img-logo-3{
    padding-bottom:30px;
    margin-top:30px;
    opacity:0.50;
    background: #FFFFFF;
  }
  .img-logo-web{
    background-image: url(${logoWebSummit});
    width:100%;
    height:133px;
  }
  .img-emerge{
    opacity:0.50;
    background: #FFFFFF;
    margin-top:-18px;
  }

  .img-logo-2{
   padding-bottom:20px;
   margin-top:50px;
   opacity:0.50;
    background: #FFFFFF;
  }

  .img-web-summit{
    background-image: url(${webSummit1});
    width:348px;
    height:224px;
    position:relative;
  }

=======
  /*************************** Anos ***************************/
  
>>>>>>> main
  .card2021{
    width: 311px;
    height: 122px;
    top:130px;
    left:15px;
    position: absolute;
    background-image: url(${year2021White}) ;
    background-repeat: no-repeat;
  }

  .card2022{
    width: 340px;
    height: 122px;
    top:130px;
    left:5px;
    position: absolute;
    background-image: url(${year2022White}) ; 
    background-repeat: no-repeat;
  }
  
  /***********************************************************/

  /******************* Parte do websummit *******************/

  .img-logo-web{
    background-image: url(${logoWebSummit});
    width:100%;
    height:133px;
  }

  .img-web-summit{
    background-image: url(${webSummit1});
    width:348px;
    height:224px;
    position:relative;
  }

  /***********************************************************/

  /******************* Parte do collision *******************/

  .img-logo-collision{
    background-image: url(${logoCollision});
    background-repeat: no-repeat;
    background-position: center; 
    width:100%;
    height:133px;
  }

  .img-collision{
    background-image: url(${Collision});
    width:348px;
    height:224px;
    position:relative;
  }

  /***********************************************************/

  /********************* Parte do emerge *********************/
  
  .img-logo-emerge{
    background-image: url(${logoEmergeBlackWhite});
    background-repeat: no-repeat;
    background-position: center; 
    width:100%;
    height:133px;
  }

  .img-emerge{
    background-image: url(${emergeBlackWhite});
    width:348px;
    height:224px;
    position:relative;
  }
  
  /***********************************************************/
  
  /* Web summit*/
  .item1-carousel-four:hover{
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    .img-web-summit{
      background-image: url(${webSummit});
      }
      .img-logo-web{
      background-image: url(${logoWebSummit1});   
    }

    .card2021{
      width: 311px;
      height: 122px;
      top:130px;
      left:15px;
      position: absolute;
      background-image: url(${year2021}) ;
      background-repeat: no-repeat;
    }
<<<<<<< HEAD
=======
  }

  /* Collision */
  .item2-carousel-four:hover{
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    .img-collision{
      background-image: url(${CollisionColorful});
      }
      .img-logo-collision{
      background-image: url(${logoCollisionColorful});   
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
>>>>>>> main
  }

  /* Emerger*/
  .item3-carousel-four:hover{
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    .img-emerge{
      background-image: url(${emergeColorful});
      }
      .img-logo-emerge{
      background-image: url(${logoEmergeColorful});   
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


  
<<<<<<< HEAD
  .item-coming-carousel4{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 348px;
    height: 421px;
    overflow:hidden;
    align-items:center;
    background-color:white;
  }

  .year-2022{
    position: absolute;
    font-weight: 800;
    font-size: 125.474px;
    line-height: 152px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    bottom:-92px;
  }

=======
>>>>>>> main
  .text-coming{
    font-weight:900;
    font-size:16px;
    width: 348px;
    height:64px
    padding:5px;
    text-align:center;
    color:#616861;
  }

  @media only screen and (max-width:900px){
    .txt-card-event-home{
    font-size:18px;
    text-decoration:underline;
    }
    .item1-carousel-four{
      box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
      .img-web-summit{
        background-image: url(${webSummit});
        }
      .img-logo-web{
        background-image: url(${logoWebSummit1});   
      } 
      .card2021{
        width: 311px;
        height: 122px;
        top:130px;
        left:15px;
        position: absolute;
        background-image: url(${year2021}) ;
        background-repeat: no-repeat;
      }
    }
  }
  
  @media only screen and (max-width:900px){
    .txt-card-event-home{
    font-size:18px;
    text-decoration:underline;
    }
    .item2-carousel-four{
      box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
      .img-collision{
        background-image: url(${CollisionColorful});
        }
      .img-logo-collision{
        background-image: url(${logoCollisionColorful});   
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
  }

  @media only screen and (max-width:900px){
    .txt-card-event-home{
    font-size:18px;
    text-decoration:underline;
    }
    .item3-carousel-four{
      box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
      .img-emerge{
        background-image: url(${emergeColorful});
        }
      .img-logo-emerge{
        background-image: url(${logoEmergeColorful});   
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
  }

`