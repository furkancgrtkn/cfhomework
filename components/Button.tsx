import React from "react";
import { Button as ButtonStyled, ButtonText } from "styles/ButtonStyled";

export interface Props {
  children: React.ReactNode;
}

export interface BtnStyleProps {
  variant: "primary" | "secondary";
}

export default function Button({ children, variant }: Props & BtnStyleProps) {
  return (
    <ButtonStyled variant={variant}>
      <ButtonText variant={variant}>{children}</ButtonText>
    </ButtonStyled>
  );
}
