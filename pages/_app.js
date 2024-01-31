import { useEffect } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "@/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { DarkModeProvider } from "@/Features/DarkMode";

// import "@/styles/global.css";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <DarkModeProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </DarkModeProvider>
  );
}
