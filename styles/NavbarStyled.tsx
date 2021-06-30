import styled, { css } from "styled-components";
import { Theme } from "pages/_app";

export const NavbarContainer = styled.nav(
  () => css`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 75px;
    border-bottom: 1px solid #363c4a;
  `
);

export const NavbarInner = styled.div(
  () => css`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 75px;
  `
);

export const Header = styled.h1(
  ({ theme: { colors } }: { theme: Theme }) => css`
    width: fit-content;
    font-size: 29px;
    color: ${colors.secondary};
    font-weight: 600;
    cursor: default;
    user-select: none;
    @media (max-width: 968px) {
      font-size: 24px;
    }
  `
);
