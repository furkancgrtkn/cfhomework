import styled, { css } from "styled-components";
import { Theme } from "pages/_app";

export const Wrapper = styled.div(
  ({ theme: { colors } }: { theme: Theme }) => css`
    background-color: #25272c;
    border: 1px solid #363c4a;
    border-radius: 10px;
    width: 300px;
    padding: 10px 10px;
    display: flex;
    flex-direction: column;

    .card-md-text {
      font-size: 14px;
      font-weight: 500;
      color: ${colors.secondary};
      padding: 10px 0;
    }
  `
);

export const Title = styled.span(
  ({ theme: { colors } }: { theme: Theme }) => css`
    color: ${colors.primary};
    font-size: 16px;
    font-weight: 500;
  `
);

export const Header = styled.span(
  () => css`
    width: 100%;
    border-bottom: 1px solid #363c4a;
    padding-bottom: 10px;
    display: flex;
  `
);

export const Details = styled.ul(
  ({ theme: { colors } }: { theme: Theme }) => css`
    list-style: none;
    padding-bottom: 6px;
    border-bottom: 1px solid #363c4a;

    li {
      position: relative;
      color: ${colors.secondary};
      font-size: 13px;
      font-weight: 500;
      padding-left: 10px;
      margin-bottom: 4px;
      :before {
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        content: "";
        width: 5px;
        height: 2px;
        background: ${colors.primary};
      }
      span {
        color: ${colors.primary};
      }
    }
  `
);

export const Actions = styled.div(
  () => css`
    width: 100%;
    border-top: 1px solid #363c4a;
    display: flex;
    padding-top: 10px;
    margin-top: 10px;
    justify-content: space-between;
  `
);

export const Action = styled.button(
  () => css`
    background: transparent;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    opacity: 0.8;
  `
);

export const Infos = styled.div(
  ({ theme: { colors } }: { theme: Theme }) => css`
    color: ${colors.secondary};
    font-size: 13px;
    font-weight: 500;
  `
);
