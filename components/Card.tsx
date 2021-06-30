import React from "react";
import {
  Wrapper,
  Title,
  Details,
  Header,
  Actions,
  Action,
  Infos,
} from "styles/CardStyled";
import { FiCreditCard, FiTrash2, FiMail } from "react-icons/fi";
import { useTheme } from "pages/_app";
import { InvProps } from "pages/invoices";
import Label from "./Label";
import moment from "moment";

export default function Card({
  item,
  onDelete,
  onPay,
}: {
  item: InvProps;
  onDelete: (e: number) => void;
  onPay: (e: number) => void;
}) {
  const theme = useTheme();
  const dateString = moment(item.dueDate, "DD-MM-YYYY").format("MMM Do YY");

  return (
    <Wrapper>
      <Header>
        <Title>{item.title}</Title>
        <Label status={item.status} />
      </Header>
      <span className="card-md-text">Details</span>
      <Details>
        {item.details.map((detail, i) => (
          <li key={i}>
            <span>{detail.key}:</span> {detail.detail}
          </li>
        ))}
      </Details>
      <span className="card-md-text">Notes: {item.notes}</span>
      <Infos>
        <span>Due Date: {dateString}</span>
      </Infos>
      <Actions>
        <Infos>
          <span>Total Invoice: {item.totalInvoice}$</span>
        </Infos>
        <div className="d-flex-center">
          <Action>
            <FiTrash2
              onClick={() => onDelete(item.id)}
              size="16"
              color={`${theme.colors.secondary}`}
            ></FiTrash2>
          </Action>

          <Action>
            <FiMail size="16" color={`${theme.colors.secondary}`}></FiMail>
          </Action>

          <Action>
            <FiCreditCard
              size="16"
              onClick={() => onPay(item.id)}
              color={`${theme.colors.secondary}`}
            ></FiCreditCard>
          </Action>
        </div>
      </Actions>
    </Wrapper>
  );
}
