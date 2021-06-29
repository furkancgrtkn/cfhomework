import styled, { css } from "styled-components";
import { Theme } from "pages/_app";

export const Wrapper = styled.div(
  () => css`
    background-color: #25272c;
    border: 1px solid #363c4a;
    border-radius: 10px;
    width: 300px;
    height: 100px;
  `
);

export const Title = styled.span(
  ({ theme: { colors } }: { theme: Theme }) => css`
    background-color: #25272c;
    border: 1px solid #363c4a;
    border-radius: 10px;
    width: 300px;
    height: 100px;
  `
);

export const Details = styled.ul(
  ({ theme: { colors } }: { theme: Theme }) => css`
    background-color: #25272c;
    border: 1px solid #363c4a;
    border-radius: 10px;
    width: 300px;
    height: 100px;
  `
);

export const Note = styled.span(
  ({ theme: { colors } }: { theme: Theme }) => css`
    background-color: #25272c;
    border: 1px solid #363c4a;
    border-radius: 10px;
    width: 300px;
    height: 100px;
  `
);
