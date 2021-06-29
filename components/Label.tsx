import React from "react";
import { LabelStyled } from "styles/LabelStyled";

export interface LabelStyleProps {
  status: "paid" | "unpaid" | "out";
}

export default function Label({ status }: LabelStyleProps) {
  const handleStatus = (status: LabelStyleProps["status"]) => {
    if (status === "out") return "out of date";
    return status;
  };
  return <LabelStyled status={status}>{handleStatus(status)}</LabelStyled>;
}
