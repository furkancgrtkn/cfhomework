import React from "react";
import { Button as ButtonStyled, ButtonText } from "styles/ButtonStyled";

export interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

export interface BtnStyleProps {
  variant: "primary" | "secondary";
}

export default function Button({
  children,
  variant,
  onClick,
}: Props & BtnStyleProps) {
  return (
    <ButtonStyled onClick={onClick} variant={variant}>
      <ButtonText variant={variant}>{children}</ButtonText>
    </ButtonStyled>
  );
}
