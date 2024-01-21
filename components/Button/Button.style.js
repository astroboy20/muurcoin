import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: #ea4ba7;
  border: none;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  width:100% ;
`;
export const TransparentButton = styled.button`
  background: none;
  border: 1px solid #ea4ba7;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  width:100% ;
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
