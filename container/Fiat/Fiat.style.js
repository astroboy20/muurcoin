import styled from "styled-components";

export const FiatContainer = styled.div`
  margin-top: 100px;
  background-color: #131740;
  color: #fff;
  width: 100%;
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
    width: 60%;
  }
  .coins {
    background-color: #000;
    color: white;
    width: 30%;
    /* padding: 2%; */
    border-left: 1px solid #fff;
    width:40% ;
    height: auto;
    
  }
  tabel{
    height:fit-content ;
  }
  .coin-icon {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 800px;
    overflow-y: scroll;
    padding: 6% 2% 2% 2%;
    cursor: pointer;
  }
  ul::-webkit-scrollbar {
    display: none;
  }
  .exchange-transfer {
    padding: 3% 6%;
    background-color: #000;
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: #131722;
  }
  .actions {
    display: flex;
    gap: 25px;
  }
  
  .logs {
    width: 100%;
    background-color: #000;
    border-top: 1px solid #fff;
    padding: 2%;
  }
  .logs .text {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .small-coins {
    display: none;
  }
  .link{
    color:white ;
    font-weight:500 ;
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
      overflow-x: auto;
    }

    .table {
      width: 100%;
    }
    .buy-sell {
      padding: 7% 3% 20% 3%;
      width: 100%;
    }
    .actions {
      width: 100%;
      display: flex;
    }
    .small-coins {
      display: inline-block;
      background-color: #000;
      color: white;
      width: 100%;
      /* padding: 2%; */
      height:500px ;
      ;overflow-y:scroll;
      border-top: 1px solid #fff;
      overflow-x: scroll;
    }
    .coin-chart{
      width:auto ;
    }
    ul {
      height: 300px;
      overflow-y: scroll;
     
      cursor: pointer;
    }
    .exchange-transfer {
    padding: 6%;
    
  }
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 0% 6% 0 0;
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
    background-color: #8011D3;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 30%;
    margin: 0 auto;
  }

  .exchange-button:hover {
    background-color: purple;
  }

  .to {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
    .exchange-button {
      padding: 10px 16px;
    width: 100%;
  }
  }

`;

export const OptionItem = styled.div`
  display: flex;
  cursor: pointer;
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};
  color: ${(props) => (props.selected ? "white" : "white")};
`;
