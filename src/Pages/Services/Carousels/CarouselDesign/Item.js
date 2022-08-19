

import styled from "styled-components";

export default styled.div`
  display: flex;
  align-items: center;
  height: 340px;
  width: 100%;
  flex-direction:column;
  background: linear-gradient(89.02deg, rgba(88, 203, 251, 0.15) 1.69%, rgba(242, 242, 97, 0.15) 98.31%);
  box-shadow: 0px 4px 28px rgba(97, 104, 97, 0.25);
  border-radius: 16px;
  margin-right:10px;
  margin-left:10px;
  margin-bottom: 20px;
  margin-top: 20px;
    
  .imgCarousel {
    height: 110px;
    margin-bottom:37px;
    margin-top:20px;
  }


  .titleCarousel {
    font-size: 16px;
    font-weight: 900;
    color: #616861;
    width: 190px;
    text-align: center;
    align-items: center;
    margin-top:6px;
    justify-content:center;
  }

  .textCarousel {
    max-width: 400px!important;
    font-size:12px;
    width: 160px;
    font-weight:600;
    color:#232323;
    margin-bottom:3px;
  }

  .button-carousel-design{
    font-size:12px;
    font-weight:700;
    color: #232323;
    border-bottom:2px solid  #232323;
    padding-bottom:3px;
  }

`;