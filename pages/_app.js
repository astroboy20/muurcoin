import '@/styles/globals.css'
import {ThemeProvider} from "styled-components"
import {GlobalStyles,theme} from "@/theme"
export default function App({ Component, pageProps }) {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
       <Component {...pageProps} />
    </ThemeProvider>
  )
}
