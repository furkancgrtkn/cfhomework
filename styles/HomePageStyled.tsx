import styled, { css } from "styled-components";
import { Theme } from "pages/_app";

export const Container = styled.div(
  () => css`
    max-width: 1200px;
    margin: auto;
  `
);

export const ImageWrapper = styled.div(
  () => css`
    position: relative;
    width: 299px;
    height: 427.5px;
    filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.2));
  `
);

export const SectionContainer = styled.section(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: calc(100vh - 70px);
  `
);

export const Slogan = styled.h2(
  ({ theme: { colors } }: { theme: Theme }) => css`
    font-size: 38px;
    color: ${colors.secondary};
    text-align: center;
    margin-bottom: 40px;
    letter-spacing: 0.025em;
    line-height: 1.3;
  `
);
