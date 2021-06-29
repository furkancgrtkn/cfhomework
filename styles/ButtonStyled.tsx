import styled, { css } from "styled-components";
import { Theme } from "pages/_app";
import { BtnStyleProps } from "components/Button";

export const Button = styled.button(
  ({ theme: { colors }, variant }: BtnStyleProps & { theme: Theme }) => css`
    padding: 0 20px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${colors[`${variant}`]};
    border-radius: 6px;

    transform: scale(1);
    transition: 0.05s;
    transition-property: transform;

    &:active {
      transform: scale(0.96);
      transition: 0.05s;
      transition-property: transform;
    }

    &:hover {
      filter: brightness(1.5);
      transition: 0.05s;
      transition-property: filter;
    }
  `
);

export const ButtonText = styled.span(
  ({ theme: { colors }, variant }: BtnStyleProps & { theme: Theme }) => css`
    direction: rtl;
    white-space: no-wrap;
    letter-spacing: 0.05em;
    text-indent: 0.05em;
    font-size: 14px;
    color: ${colors[`${variant}`]};
    font-weight: 500;
  `
);
