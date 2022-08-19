import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto 50px auto;
  background: linear-gradient(89.02deg, rgba(88, 203, 251, 0.15) 1.69%, rgba(242, 242, 97, 0.15) 98.31%);
  padding: 53px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 16px 32px rgba(97, 104, 97, 0.15);
  position: relative;
  border-radius: 16px;
  @media only screen and (max-width:900px){
    margin: 0 0 60px auto;
    padding: 50px 20px;
    max-width:750px;
  }
`;

export const StyledContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  color: #616861;
  justify-content: space-between;
  padding: 0 40px;
  @media only screen and (max-width:900px){
    width:100%;
    padding: 0;
  }

  h3 {
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    color: #232323;
    margin-top: 0px;
    margin-bottom: 5px;
    @media only screen and (max-width:500px){
      font-size: 24px;
    }
  }

  p {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.05em;
    @media only screen and (max-width:500px){
      font-size: 12px;
    }
  }
`;

export const StyledImgContainer = styled.div`
  background-color: #6BFFCE;
  width: 128px;
  height: 128px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;

  @media only screen and (max-width:900px){
    position:absolute;
    height: 80px;
    width: 80px;
    left:10px;
    top:-35px;
    img{
      height: 60px;
      width: 60px;
    }
  }
`;

export const StyledButton = styled.button`
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #6BFFCE;
  outline: none;
  color: #616861;
  width: 200px;
  height: 40px;
  margin-top: 30px;
  font-size: 14px;
  cursor: pointer;

  @media only screen and (max-width:900px){
    box-shadow: 0 0 0.8em rgba(0, 255, 172, 1);
    border: 2px solid #6BFFCE;
    width: 140px;
    font-size:12px;
  }
`;