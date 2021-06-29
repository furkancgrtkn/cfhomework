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
import Label from "./Label";

export default function Card() {
  const theme = useTheme();

  return (
    <Wrapper>
      <Header>
        <Title>Invoice 1</Title>
        <Label variant="paid" />
      </Header>
      <span className="card-md-text">Details</span>
      <Details>
        <li>
          <span>Key:</span> Detail
        </li>
        <li>
          <span>Key:</span> Detail
        </li>
        <li>
          <span>Key:</span> Detail
        </li>
      </Details>
      <span className="card-md-text">Notes: ----</span>
      <Infos>
        <span>Due Date: 10.08.2021</span>
      </Infos>
      <Actions>
        <Infos>
          <span>Total Invoice: 99$</span>
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
