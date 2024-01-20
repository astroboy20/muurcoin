import styled from "styled-components";

export const HeroContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
   padding: 2% 4%;
  color: white;
  background: linear-gradient(to right, #2627a5, #120c34, #85226a);

  margin-top: 100px;
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
    margin-top:100px ;
    .hero-text {
      text-align: center;
      width: 100%;
      gap: 20px;
    }
  }
`;
