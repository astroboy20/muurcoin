import { useEffect } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "@/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { store } from "@/feature/store";
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// import "@/styles/global.css";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    // here you can add your aos options
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    <Provider store={store}>
      <ToastContainer/>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
