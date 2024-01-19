import styled from "styled-components";

export const HeroContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5%;
  .hero-text {
    display: flex;
    flex-direction: column;
    width: 40%;
    gap: 20px;
  }
  .hero-text h1 {
    font-size: 60px;
    font-weight: 700;
  }
  .hero-image {
    /* width: 60%; */
  }
  @media screen and (max-width: 786px) {
    margin-top:10% ;
    .hero-text {
      text-align: center;
      width: 100%;
      gap: 20px;
    }
  }
`;
