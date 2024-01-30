import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: #8358ff;
  border: none;
  color: #fff;
  padding: 15px 20px;
  border-radius: 999px;
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  @media screen and (max-width: 800px) {
    width: 100%;
    /* padding:10px 20px ; */
    margin: 0 auto;
  }
`;
export const TransparentButton = styled.button`
  background: none;
  border: 1px solid #ea4ba7;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  width: 100%;
  /* text-align:center ; */
`;
export const SmallButtonStyle = styled.button`
  background: #8358ff;
  border: none;
  color: #fff;
  padding: 15px 20px;
  /* border-radius: 10px; */
  width: 35%;
  /* padding: 3px 8px; */
  border-radius: 999px;
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  @media screen and (max-width: 800px) {
    width: 60%;
    margin: 0 auto;
  }
`;
