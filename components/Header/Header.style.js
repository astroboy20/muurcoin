import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 2% 4%;
  color: black;
  background: linear-gradient(to right, #eedae3, #edf0fa, #edf0fa);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  &.is-blurred {
    background: rgba(255, 255, 255, 0.26);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(13.1px);
    -webkit-backdrop-filter: blur(13.1px);
    border: 1px solid rgba(255, 255, 255, 0.3);
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
    font-weight: 600;
    color: #000;
  }
  button {
    /* background: #ea4ba7; */
    border: none;
    /* color: #fff; */
    padding: 15px 20px;
    border-radius: 10px;
  }
  .icons {
    display: flex;
    gap: 20px;
    align-items:center ;
    cursor: pointer;
  }
  .hamburger {
    display: none;
  }
  .active {
    border-bottom: 2px solid #8358ff;
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
    .search{
      display:none ;
    }
  }
`;

export const MobileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  background-color: #000;
  padding: 40px;
  position: absolute;
  left: 0;
  width: 100%;
  height: auto;
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
