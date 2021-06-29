import React from "react";
import { LabelStyled } from "styles/LabelStyled";

export interface LabelStyleProps {
  variant: "paid" | "unpaid" | "out";
}

export default function Label({ variant }: LabelStyleProps) {
  const handleVariant = (variant: LabelStyleProps["variant"]) => {
    if (variant === "out") return "out of date";
    return variant;
  };
  return <LabelStyled variant={variant}>{handleVariant(variant)}</LabelStyled>;
}
