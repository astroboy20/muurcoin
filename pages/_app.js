import { useEffect } from "react";
import "@/styles/globals.css";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "@/theme";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { persistor, store } from "@/feature/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import 'bootstrap/dist/css/bootstrap.css';

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
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
