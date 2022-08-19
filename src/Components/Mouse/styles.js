import styled from 'styled-components';

export const StyledMouseContainer = styled.div`
  display: ${(props) => props.hidden ? 'none' : 'flex'};
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  right: 80px;
  bottom: 80px;
  z-index: 3;
`;

export const StyledArrow = styled.img`
  position: absolute;
  animation: downArrow 1s infinite; 
  bottom: -20px;

  @keyframes downArrow {
    0% {
      bottom: -25px;
    }
    100% {
      bottom: -35px;
    }  
  }
`;
