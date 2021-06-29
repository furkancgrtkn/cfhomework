import React, { useState } from "react";
import Layout from "components/Layout/Layout";
import Card from "components/Card";
import { Header } from "styles/InvoicePageStyled";
import Button from "components/Button";
import Form from "components/Form";
import { LabelStyleProps } from "components/Label";
export interface InvProps {
  id: number;
  title: string;
  status: LabelStyleProps["status"];
  details: {
    key: string;
    detail: string;
  }[];
  notes: string;
  dueDate: Date;
  totalInvoice: number;
}

export default function Invoices() {
  const initData: InvProps[] = [
    {
      id: Math.floor(Math.random() * 10000),
      title: "Invoice 1",
      status: "paid",
      details: [
        {
          key: "Work",
          detail: "Work Detail",
        },
      ],
      notes: "Note",
      dueDate: new Date(),
      totalInvoice: 99,
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: "Invoice 2",
      status: "paid",
      details: [
        {
          key: "Work",
          detail: "Work Detail",
        },
      ],
      notes: "Note",
      dueDate: new Date(),
      totalInvoice: 99,
    },
  ];
  const [invState, setInvState] = useState(initData);
  return (
    <Layout goHome>
      <div className="container">
        <div className="d-flex mt-2 flex-between">
          <Header>Welcome, 34 invoices found</Header>
          <Button variant="primary">New Invoice</Button>
        </div>
        <div className="mt-2">
          {invState.map((item) => (
            <Card item={item} key={item.id}></Card>
          ))}
        </div>
      </div>
      <Form></Form>
    </Layout>
  );
}
