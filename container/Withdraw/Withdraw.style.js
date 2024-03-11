import styled from "styled-components";

export const WithDrawStyle = styled.div`
  margin-top: 100px;
  background: linear-gradient(to right, #744369, #4a3671, #3b3c8f);
  padding: 0 4%;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 40px;
  .header{
    font-size: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 6%;
  }
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
    background-color: #8011d3;
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
    margin-top: 100px;
    gap: 20px;
    .header {
      font-size: 30px;
    }

    .logs {
      /* margin-top: 50px; */
      padding: 2%;
      overflow-x: auto;
      /* box-shadow: 2px 4px 4px 0px #0000001f; */
      background: linear-gradient(to right, #744369, #4a3671, #3b3c8f);
      padding: 4%;
    }
    .logs .text p{
        font-size:20px ;
    }
    .exchange-button {
      padding: 10px 16px;
      width: 100%;
    }

    .table {
      width: 100%;
    }
  }
`;
