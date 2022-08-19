import styled from 'styled-components';

export const StyledCardContainer = styled.div`
  width: 270px;
  height: 434px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  background: linear-gradient(89.02deg, rgba(88, 203, 251, 0.15) 1.69%, rgba(242, 242, 97, 0.15) 98.31%);
  border-radius: 16px;
  z-index: 2;
  margin: 0 10px;

<<<<<<< HEAD
  .shadow{
    visibility:hidden;
    transition-duration: 0.4s;
    position: absolute;
    width: 100%;
    bottom:4%;
  }
  .icon{
    bottom:5px;
    z-index:2;
    margin-left:1px;
  }

  :hover{
    margin-top:-10px;
    box-shadow: 0px 4px 28px rgba(97, 104, 97, 0.25);
    .shadow{
      visibility:visible;
      width:125%;
    }
  }
  @media only screen and (max-width:1150px){
    width: 220px;
  }
  
`;

export const StyledTitle = styled.h1`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: 240px;
  margin-top:10px;
  @media only screen and (max-width:1150px){
    width: 190px;
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.05em;
  color: #232323;
  text-align: left;
  margin-left:16px;
  margin-top:0px;
  height: 260px;
`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.05em;

  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const StyledImage = styled.div`
  height:700px;
  display: flex;
  align-items:end;
  margin-top:-40px;
  position:relative;
  justify-content:center;

=======

  .shadow{
    visibility:hidden;
    transition-duration: 0.4s;
    position: absolute;
    width: 100%;
    bottom:4%;
  }
  .icon{
    bottom:5px;
    z-index:2;
    margin-left:1px;
  }

  :hover{
    margin-top:-10px;
    box-shadow: 0px 4px 28px rgba(97, 104, 97, 0.25);
    .shadow{
      visibility:visible;
      width:125%;
    }
  }
  @media only screen and (max-width:1150px){
    width: 220px;
  }
  
`;

export const StyledTitle = styled.h1`
  font-weight: 800;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  width: 240px;
  margin-top:10px;
 
  @media only screen and (max-width:1150px){
    width: 190px;
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: 0.05em;
  color: #232323;
  text-align: left;
  margin-left:16px;
  margin-right:16px;
  margin-top:0px;
  height:110px;

`;

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.05em;
  margin-bottom:30px;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

export const StyledImage = styled.div`
  display: flex;
  align-items:end;
  position:relative;
  justify-content:center;
  height:110px;
  margin-bottom:20px;
  margin-top:20px;
>>>>>>> main
`