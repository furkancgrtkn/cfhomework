import React from "react";
import type { AppProps } from "next/app";
import {
  createGlobalStyle,
  css,
  ThemeProvider,
  ThemeContext,
} from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "react-datepicker/dist/react-datepicker.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export interface Theme {
  body?: string;
  colors?: any;
  labels?: any;
}

const defaultTheme: Theme = {
  body: "#24262A",
  colors: {
    primaryDark: "#3B917F",
    primary: "#64FFDA",
    secondary: "#EEEEEE",
  },
  labels: {
    unpaid: "#EEEEEE",
    paid: "#64FFDA",
    out: "#ff6464",
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

    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    /* Firefox */
    input[type="number"] {
      -moz-appearance: textfield;
    }

    ::-webkit-calendar-picker-indicator {
      filter: invert(1);
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

    .react-datepicker-wrapper {
      margin-bottom: 10px;
    }
    .react-datepicker__input-container {
      input {
        font-size: 14px;
        font-weight: 500;
        background: transparent;
        border-radius: 5px;
        border: 1px solid #363c4a;
        color: ${colors.secondary};
        padding: 5px 10px;
        width: 100%;
      }
    }

    .react-datepicker-popper[data-placement^="bottom"]
      .react-datepicker__triangle::before,
    .react-datepicker-popper[data-placement^="top"]
      .react-datepicker__triangle::before,
    .react-datepicker-popper[data-placement^="bottom"]
      .react-datepicker__triangle::after,
    .react-datepicker-popper[data-placement^="top"]
      .react-datepicker__triangle::after {
      border-bottom-color: #515a6e;
    }

    .react-datepicker {
      background-color: #25272c;
      border: 1px solid #515a6e;
    }

    .react-datepicker__header {
      background-color: #25272c;
      border-bottom: 1px solid #515a6e;
    }

    .react-datepicker__current-month,
    .react-datepicker-time__header,
    .react-datepicker-year-header,
    .react-datepicker__day-name,
    .react-datepicker__day,
    .react-datepicker__time-name {
      color: ${colors.secondary};
    }

    .react-datepicker__day--selected,
    .react-datepicker__day--in-selecting-range,
    .react-datepicker__day--in-range,
    .react-datepicker__month-text--selected,
    .react-datepicker__month-text--in-selecting-range,
    .react-datepicker__month-text--in-range,
    .react-datepicker__quarter-text--selected,
    .react-datepicker__quarter-text--in-selecting-range,
    .react-datepicker__quarter-text--in-range,
    .react-datepicker__year-text--selected,
    .react-datepicker__year-text--in-selecting-range,
    .react-datepicker__year-text--in-range,
    .react-datepicker__day--keyboard-selected,
    .react-datepicker__month-text--keyboard-selected,
    .react-datepicker__quarter-text--keyboard-selected,
    .react-datepicker__year-text--keyboard-selected,
    .react-datepicker__day:hover,
    .react-datepicker__month-text:hover,
    .react-datepicker__quarter-text:hover,
    .react-datepicker__year-text:hover {
      background-color: ${colors.primaryDark};
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

    .container {
      max-width: 1200px;
      margin: auto;
    }

    .mt-1 {
      margin-top: 10px;
    }

    .mt-2 {
      margin-top: 20px;
    }

    .mt-4 {
      margin-top: 40px;
    }

    .mr-1 {
      margin-right: 10px;
    }

    .flex-between {
      justify-content: space-between;
    }

    .flex-end {
      justify-content: flex-end;
    }

    ::-webkit-scrollbar {
      width: 4px;
      height: 3px;
    }

    ::-webkit-scrollbar-track {
      background-color: ${colors.primaryDark};
    }
    ::-webkit-scrollbar-track-piece {
      background-color: #25272c;
    }
    ::-webkit-scrollbar-thumb {
      height: 50px;
      background-color: ${colors.primaryDark};
      border-radius: 3px;
    }
    ::-webkit-scrollbar-corner {
      background-color: ${colors.primaryDark};
    }
    ::-webkit-resizer {
      background-color: ${colors.primaryDark};
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

export const useTheme = () => React.useContext(ThemeContext) || {};
