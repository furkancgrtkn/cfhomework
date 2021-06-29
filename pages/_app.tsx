import type { AppProps } from "next/app";
import { createGlobalStyle, css, ThemeProvider } from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export interface Theme {
  body?: string;
  colors?: any;
}

const defaultTheme: Theme = {
  body: "#24262A",
  colors: {
    primaryDark: "#3B917F",
    primary: "#64FFDA",
    secondary: "#EEEEEE",
  },
};

export const GlobalStyle = createGlobalStyle(
  ({ theme: { body, colors } }: { theme: Theme }) => css`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    body {
      background-color: ${body};
      color: ${colors.textColorPrimary};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    span,
    div,
    li,
    a,
    button,
    input,
    b,
    textarea,
    label {
      font-family: "Quicksand", sans-serif;
    }

    button {
      cursor: pointer;
      border: none;
      outline: none;
      background-color: transparent;
    }

    button:focus,
    textarea:focus,
    input:focus {
      outline: none;
    }

    #nprogress .bar {
      background: ${colors.primaryDark} !important;
      height: 6px !important;
    }

    #nprogress .peg {
      box-shadow: 0 0 10px ${colors.primary}, 0 0 5px ${colors.primaryDark} !important;
    }

    #nprogress .spinner {
      display: block;
      position: fixed;
      z-index: 999 !important;
      top: unset !important;
      bottom: 10px !important;
      right: 10px !important;
      background-color: #33333325;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px #33333325, 0 0 5px #33333325 !important;
    }

    #nprogress .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      padding: 10px;
      border: solid 2px transparent;
      border-top-color: ${colors.primary} !important;
      border-left-color: ${colors.primary} !important;
      border-radius: 50%;
    }

    .d-flex {
      display: flex;
    }

    .d-flex-center {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .col {
      flex-direction: column;
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
