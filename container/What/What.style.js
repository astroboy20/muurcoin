import styled from "styled-components";

export const WhatContainer = styled.div`
  background-color: #fff;
  color: #000;
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
    /* width:100% ; */
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
  h1 {
    font-size: 32px;
  }
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
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
