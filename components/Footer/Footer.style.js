import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #0D102D;
  color: #fff;
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 2% 4%; /* Added padding for better spacing */
  
  .top {
    display: flex;
    justify-content: space-between;
    width: 100%;
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
    padding: 1% 0;
  }
  h3{
    font-size:16px ;
  }
  p{
    font-size:12px ;
  }
  .hr {
    background-color: #fff;
    width: 100%;
    margin: 10px 0; /* Adjusted margin for better spacing */
  }

  @media screen and (max-width: 800px) {
    padding:7% 4% ;
    .top {
      flex-direction: column;
    }
  }
`;
