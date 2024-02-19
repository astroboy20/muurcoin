import styled from "styled-components";

export const OverviewContainer = styled.div`
  margin-top: 100px;
  padding: 4%;
  background-color: #131740;
  color: #fff;
  /* height:100dvh ; */
  display: flex;
  flex-direction: column;
  gap: 30px;
  h1 {
    font-size: 42px;
  }
  @media screen and (max-width: 800px) {
   margin-top:100px ;
   padding:8% 4% ;
   h1 {
    font-size: 30px;
  }
  }
`;
