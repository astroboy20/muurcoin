import styled from "styled-components";

export const DashboardContainer = styled.div`
  margin-top: 100px;
  /* padding: 4%; */
  /* background-color: #131740; */
  color: #fff;
  width: 100%;
  /* height:100dvh ; */

  /* flex-direction: column; */
  /* padding:4% 0; */
  gap: 30px;

  .transaction-chart {
    display: flex;
    /* justify-content:space-evenly ; */
    padding: 4%;
    gap: 20px;
   
  }
  .spot {
    background: rgba(255, 255, 255, 0.26);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.1px);
    -webkit-backdrop-filter: blur(13.1px);
    border-radius: 10px;
    padding: 15px 20px ;
    width: 30%;
    font-size:24px ;
    background-image:url("images/dashboard-bg.jpg") ;
    background-size:cover ;
  }
  
  #chart {
    /* background: rgba(255, 255, 255, 0.26);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.1px);
    -webkit-backdrop-filter: blur(13.1px);
    border-radius:0 0 10px 10px; */
    /* width: 100%; */
    height:300px ;
    margin: auto auto;
    align-items:center ;
    display:flex ;
    justify-content:space-between ;
    color: white;
  }
  .link {
    color: white;
    font-weight: 500;
  }
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
  .line{
    display:flex ;
    flex-wrap:wrap ;
    gap:20px;
    justify-content:center ;
    padding:2% 0 ;
    font-size:20px ;
    
  }
  .line-chart{
    
    border-radius:10px ;
    padding:2% 0 ;
  }
  .chart {
    width: 80%;
    display:flex ;
    flex-direction:column ;
    text-align:center ;

  }
  .coins {
    background-color: #000;
    color: white;
    width: 30%;
    padding: 2%;
    border-left: 1px solid #fff;
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
    height: 600px;
    overflow-y: scroll;
    padding: 2%;
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
  input {
    /* width: 100%; */
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
  }
  button {
    width: 100%;
    margin: 0 auto;
    padding: 16px 20px;
    border: none;
    border-radius: 10px;
    color: #fff;
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
      margin-top: 50px;
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
    .transaction-chart {
   flex-direction:column ;
    /* justify-content:space-evenly ; */
    padding: 4%;
    gap: 20px;
  }
  .spot {
    background-image:url("images/dashboard-bg.jpg") ;
    background-size:cover ;
    border-radius: 10px;
    padding: 5% ;
    width: 100%;
  }
  }
`;
