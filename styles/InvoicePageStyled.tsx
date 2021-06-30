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

export const SubTitle = styled.h5(
  ({ theme: { colors } }: { theme: Theme }) => css`
    font-size: 20px;
    color: ${colors.primary};
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 0.025em;
    line-height: 1.3;
  `
);

export const Cards = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    .card-con {
      width: 300px;
    }
  `
);
