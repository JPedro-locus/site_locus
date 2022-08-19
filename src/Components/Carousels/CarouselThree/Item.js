

import styled from "styled-components";

export default styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction:column;
  

  .sc-furwcr,
   .gnUtRS,
    .rec,
     .rec-pagination{
       background-color:red!important;
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