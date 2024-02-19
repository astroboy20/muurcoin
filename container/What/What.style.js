import styled from "styled-components";

export const WhatContainer = styled.div`
  background-color: #101436;
  color: #fff;
  padding: 4%;

  .what-container {
    display: flex;
    justify-content: space-around;
  }
  .text {
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 35px;
  }
  .image {
    width: 100%;
  }
  .header {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  .body {
    display: flex;
    gap: 10px;
  }
  p {
    font-size: 16px;
  }
  .image {
    width: 100%;
  }
  .responsive-image {
    width: 100%;
    display: none;
  }
  h1 {
    font-size: 32px;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }
  .link {
    text-decoration: none;
  }
  /* .icon {
    border-radius: 9999px; 
    padding:5%;
    background-color: white;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  } */

  @media screen and (max-width: 800px) {
    .what-container {
      flex-direction: column;
      text-align: center;
      gap: 30px;
    }
    flex-direction: column;
    text-align: center;
    .image {
      /* width:500px ; */
      /* padding-right:4%; */
      display: none;
    }

    .responsive-image {
      display: block;
    }
    padding: 8% 4%;
    h1 {
      font-size: 24px;
    }
  }
`;
