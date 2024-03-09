import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${reset}
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap');
body{
  transition: all 1s linear;
  background: #0D102D;
  background: #0D102D;
  font-family: "Space Grotesk", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
}
/* @media (min-width: 768px) and (max-width: 1024px) {
  body { 
    display:block ;
    
    background-repeat: no-repeat;
    height:100dvh ;
    
  }
}
@media screen and (max-width:769px) {
  body { 
    display:block ;
    width:100% ;
    transition: all 1s linear;
    height:100dvh ;
  }
} */
  


`;
