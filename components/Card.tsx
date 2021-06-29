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
import { GoSettings } from "react-icons/go";
import { useTheme } from "pages/_app";
import { InvProps } from "pages/invoices";
import Label from "./Label";
import moment from "moment";

export default function Card({ item }: { item: InvProps }) {
  const theme = useTheme();
  const dateString = moment(item.dueDate, "DD-MM-YYYY").format("MMM Do YY");
  console.log(dateString);
  return (
    <Wrapper>
      <Header>
        <Title>{item.title}</Title>
        <Label status="paid" />
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
            <FiTrash2 size="16" color={`${theme.colors.secondary}`}></FiTrash2>
          </Action>

          <Action>
            <FiMail size="16" color={`${theme.colors.secondary}`}></FiMail>
          </Action>

          <Action>
            <FiCreditCard
              size="16"
              color={`${theme.colors.secondary}`}
            ></FiCreditCard>
          </Action>

          <Action>
            <GoSettings
              size="16"
              color={`${theme.colors.secondary}`}
            ></GoSettings>
          </Action>
        </div>
      </Actions>
    </Wrapper>
  );
}
