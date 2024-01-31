import styled from "styled-components";

export const SkillContainer = styled.div`
  background-color: #0d102d;
  color: #fff;
  padding: 4%;
  text-align: center;

  .skill-container {
    display: flex;
    justify-content: center;
    align-items: CENTER;
    flex-direction: column;
    gap: 30px;
  }

  .header {
    display: flex;
    gap: 20px;
    flex-direction: column;
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
  .icons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
  .icon {
    display: flex;
    gap: 10px;
    width: 20%;
    background-color: #131740;
    /* border: 1px solid #000; */
    padding: 2%;
    border-radius: 10px;
    margin: 10px;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  @media screen and (max-width: 800px) {
    .skill-container {
      /* flex-direction: column-reverse; */
      text-align: center;
    }

    .text {
      width: 100%;
    }
    .icons {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: column;
      width: 100%;
    }
    .icon {
      gap: 10px;
      width: 100%;
      /* background-color: #fff; */
      /* border: 1px solid #000; */
      padding: 5%;
      border-radius: 10px;
      margin: 10px;
    }
    .text {
      display: flex;
      flex-direction: column;
      text-align: left;
    }

    padding: 8% 4%;
    h1 {
      font-size: 24px;
    }
  }
`;
