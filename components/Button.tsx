import React from "react";
import { Button as ButtonStyled, ButtonText } from "styles/ButtonStyled";

export interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export interface BtnStyleProps {
  variant: "primary" | "secondary";
}

export default function Button({
  children,
  variant,
  onClick,
  type,
  className,
}: Props & BtnStyleProps) {
  return (
    <ButtonStyled
      type={type}
      className={className}
      onClick={onClick}
      variant={variant}
    >
      <ButtonText variant={variant}>{children}</ButtonText>
    </ButtonStyled>
  );
}
