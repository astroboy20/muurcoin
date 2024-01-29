import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 0% 4%;
  color: black;
  background: linear-gradient(to right, #eedae3, #edf0fa, #edf0fa);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
 
  &.is-blurred {
    opacity:0.9 ;
  }
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .section {
    display: flex;
    gap: 20px;
  }
  .section-link {
    text-decoration: none;
    font-weight:600 ;
    /* color: #fff; */
  }
  button {
    /* background: #ea4ba7; */
    border: none;
    /* color: #fff; */
    padding: 15px 20px;
    border-radius: 10px;
  }
  .icons{
    display: flex;
    gap: 20px;
  }
  .hamburger {
    display: none;
  }
  .active {
    border-bottom: 2px solid  #8358FF;
  }
  @media screen and (max-width: 786px) {
    padding: 4%;
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
  gap: 20px;
  margin-top: 20px;
  text-align: center;
  background-color: #000;
  padding: 40px;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
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
`;
