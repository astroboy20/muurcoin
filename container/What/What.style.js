import styled from "styled-components";

export const WhatContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 4%;

  .what-container {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .text {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .header {
    display: flex;
    gap: 5px;
    flex-direction: column;
  }
  .body {
    display: flex;
    gap: 5px;
  }
  p {
    font-size: 12px;
  }
  .image {
    width: 100%;
  }
  h1 {
    font-size: 30px;
  }

  @media screen and (max-width: 800px) {
    .what-container {
      flex-direction: column;
      text-align: center;
    }
    flex-direction: column;
    text-align: center;
    .image {
      /* width:500px ; */
      /* padding-right:4%; */
    }
    padding: 8% 4%;
    h1 {
      font-size: 24px;
    }
  }
`;
