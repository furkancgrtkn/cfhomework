import React, { useState } from "react";
import Layout from "components/Layout/Layout";
import Card from "components/Card";
import { Header, SubTitle, Cards } from "styles/InvoicePageStyled";
import Button from "components/Button";
import Form from "components/Form";
import { LabelStyleProps } from "components/Label";
import moment from "moment";

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
  const statusCalc = (e: Date) => {
    const date1 = moment(new Date());
    const date2 = moment(e);
    const diff = date2.diff(date1);
    if (diff < 0) {
      return "out";
    }
    return "unpaid";
  };
  const initData: InvProps[] = [
    {
      id: Math.floor(Math.random() * 10000),
      title: "Invoice 1",
      status: statusCalc(new Date("2021-06-10T01:28:52+03:00")),
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
      status: statusCalc(new Date("2021-06-10T01:28:52+03:00")),
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
      title: "Invoice 4",
      status: "paid",
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
      title: "Invoice 3",
      details: [
        {
          key: "Work",
          detail: "Work Detail",
        },
      ],
      notes: "Note",
      dueDate: new Date("2021-09-10T01:28:52+03:00"),
      status: statusCalc(new Date("2021-09-10T01:28:52+03:00")),
      totalInvoice: 99,
    },
  ];
  const [invState, setInvState] = useState<InvProps[]>(initData);
  const [open, setOpen] = useState(false);

  const handleOnPay = (e: number) => {
    if (invState) {
      let tempData = invState;
      const idxData = tempData.filter((x) => x.id === e);
      const oldData = tempData.filter((x) => x.id !== e);
      setInvState([{ ...idxData[0], status: "paid" }, ...oldData]);
    }
  };

  const onEffectFunc = (e: number, status: InvProps["status"]) => {
    const editData = invState.filter((k) => k.id === e);
    const oldData = invState.filter((k) => k.id !== e);
    setInvState([{ ...editData[0], status: status }, ...oldData]);
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
        <Cards>
          <div className="card-con">
            <SubTitle>Unpaid</SubTitle>
            {invState
              .filter((f) => f.status === "unpaid")
              .map((item) => (
                <Card
                  onPay={(e) => handleOnPay(e)}
                  onDelete={(e) =>
                    setInvState(invState.filter((s) => s.id !== e))
                  }
                  item={item}
                  key={item.id}
                ></Card>
              ))}
          </div>

          <div className="card-con">
            <SubTitle>Paid</SubTitle>
            {invState
              .filter((f) => f.status === "paid")
              .map((item) => (
                <Card
                  onPay={(e) => handleOnPay(e)}
                  onDelete={(e) =>
                    setInvState(invState.filter((s) => s.id !== e))
                  }
                  item={item}
                  key={item.id}
                ></Card>
              ))}
          </div>

          <div className="card-con">
            <SubTitle>Out Of Date</SubTitle>
            {invState
              .filter((f) => f.status === "out")
              .map((item) => (
                <Card
                  onPay={(e) => handleOnPay(e)}
                  onDelete={(e) =>
                    setInvState(invState.filter((s) => s.id !== e))
                  }
                  item={item}
                  key={item.id}
                ></Card>
              ))}
          </div>
        </Cards>
      </div>
      {open && (
        <Form setInvState={setInvState} invState={invState} setOpen={setOpen} />
      )}
    </Layout>
  );
}
