import styled, { css } from "styled-components";
import { LabelStyleProps } from "components/Label";
import { Theme } from "pages/_app";

export const LabelStyled = styled.span(
  ({ theme: { labels }, status }: LabelStyleProps & { theme: Theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    color: ${labels[`${status}`]};
    padding: 0 5px;
    height: 20px;
    border: 1px solid ${labels[`${status}`]};
    border-radius: 5px;
    font-weight: 500;
  `
);
