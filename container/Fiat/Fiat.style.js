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
  .coin-icon{
    display:flex ;
    gap:15px;
    align-items:center ;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 600px;
    overflow-y: scroll;
    padding: 6% 2% 2% 2%;
    cursor: pointer;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  .buy-sell {
    padding: 3% 2%;
    background-color: #000;
    display: flex;
    justify-content: center;
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
  .from,
  .to {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  /* input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  } */
  .currency-select {
    padding: 10px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 10px;
    width: 100%;
  }
  .amount-input {
    padding: 10px 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100px;
    margin-right: 10px;
    width: 100%;
  }
  .exchange-button {
    padding: 10px 16px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .exchange-button:hover {
    background-color: darkgreen;
  }
  /* button {
    width: 100%;
    margin: 0 auto;
    padding: 16px 20px;
    border: none;
    border-radius: 10px;
    color: #fff;
  } */
  .logs {
    width: 100%;
    background-color: #000;
    border-top: 1px solid #fff;
    padding: 2%;
  }
  .logs .text {
    display: flex;
    flex-direction:column ;
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
    .logs {
      padding: 2%;
      overflow-x: auto; /* Enable horizontal scroll on smaller screens */
    }

    .table {
      width: 100%; /* Ensure the table occupies the full width */
    }
    .buy-sell {
      padding: 7% 3% 20% 3%;
      width: 100%;
    }
    .buy,
    .sell {
      width: 100%;
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
      cursor: pointer;
    }
  }
`;


export const OptionItem = styled.div`
  padding: 13px;
  cursor: pointer;
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};
  color: ${(props) => (props.selected ? "white" : "#1d1465")};
`;