import styled, { css } from "styled-components";
import { Theme } from "pages/_app";

export const ImageWrapper = styled.div(
  () => css`
    display: block;
    position: relative;
    width: 299px;
    height: 427.5px;
    filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.2));
    @media (max-width: 968px) {
      width: 199.3px;
      height: 285px;
      margin-bottom: 30px;
    }
  `
);

export const SectionContainer = styled.section(
  () => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    min-height: calc(100vh - 75px);
    padding: 50px 0;
    @media (max-width: 968px) {
      flex-direction: column;
    }
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
    @media (max-width: 968px) {
      font-size: 30px;
    }
  `
);
