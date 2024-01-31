import styled from "styled-components";

export const AuthContainer = styled.div`
 background: linear-gradient(to right, #744369, #4A3671, #3B3C8F);
  
  height: 100vh;
  text-align: center;
  color: #fff;
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
    background: #8358ff;
  border: none;
  color: #fff;
  padding: 15px 20px;
  border-radius: 999px;
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
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
  .link{
    width: 100%;
    /* padding:10px 20px ; */
    margin: 0 auto;
  }
  }
`;
