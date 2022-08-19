import styled from 'styled-components';

export const StyledCarousel = styled.div`
  width: 100%;
  position: relative;

  .rec-arrow {
    z-index: 2;
    align-self: flex-end;
    margin-bottom: -100px;
    background-color: transparent;
    box-shadow: none;
    position: absolute;
    @media only screen and (min-width:1315px){
      display:none!important;
    }

    &.rec-arrow-right {
      right: 41%;
    }

    &.rec-arrow-left {
      left: 41%;
    }

    &:hover {
      background-color: unset!important;
      box-shadow: none!important;
      color: unset;
    }

    &.rec-arrow_active{
      background-color: transparent!important;
    }
  }

  .rec-pagination {
    margin-top: 70px;
    @media only screen and (min-width:1315px){
      display:none!important;
    }
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
      right: 18%!important;
    }

    &.rec-arrow-left {
      left: 18%;
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

.container-carousel{
  width: 1200px;
  height: 100vh;
}

.carouselButton{
  background-color: transparent;
  border:none;
  cursor: pointer;
  font-size: 40px;
}
}
@media only screen and (min-width:900px) and (max-width:1316px) {
  .container-carousel{
    width:1000px!important;
    justify-content: space-around;

  }
}

@media only screen and (max-width:900px){
  .container-carousel{
    width:400px!important;
    justify-content: space-around;
  }
}
.img-emerge1{
  padding-bottom:30px;
}
`