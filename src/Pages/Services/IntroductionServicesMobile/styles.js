import styled from "styled-components";

export const MainIntroduction = styled.section`
  height:740px;
  width:100%;
  background: rgb(255,131,13);
  background: linear-gradient(90deg, rgba(255,131,13,0.25) 0%, rgba(242,242,97,0.25) 71.88%, rgba(255,255,255,0.25) 100%);
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  overflow:hidden;
  margin-bottom:170px;

  .back-services-mobile{
    text-decoration:none!important;
    color:#232323!important;
    margin-top:40px;
    margin-left:20px;
    font-weight:700;
    border-bottom:2px solid #232323;
    width: 55px;
    white-space: nowrap;
    @media only screen and (min-width:530px){
      margin-left:80px;
    }
  }

  .container-text-services-mobile{
    margin-top:50px;
    position:relative;
  }
  .title-services-mobile{
    margin-left:20px;
    font-size:32px;
    margin-bottom:24px;
    font-family: 'Suez One';
    width: 240px;
    color: #232323;
  }

  .text-services-mobile{
    margin-left:20px;
    width: 257px;
    height: 174px;
    left: 20px;
    top: 331px;
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;
    color: #616861;
  }

  .moon-img-services{
    margin-left:-100px;
    width: 650px;
  }
  .satellite-mobile-services{
    width: 150px;
    position:absolute;
    left:200px;
    top:-15px;
  }

  @media only screen and (max-width:330px){
    .satellite-mobile-services{
      width: 130px;
      right:0px;
    }
  }  
  @media only screen and (min-width:530px){
    .title-services-mobile{
      margin-left:80px;
    }
    .text-services-mobile{
      margin-left:80px;
    }

    .moon-img-services{
      margin-left:0px;
      width: 100%;
    }    
    .satellite-mobile-services{
      width: 200px;
      position:absolute;
      left:350px;
    }
}

.service-path{
  display:flex;
  background-color: transparent;
  margin-top:12px;
  margin-left:20px;
  @media only screen and (min-width:530px){
    margin-left:80px;
  }
}

.link-services{
  text-decoration:none!important;
  color:#232323!important;
  margin-top:16px;
}

.separator{
  margin-left:3px;
 }

`