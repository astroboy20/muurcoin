import styled from "styled-components";

export const ButtonStyle = styled.button`
  background: #8358FF;
  border: none;
  color: #fff;
  /* padding: 15px 20px; */
  /* border-radius: 10px; */
  width:100% ;
  display: inline-block;
  padding: 3px 8px;
  border-radius: 999px; /* Use a large value for a rounded shape */
  background-color: #ea4ba7; /* Change to your desired background color */
  color: white;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add box shadow for a subtle lift effect */
  transition: all 0.3s ease; /* Add smooth transition for hover effect */
`;
export const TransparentButton = styled.button`
  background: none;
  border: 1px solid #ea4ba7;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  width:100% ;
  /* text-align:center ; */
`;
export const SmallButtonStyle = styled.button`
  background: #8358FF;
  border: none;
  color: #fff;
  padding: 15px 20px;
  border-radius: 10px;
  width:25% ;
  @media screen and (max-width:800px) {
    width:60% ;
    margin:0 auto ;
  }
`;
