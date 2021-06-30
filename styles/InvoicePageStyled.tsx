import styled, { css } from "styled-components";
import { Theme } from "pages/_app";

export const Header = styled.h2(
  ({ theme: { colors } }: { theme: Theme }) => css`
    font-size: 24px;
    color: ${colors.secondary};
    text-align: center;
    letter-spacing: 0.025em;
    line-height: 1.3;
    margin-bottom: 10px;
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
    @media (max-width: 1020px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `
);

export const CardsHeader = styled.div(
  () => css`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 30px;

    @media (max-width: 1020px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  `
);
