import styled from "styled-components";

export const LoginContainer = styled.div`
  background-color: #000;
  color: #fff;
  height: 100dvh;
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
  /* padding: 2% 4%; */
  .btc {
    width: 50%;
    height: 100vh;
    background: url("/images/login.png");
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-position: center center;
  }
  .form {
    width: 50%;
    padding: 2% 6%;
    display: flex;
    flex-direction: column;
  }
  .header {
    display: flex;
    gap: 5x;
    align-items: center;
    font-size: 20px;

    justify-content: center;
  }
  .link-div {
    text-align: right;
    padding: 3% 0;
    font-size: 14px;
    text-decoration: underline;
  }
  .link {
    color: #fff;

    text-align: right;
    text-decoration: none;
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
  .or {
    margin: 5%;
    text-align: center;
    position: relative;
  }
  .or::before {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #d4d6dd;
    left: 0;
    top: 50%;
    position: absolute;
  }
  .or::after {
    content: "";
    display: block;
    width: 100px;
    height: 1px;
    background: #d4d6dd;
    right: 0;
    top: 50%;
    position: absolute;
  }
  .button-style {
    display: flex;
    align-items: center;
    /* text-align:center ; */
    justify-content: center;
    gap: 5px;
    font-size: 13.3px;
    font-weight: 600;
  }

  @media screen and (max-width: 789px) {
    padding: 5% 0%;

    .btc {
      display: none;
    }
    .form {
      width: 100%;
      gap: 25px;
    }
  }
`;
