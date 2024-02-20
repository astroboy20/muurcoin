import styled from "styled-components";

export const SkillContainer = styled.div`
  background-color: #0d102d;
  color: #fff;
  padding: 4%;
  text-align: center;

  .skill-container {
    display: flex;
    justify-content: center;
    align-items: center;
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
    overflow-x: auto; /* Enable horizontal scrolling */
    display: flex;
    align-items: center;
    justify-content: flex-start; /* Align icons to the start */
    padding: 5px 0; /* Add padding to separate from edges */
  }
  .icons::-webkit-scrollbar {
    display: none;
  }
  .icon {
    display: flex;
    gap: 10px;
    background-color: #131740;
    padding: 2%;
    border-radius: 10px;
    margin: 10px;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: left;
  }
  .link {
    text-decoration: none;
  }
  @media screen and (max-width: 800px) {
    .skill-container {
      text-align: center;
    }

    .text {
      width: 100%;
    }
    .icons {
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row; /* Change direction to row for small screens */
      width: 100%;
    }
    .icon {
      gap: 10px;
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
