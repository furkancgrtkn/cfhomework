import styled, { css } from "styled-components";
import { Theme } from "pages/_app";

export const FormWrapper = styled.div(
  () => css`
    background-color: #1b1b1b28;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(2px);
    display: flex;
    align-items: center;
    justify-content: center;
    form {
      background-color: #25272c;
      border: 1px solid #363c4a;
      border-radius: 10px;
      width: 300px;
      padding: 15px;
      max-height: 80vh;
      overflow-y: auto;
      box-shadow: 0 0 30px rgba(0, 0, 0, 0.25);
    }
  `
);

export const FormItem = styled.div(
  () => css`
    width: 100%;
  `
);

export const FormLabel = styled.label(
  ({ theme: { colors } }: { theme: Theme }) => css`
    color: ${colors.primary};
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-bottom: 10px;

    span {
      margin-left: 5px;
      cursor: pointer;
    }
  `
);

export const FormInput = styled.input(
  ({ theme: { colors } }: { theme: Theme }) => css`
    color: ${colors.secondary};
    font-size: 14px;
    font-weight: 500;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #363c4a;
    margin-bottom: 10px;
    padding: 5px 10px;
  `
);

export const FormTextArea = styled.textarea(
  ({ theme: { colors } }: { theme: Theme }) => css`
    color: ${colors.secondary};
    resize: none;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
    height: 60px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #363c4a;
    padding: 5px 10px;
  `
);
