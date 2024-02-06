import styled from "styled-components";

export const FiatContainer = styled.div`
  margin-top: 130px;
  /* padding: 4%; */
  background-color: #131740;
  color: #fff;
  /* height:100dvh ; */

  /* flex-direction: column; */
  /* padding:4% 0; */
  gap: 30px;
  .header {
    width: 100%;
    background-color: #000;
    padding:2% ;
    display:flex ;
    justify-content:space-between ;
  }
  .coin-chart {
    display: flex;
    width: 100%;
    /* background-color:#000 ; */
    border-top: 1px solid #fff;
  }
  .chart {
    width: 80%;
  }
  .coins {
    background-color: #000;
    width: 30%;
    padding: 1%;
    border-left: 1px solid #fff;
  }
  .buy-sell {
    padding: 3% 2%;
    background-color: #000;
    display: flex;
    /* justify-content: space-between; */
    gap: 20px;
    background-color: #131722;
  }
  .buy,
  .sell {
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 50%;
  }
  input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    background-color: transparent;
  }
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    color: #fff;
  }
  .logs {
    width: 100%;
    background-color: #000;
    height: 400px;
    border-top: 1px solid #fff;
    padding:2%  ;
  }
  .logs .text{
    display:flex ;
    gap:20px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 100px;
    /* padding: 8% 4%; */
    .header {
      height: 40px;
    }
    .coin-chart {
      padding: 2%;
    }
    .chart {
      width: 100%;
    }
    .coins {
      display: none;
    }
    h1 {
      font-size: 30px;
    }
  }
`;
