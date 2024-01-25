import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #000;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 4%;
  }
  .left,
  .center,
  .right {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .bottom {
    text-align: center;
    padding: 3% 0;
  }
  .hr {
    background-color: #fff;
    width: 100%;
  }
 

  @media screen and (max-width: 800px) {
    padding: 8% 4%;

    .top{
        flex-direction:column ;
    }
    
  }
`;

export const Introduction = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .information {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    text-align: center;
    width: 30%;
  }
  .information h2 {
    font-size: 18px;
  }
  .information p {
    font-size: 14px;
  }

  @media screen and (max-width: 786px) {
    flex-direction: column;
    gap: 50px;
    padding: 6%;
    .information {
      width: 100%;
    }
  }
`;
