import styled from "styled-components";

export const FiatContainer = styled.div`
  margin-top: 130px;
  /* padding: 4%; */
  background-color: #131740;
  color: #fff;
  width: 100%;
  /* height:100dvh ; */

  /* flex-direction: column; */
  /* padding:4% 0; */
  gap: 30px;
  .header {
    width: 100%;
    background-color: #000;
    padding: 2%;
    display: flex;
    flex-direction: column;
  }
  .coin-chart {
    display: flex;
    width: 100%;
    border-top: 1px solid #fff;
  }
  .chart {
    width: 80%;
  }
  .coins {
    background-color: #000;
    color: white;
    width: 30%;
    padding: 2%;
    border-left: 1px solid #fff;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 700px;
    overflow-y: scroll;
    padding:2% ;
  }
  .buy-sell {
    padding: 3% 2%;
    background-color: #000;
    display: flex;
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
    color: #fff;
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
    padding: 2%;
  }
  .logs .text {
    display: flex;
    overflow-y: scroll;
    gap: 20px;
  }
  .small-coins {
    display: none;
  }
  @media screen and (max-width: 800px) {
    margin-top: 100px;
    .header {
      padding: 5% 2%;
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
    .log {
      overflow-x: scroll;
      width: 120%;
    }
    .buy-sell {
      padding: 7% 3% 20% 3%;
    }
    .small-coins {
      display: inline-block;
      background-color: #000;
      color: white;
      width: 100%;
      padding: 2%;
      height: auto;
      border-top: 1px solid #fff;
    }
    ul {
      height: 300px;
      overflow-y: scroll;
    }
  }
`;
