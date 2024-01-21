import styled from "styled-components";

export const HeroContainer = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 2% 4%;
  color: white;
  background: linear-gradient(to right, #2627a5, #120c34, #85226a);
  margin-top: 100px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
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
    margin-top: 100px;
    padding:10% 4% ;
    .hero-text {
      text-align: center;
      width: 100%;
      gap: 20px;
    }
  }
`;

export const Introduction = styled.div`
  padding: 5%;
  border-top: 2px solid;
  border-image: linear-gradient(to right, blue, #85226a, blue);
  border-image-slice: 1;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, blue, #85226a, blue);
  border-image-slice: 1;
  border-radius: 10px;
  border-left: 1px solid;
  border-right: 1px solid;
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
    gap:50px;
    padding:6% ;
    .information {
      width: 100%;
    }
  }
`;
