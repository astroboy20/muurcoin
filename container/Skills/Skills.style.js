import styled from "styled-components";

export const SkillContainer = styled.div`
  background-color: #000;
  color: #fff;
  padding: 4%;

  .skill-container {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }
  /* justify-content:flex-start ; */
  /* align-items:center ; */
  .text {
    text-align: left;
    width: 50%;
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
    /* align-items: center; */
    gap: 5px;
  }
  p {
    font-size: 12px;
  }
  .image {
  }
  h1 {
    font-size: 30px;
  }

  @media screen and (max-width: 800px) {
    .skill-container {
      flex-direction: column-reverse;
      text-align: center;
    }

    .text {
      width: 100%;
    }

    padding: 8% 4%;
    h1 {
      font-size: 24px;
    }
  }
`;
