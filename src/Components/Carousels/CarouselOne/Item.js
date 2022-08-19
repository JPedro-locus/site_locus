

import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction:column;
  
  .imgCarousel {
    height: 200px;
  }
  .imgCarousel4{
    margin-top:5px;
    height: 200px;
  }

  .titleCarousel {
    font-size: 24px;
    font-weight: 900;
    color: #616861;
    width: 180px;
    text-align: center;
    align-items: center;
    margin-top:36px
    justify-content:center;
  }

  .titleCarousel4 {
    margin-top:15px;
    font-size: 24px;
    font-weight: 900;
    color: #616861;
    width: 280px;
    text-align: center;
    align-items: center;
  
  }

  .textCarousel {
    max-width: 320px;
    text-align: center;
    margin-top:-10px;
  }

  @media only screen and (max-width:750px){
    .textCarousel {
      max-width: 250px!important;
    }
    .titleCarousel4,
    .titleCarousel {
    font-size:26px!important;
    max-width:250px!important;
  }
  }

  @media only screen and (min-width:750px) and (max-width:1025px){
    .textCarousel {
      max-width: 250px!important;
    }
    .titleCarousel4,
    .titleCarousel {
    font-size:26px!important;
    max-width:250px!important;
  }
 
`;