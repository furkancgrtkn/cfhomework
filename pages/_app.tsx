import type { AppProps } from "next/app";
import { createGlobalStyle, css } from "styled-components";
import { ThemeProvider } from "styled-components";

export interface Theme {
  body?: string;
  colors?: any;
}

const defaultTheme: Theme = {
  body: "#24262A",
  colors: {
    textColorPrimary: "#9C9C9C",
    texColorPrimaryLight: "#BFBFBF",
    backgroundPrimary: "#f9f9f9",
    backgroundSecondary: "#F5F5F5",
    boxShadow: "#F5F5F5",
  },
};

export const GlobalStyle = createGlobalStyle(
  ({ theme: { body } }: { theme: Theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    body {
      background-color: ${body};
    }
  `
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
