import styled, { css } from "styled-components";
import { Theme } from "pages/_app";

export const NavbarContainer = styled.nav(
  () => css`
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    margin: 0 auto;
  `
);

export const Header = styled.h1(
  ({ theme: { colors } }: { theme: Theme }) => css`
    width: fit-content;
    font-size: 29px;
    color: ${colors.secondary};
    font-weight: 600;
  `
);
