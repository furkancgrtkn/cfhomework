import styled, { css } from "styled-components";
import { Theme } from "pages/_app";

export const Header = styled.h2(
  ({ theme: { colors } }: { theme: Theme }) => css`
    font-size: 24px;
    color: ${colors.secondary};
    text-align: center;
    margin-bottom: 40px;
    letter-spacing: 0.025em;
    line-height: 1.3;
  `
);
