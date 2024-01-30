import styled from "styled-components";

export const StepContainer = styled.div`
  background-color: #f5f8fa;
  color: #000;
  padding: 4%;
  text-align: center;

  .skill-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .header {
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  span {
    color: #8358ff;
    font-size: 13px;
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
    font-size: 20px;
    margin-bottom: 10px;
  }
  .informations {
    display: flex;
  }
  .information {
    display: flex;
    flex-direction: column;
    text-align: left;
    gap: 10px;
    width: 35%;
    background-color: #fff;
    border: 1px solid #000;
    padding: 3%;
    border-radius: 10px;
    margin: 10px;
  }
  .text {
    display: flex;
    flex-direction: column;
    text-align: left;
  }

  .percentage {
    background: linear-gradient(to right, #eedae3, #edf0fa, #edf0fa);
    padding:10% 5%;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    text-align: left;
  }

  .percentage .text {
    width: 100%;
  }
  .button {
    width: 20%;
    background: #8358ff;
    border: none;
    color: #fff;
    padding: 3px 20px;
    border-radius: 999px;
    color: white;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 800px) {
    .skill-container {
      text-align: center;
    }

    .informations {
      flex-direction: column;
    }
    .information {
      gap: 10px;
      width: 100%;
      background-color: #fff;
      border: 1px solid #000;
      padding: 10% 3%;
      border-radius: 10px;
      margin: 10px auto;
    }
.percentage {
    padding:10% 5%;
    display: flex;
    gap:30px;
    flex-direction:column ;
    border-radius: 20px;
    text-align: left;
  }
  .button {
    width: 50%;
    padding: 10px 20px;
  }
    padding: 8% 4%;
    h1 {
      font-size: 24px;
    }
  }
`;
