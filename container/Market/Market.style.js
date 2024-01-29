import styled,{keyframes} from "styled-components";

const overlayAnimation = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

export const MarketContainer = styled.div`
  position:relative ;
  background: #131740;
  color: white;
  padding: 6% 4%;
  display: flex;
  flex-direction: column;
  .hero-image {
    position: relative;
    margin: auto;
    z-index:1;
    top: -400px;

    &::before {
      content: "";
      position: absolute;
      top: 50px;
      left: 50px;
      bottom:0 ;
      width: 100%;
      height: auto;
      z-index:-1 ;
      background: linear-gradient(to right, #4158D0, #C850C0, #FFCC70);
      border-radius: 10px;
      opacity: 0;
      animation: ${overlayAnimation} 5s ease-in-out infinite; /* Add the animation */
     
    }
  }
  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 800px) {
    padding: 8% 4%;
    h1 {
      font-size: 24px;
    }
  }
`;
