import styled from "styled-components";

export const HeroContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3% 4% 30%;
  background: linear-gradient(to right, #eedae3, #edf0fa, #edf0fa);
  clip-path: polygon(50% 0%, 100% 0, 100% 71%, 68% 100%, 0% 75%, 0 0);
  color: black;
  margin-top: 110px;
  .section-link {
    text-decoration: none;
    color: #fff;
  }
  .hero-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    gap: 35px;
  }

  .hero-text h1 {
    font-size: 68px;
    font-weight: 600;
  }

  .hero-text h3 {
    font-size: 28px;
  }

  .hero-text p {
    font-size: 24px;
    color: #8358ff;
  }

  @media screen and (max-width: 786px) {
    margin-top: 100px;
    padding: 10% 4% 100%;
    overflow-x: none;

    .hero-text {
      width: 100%;
    }

    .hero-text h1 {
      font-size: 30px;
    }

    .hero-text h3,
    .hero-text p {
      font-size: 20px;
    }

    .hero-image {
      display: none;
    }
  }
`;

export const Introduction = styled.div`
  position: relative; /* Set position to relative for absolute positioning of children */
  z-index: 0; /* Ensure the next div is below the .hero-image */

  padding: 5%;
  border: 2px solid transparent;
  border-image: linear-gradient(to right, blue, #85226a, blue);
  border-image-slice: 1;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(11, 13, 62, 0.5);

  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    width: 30%;
  }

  .information h2 {
    font-size: 18px;
  }

  .information p {
    font-size: 14px;
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;
    gap: 50px;
    padding: 6%;

    .information {
      width: 100%;
    }
  }
`;
