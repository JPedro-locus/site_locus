import styled from "styled-components";

export const HeaderMain = styled.nav`
  @media only screen and (min-width: 0px) {
    width: 100%;
    height: 96px;
    background-color: white;
    display: flex;
    border-bottom: 2px solid #00FFAC;
    justify-content: space-between;
    align-items: flex-end;
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12pt!important;
    line-height: 24px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    z-index:10;
    font-style:normal!important;
    position: sticky;
    top: 0;
    
    .menu-language{
      display:flex;
      align-items: flex-end;
      margin-bottom: 20px;
    }
    .logo-header{
      width: 160px;
      margin-left: 80px;
      margin-bottom: 20px;
      @media only screen and (max-width:500px){
        margin-left:10px;
      }
    }

  }

`;

export const DivMobile = styled.div`
  @media only screen and (min-width: 0px) {
    width: 74%;
    display: grid;
    justify-items: center;
    color: white;
    margin-right: 10px;
    padding-bottom: 5px;
    cursor: pointer;
    z-index: 2;
    div p{
      display: none !important;
    }
    .frame{
      width: 50px;
      height: 50px;
      align-items: center;
      padding-left: 4.5px;
      cursor: pointer;
      display:flex;
      cursor: pointer;
    }
    .hamburguer-menu {
      height: 20px;
    }
    .stick1{
      width: 35px;
      height: 5px;
      background: #00FFAC;
      border-radius: 5px;
      position: absolute;
      transform: translateY(-10px);
      transition: all .2s ease-in-out;
      color:#00FFAC;
    }
    .stick1animate{
        width: 35px;
        height: 5px;
        background: #00FFAC;
        border-radius: 5px;
        position: absolute;
        transform: translateY(-10px);
        transition: all .2s ease-in-out;
        color:#00FFAC;
        transform: rotate(45deg);
        cursor: pointer;
    }
    .stick2{
        width: 35px;
        height: 5px;
        background: #00FFAC;
        border-radius: 5px;
        position: absolute;
        transition: all .2s ease-in-out;
    }
    .stick2animate{
      width: 25px;
      height: 5px;
      background: transparent;
      border-radius: 5px;
      position: absolute;
      cursor: pointer;
    } 
    .stick3{
      width: 35px;
      height: 5px;
      background: #00FFAC;
      border-radius: 5px;
      /*transform: rotate(45deg);*/
      transform: translateY(10px);
      transition: all .2s ease-in-out;
    }
    .stick3animate{
      width: 35px;
      height: 5px;
      background: #00FFAC;
      border-radius: 5px;
      transform: translateY(10px);
      transition: all .2s ease-in-out;
      transform: rotate(-45deg);
      cursor: pointer;
    }

    .news-letter{
      position: relative;
      top: 157px;
      right: 1760px;
      margin-right: -490px;
      cursor: auto;

      @media screen and (min-width: 1100px) and (max-width: 1366px){
        position: relative;
        top: 157px;
        right: 1370px;
        margin-right: -1290px;
      cursor: auto;
    }

    /*Modifiquei aqui*/
    @media only screen and (min-width:1300px) and (max-width:1400px){
      margin-right: -1085px;
    }

    /*modifique aqui NestHub Max*/
   @media only screen and (min-width:800px) and (max-height:1200px){
    margin-right: -1150px;
    }
  }

    .buttonForFooter{
      /* position: absolute;
      width: 295.66px;
      height: 49.92px;
      right: -310px;
      margin-top: 170px;
      //background-color: red;
      border: none;
      cursor: pointer; */

      

      @media screen and (min-width: 1401px){
        position: absolute;
        width: 295.66px;
        height: 49.92px;
        right: 1045px;
        margin-top: 170px;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }

      /*Modifiquei aqui desktop*/
      @media only screen and (min-width:1300px) and (max-width:1400px){
        width:300px;
        height: 49px;
        margin-right: 1355px;
        top: 100px ;
        position: absolute;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }

      /*modifique aqui NestHub Max*/
      @media only screen and (min-width:800px) and (max-width:1299px){
        width:300px;
        top: 100px;
        height: 49px;
        right: 650px;
        position: absolute;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
  @media only screen and (min-width: 414px) {
    margin-right: 20px;
  }
  @media only screen and (min-width: 768px) {
    margin-right: 80px;
    z-index: 99;
    width: 93px;
    
    div p{
      display: block !important;
    }
    .text-open-on,
    .text-close-on{
      color: #232323;
      margin-top: 0;
    }
    .text-open-off,
    .text-close-off{
      display: none !important;
      color: #232323;
    }
  }
`;

