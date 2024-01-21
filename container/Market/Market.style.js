import styled from "styled-components";

export const MarketContainer = styled.div`
  background-color: rgb(37, 37, 39);
  color: white;
  padding: 6% 4%;
  display: flex;
  flex-direction: column;
  /* gap:6000px */
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 800px) {
    padding: 8% 4%;
    h1 {
      font-size: 24px;
    }
  }
`;