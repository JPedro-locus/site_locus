import styled from 'styled-components';

export const StyledCarousel = styled.div`
  padding: 40px;
  width: 90%;

  .carousel {
    width: 100%;
    margin: 30px auto 30px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    .slick-track {
      display: flex;
      align-items: center;
    }

    .arrow-button {
      margin: 0 20px;
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .carousel-content {
      width: 100%;
      height: max-content;
    }

    .image {
      width: 350px;
      height: max-content;
      background-color: transparent;
      border: none;
      padding: 0;
      border-radius: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .imagem-teste {
        height: 350px;
        background-color: #232323;
        width: 200px;
        margin: auto;
        opacity: 0.6;
        border-radius: 16px;
        object-fit: cover;
      }
    }

    .slick-center {
      display: flex;
      justify-content: center;
      align-items: center;
      .image {
        width: max-content !important;

        .imagem-teste {
          height: 400px;
          width: 240px;
          opacity: 1;
        }
      }
    }
  }
`;
