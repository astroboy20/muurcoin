import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${reset}

body{
  transition: all 1s linear;
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
