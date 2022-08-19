import styled from 'styled-components';

export const StyledProcessCard = styled.div`
  padding: 25px 25px 40px 25px;
  background: rgb(88, 203, 251);
  align-items: ${(props) => props.side === 'left' ? 'flex-end' : 'flex-start'};
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  z-index: 2;
  border-bottom: ${(props) => props.active ? '6px solid #00FFAC' : 'unset'};
  box-shadow: ${(props) => props.active ? '0px 4px 32px 0px #61686140' : 'unset'};
  background: linear-gradient(90deg, rgba(88, 203, 251, 0.15) 0%, rgba(242, 242, 97, 0.15) 100%);
  animation: ${(props) => props.hidden ? 'hideMe 1s forwards' : 'none'} ;
  opacity: 0;
  line-height: 25px;
  text-align: center;
  letter-spacing: 0.05em;
  font-size: 16px;

  &.right {
    margin: ${(props) => props.active ? '0px 0px 170px -148px' : '0px 0px 170px -95px'};
    transition: margin 1s;
    border-radius: 16px 0px 0px 0px;
  }

  &.left {
    margin: ${(props) => props.active ? '0px -148px 170px 0px' : '0px -95px 170px 0px'};
    transition: margin 1s;
    border-radius: 0px 16px 0px 0px;
  }

  @keyframes hideMe{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  @media only screen and (max-width: 1310px){
    letter-spacing: unset;
    padding: 25px 0px 40px 0px;
    font-size: 14px;
  }
`;

export const StyledFixedContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: margin 1s;

  &.right {
    margin-left: ${(props) => props.active ? '90px' : '40px'};

    @media only screen and (max-width: 1310px){
      margin-left: ${(props) => props.active ? '75px' : '20px'};
    }
  }

  &.left {
    margin-right: ${(props) => props.active ? '90px' : '40px'};

    @media only screen and (max-width: 1310px){
      margin-right: ${(props) => props.active ? '75px' : '20px'};
    }
  }
`;

export const StyledTitleCard = styled.h2`
  width: 349px;
  margin-top: 50px;
  color: #232323;
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 16px;
  font-family: 'Inter', serif;
  
`;

export const StyledTextCard = styled.p`
  max-height:190px;
  font-weight: 500;
  margin: 0;
  width: 450px;
`;

export const StyledIcon = styled.img`
  width: 125px;
  height: 125px;
  object-fit: fill;
  position: absolute;
  top: -60px;
`;

export const StyledDividerCircle = styled.div`
  position: absolute;
  z-index: 2;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  border: 2px solid #00FFAC;
  margin: 0;
  background-color: ${(props) => props.active ? '#00FFAC' : 'white'};

  
  &.right {
    right: unset;
    left: ${(props) => props.active ? '-12px' : '-65px'};
    transition: left 1s;
  }

  &.left {
    right: ${(props) => props.active ? '-12px' : '-65px'};
    left: unset;
    transition: right 1s;
  }
`;