export const SideBar = styled.div`
  position: absolute;
  top: 98px;
  right: 0px;
  width: 100vw;
  height: calc(100vh - 98px);
  background: rgba(35, 35, 35, 0.95);
<<<<<<< HEAD
  opacity: 0.95
=======
  opacity: 0.95;
>>>>>>> main
  display: flex;
  margin: auto;
  align-items:end;
  @media only screen and (max-height:750px) and (min-width:900px) {
    overflow:scroll;
  }
  @media only screen and (max-height:660px) and (max-width:900px) {
    overflow:scroll;
  }
  .container {
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
<<<<<<< HEAD
    align-items: end;
    min-height:740px;
  }

  .box-1{
    width:400px;
    border-right: 1px solid #00FFAC;
    padding-bottom:150px;
=======
    align-items: center;
    min-height:680px;

    .img-line{
      height: calc(100vh - 180px);
      align-self: end;
      position: absolute;
      left: 50vw;
      min-height: 610px;
      @media only screen and (max-width:1050px) {
        display: none;
      }
    }

  }
  .box-1{
    width:400px;
    margin-left:-70px;
    padding-right:120px;
>>>>>>> main
    h1 {
        font-weight: 800;
        font-size: 40px;
        line-height: 48px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin: 0 0 40px 0;
        color: #F2F2F2;
        cursor:pointer;
      }
      h1:hover {
        font-size: 42px;
        text-decoration: underline;
      }
<<<<<<< HEAD
=======
    @media only screen and (max-width:1050px) {
      margin-left:0px;
      padding-right:0px;
    }
>>>>>>> main
  }
  .box-2{
    width:300px;
    padding-left:100px;
<<<<<<< HEAD
    padding-bottom:150px;
    color: #F2F2F2;
=======
    margin-top: 400px;
    color: #F2F2F2;
 
  }

  .wrap-box-2{
    align-self: flex-end;
>>>>>>> main
  }
  button{
    margin-top:40px;
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
    box-shadow: none;
    width: 320px;
    font-size:26px;
    font-weight: 600;
    .arrow {
      width: 20px;
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      }
    }
    button:hover {
      background: linear-gradient(180deg, rgba(0, 255, 172, 1) 0%, rgba(88, 203, 251, 1) 100%);
      box-shadow: 0px 16px 64px 0px #61686140;
      box-shadow: 0px 6px 8px 0px #61686126;
      color:#232323;
    }
  
    h2 {
      font-size: 16px;
      color: #F2F2F2;
      text-transform: lowercase;
    }
    h3 {
      font-size: 16px;
      color: #F2F2F2;
    }
    .social-icons {
      padding-left: 0px;
      img {
        width: 20px;
        padding-left: 12px;
      }
    }
    h4 {
      font-size: 12px;
      color: #F2F2F2;
    }
    .container-email-header{
      cursor:pointer;
    }
<<<<<<< HEAD

=======
  @media only screen and (max-height:750px) and (max-width:900px){
    overflow: scroll;
    display:block;
  }
  @media only screen and (max-height:1440px) and (min-width:900px){
    overflow: scroll;
    display:block;
  }
>>>>>>> main
  @media only screen and (max-width:900px){
    .container {
      flex-direction:column;
      align-items:center;
<<<<<<< HEAD
      justify-content:center;
=======
  
      height: 100vh;
>>>>>>> main
    }
    .box-1{
      text-align:center;
      width:90%;
      border-bottom: 1px solid #00FFAC;
<<<<<<< HEAD
      padding-bottom:0px;
=======
>>>>>>> main
      border-right:none;
      align-items:center;
      display:flex;
      flex-direction:column;
<<<<<<< HEAD
=======
      margin-top:80px;
>>>>>>> main
      padding-bottom:20px;
      h1 {
        font-weight: 800;
        font-size: 24px;
        line-height: 18px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin: 0 0 40px 0;
        color: #F2F2F2;
        cursor:pointer;
      }
      h1:hover {
        font-weight: 800;
        font-size: 24px;
        line-height: 18px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        margin: 0 0 40px 0;
        color: #F2F2F2;
        cursor:pointer;
      }
      button{
        font-weight:600;
        font-size: 16px;
        color: #616861;
        box-shadow: 0 0 1em rgba(0, 255, 172, 1);
        width: 220px;
      }
    }
    .box-2{
      text-align:center;
      padding-left:0px;
<<<<<<< HEAD
      padding-bottom:120px;
    }
    
=======
      margin-bottom: 40px;
      margin-top: 0px;
    }

>>>>>>> main
  }
  `