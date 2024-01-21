import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: #ea4ba7;
  border: none;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
`;
export const SmallButtonStyle = styled.button`
  background: #ea4ba7;
  border: none;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  width:40% ;
  @media screen and (max-width:800px) {
    width:60% ;
    margin:0 auto ;
  }
`;
