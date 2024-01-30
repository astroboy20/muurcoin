import styled from "styled-components";
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4% 0;
  font-size: 13px;
  gap: 5px;
 
`;
export const SearchDiv = styled(InputDiv)`
 width:150% ;
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 12px;
  padding: 5px 16px 0 16px;
  border: 1.5px solid #878e9c;
  background: white;
`;
export const InputStyle = styled.input`
  border-radius: 12px;
  padding: 12px 16px;
  border: none;
  width: 100%;
  
`;
