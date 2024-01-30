import styled from "styled-components";

export const HowContainer = styled.div`
  background-color: #131740;
  color: #fff;
  padding:  4%;

  h1 {
    font-size: 36px;
    margin-bottom: 40px;
    text-align:center ;
  }

  @media screen and (max-width: 800px) {
    padding: 8% 4%;
    h1 {
      font-size: 24px;
    }
  }
  
`;

export const Introduction = styled.div`
  /* padding: 5%; */
  display: flex;
  justify-content: space-between;
  gap:20px;
  /* background-color: rgba(11, 13, 62, 0.5); */
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

