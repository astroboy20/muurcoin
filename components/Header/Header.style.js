import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .section {
    display: flex;
    gap: 20px;
  }
  .section-link {
    text-decoration: none;
    color: #fff;
  }
  button {
    background: #ea4ba7;
    border: none;
    color: #fff;
    padding: 15px 20px;
    border-radius: 10px;
  }
  .hamburger {
    display: none;
  }
  @media screen and (max-width: 786px) {
    .section,
    button {
      display: none;
    }
    .hamburger {
      display: block;
    }
  }
`;

export const MobileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap:20px;
  margin-top: 20px;
  text-align:center ;
  background-color:#000 ;
  padding:40px ;
  /* transform:10s ease-in-out ; */
  .section-link {
    text-decoration: none;
    color: #fff;
  }
`;
