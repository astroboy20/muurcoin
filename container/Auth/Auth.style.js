import styled from "styled-components";

export const AuthContainer = styled.div`
  background: linear-gradient(to right, #eedae3, #edf0fa, #edf0fa);
  
  height: 100vh;
  text-align: center;
  color: #000;
  display:flex ;
  
  .text{
    font-size:20px ;
  font-weight:600 ;
  }
  .left {
    /* width: 50%;
    height: 100vh;
    background: url("/images/trading.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center; */
  }
  .right {
    width:100% ;
    padding: 2% 4%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
  .button {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 30%;
  }
  .link {
    text-decoration: none;
    color: #fff;
  }

  @media screen and (max-width:800px) {
    .left{
        display:none ;
    }
    .right{
        width:100% ;
    }
    .button {
    width: 100%;
  }
  }
`;
