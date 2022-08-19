import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 210px;
  margin-right: 16px;
  align-self: ${(props) => props.position};
`;

export const StyledIndex = styled.p`
  font-weight: 900;
  font-size: 180px;
  line-height: 218px;
  letter-spacing: 0.05em;
  color: #CAD5D1;
  margin: 0;
`;

export const StyledDescription = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.05em;
  color: #000000;
  margin-top: 30px;
`;

export const StyledImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: -110px;
  margin-left: 80px;
`;

export const StyledImg = styled.img`
  width: 55px;
`;

export const StyledArrow = styled.img`
  margin-top: 12px;
  width: 20px;
`;
