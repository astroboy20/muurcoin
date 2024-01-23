import styled from "styled-components";

export const AuthContainer = styled.div`
  background-color: #000;
  
  height: 100vh;
  text-align: center;
  color: #fff;
  display:flex ;
  
  .left {
    width: 50%;
    height: 100vh;
    background: url("/images/trading.png");
    background-repeat: no-repeat;
    /* background-size: cover; */
    background-position: center center;
  }
  .right {
    width:50% ;
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
    width: 100%;
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
  }
`;
