import React, { useEffect, useState } from "react";
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
      status: "unpaid",
      details: [
        {
          key: "Work",
          detail: "Work Detail",
        },
      ],
      notes: "Note",
      dueDate: new Date("2021-06-10T01:28:52+03:00"),
      totalInvoice: 99,
    },
    {
      id: Math.floor(Math.random() * 10000),
      title: "Invoice 2",
      status: "unpaid",
      details: [
        {
          key: "Work",
          detail: "Work Detail",
        },
      ],
      notes: "Note",
      dueDate: new Date("2021-06-10T01:28:52+03:00"),
      totalInvoice: 99,
    },
  ];
  const [invState, setInvState] = useState<InvProps[]>(initData);
  const [open, setOpen] = useState(false);

  const handleOnPay = (e: number) => {
    if (invState) {
      let tempData = invState;
      const idxData = tempData.filter((x) => x.id === e);
      const index = tempData.indexOf(idxData[0]);
      const oldData = tempData.filter((x) => x.id !== e);
      setInvState([{ ...idxData[0], status: "paid" }, ...oldData]);
    }
  };
  return (
    <Layout goHome>
      <div className="container">
        <div className="d-flex mt-2 flex-between">
          <Header>Welcome, 34 invoices found</Header>
          <Button onClick={() => setOpen(true)} variant="primary">
            New Invoice
          </Button>
        </div>
        <div className="mt-2">
          {invState.map((item) => (
            <Card
              onPay={(e) => handleOnPay(e)}
              onDelete={(e) => setInvState(invState.filter((s) => s.id !== e))}
              item={item}
              key={item.id}
            ></Card>
          ))}
        </div>
      </div>
      {open && (
        <Form setInvState={setInvState} invState={invState} setOpen={setOpen} />
      )}
    </Layout>
  );
}
