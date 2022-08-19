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
      background-color: none!important;
    }
  }

  .rec-pagination {
    margin-top: 70px;
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
  overflow:hidden;
`;

export const StyledItem = styled.div`
  text-align: left;
  display: flex;
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
  background-color: white;
  height: 600px;

  &:hover{
    background-size: 100% var(--border-width);
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
  }

  .link-card-project-carousel3{
    font-size:16px;
    color: #232323;
    font-weight: 500;
    font-weight: 900;
  }
  @media only screen and (max-width:400px){
    background-size: 100% var(--border-width);
    box-shadow: 0 0 2em rgba(161, 161, 161, 0.404);
    height:360px;
    .link-card-project-carousel3{
      padding-bottom:4px!important;
      border-bottom:2px solid black;
      font-size:12px;
    }
  }
  @media only screen and (max-width:400px){
    width: 90%;
  }
`;

export const StyledCaseImage = styled.img`
  width: 100%;
`;

export const  StyledTitle = styled.p`
  font-size:32px;
  color: #232323;
  font-weight: 900;
  text-transform: uppercase;
  @media only screen and (max-width:400px){
    font-size:24px;
    margin-top:-10px
  }
`;

export const StyledText = styled.p`
  font-size:16px;
  color: #232323;
  font-weight: 500;

`;

export const StyledImagePlataforms = styled.div`
  margin-left:-70px;
  margin-top:40px;
  @media only screen and (max-width:400px){
    display:none;
  }
`;
