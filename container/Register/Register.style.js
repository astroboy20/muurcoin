import styled from "styled-components";

export const RegisterContainer = styled.div`
  background: linear-gradient(to right, #744369, #4A3671, #3B3C8F);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  

  .form {
    width: 50%;
    padding: 2% 6%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .header {
    display: flex;
    align-items: center;
    font-size: 20px;
    justify-content: center;
    gap: 5px;
  }

  .link-div {
    text-align: right;
    padding: 3% 0;
    font-size: 14px;
    text-decoration: underline;
  }

  .link {
    color: #fff;
    text-decoration: none;
    text-align: right;
  }

  .signup-div {
    text-align: center;
    padding: 3% 0;
  }

  .signup {
    color: #fff;
    text-decoration: underline;
    text-align: right;
  }

  .form-container {
  }

  

  .button-style {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-size: 13.3px;
    font-weight: 600;
  }

  @media screen and (max-width: 789px) {
    padding: 5% 0;

    .btc {
      display: none;
    }

    .form {
      width: 100%;
      gap: 25px;
      left: 0;
    }
  }
`;
