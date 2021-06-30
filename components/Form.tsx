import React, { useState } from "react";
import {
  FormWrapper,
  FormLabel,
  FormInput,
  FormItem,
  FormTextArea,
} from "styles/FormStyled";
import FormDetailItem from "./FormDetailItem";
import { InvProps } from "pages/invoices";
import Button from "./Button";
import DatePicker from "react-datepicker";
import moment from "moment";

export default function Form({
  invState,
  setInvState,
  setOpen,
}: {
  invState: InvProps[];
  setInvState: React.Dispatch<React.SetStateAction<InvProps[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [detailsCount, setDetailsCount] = useState(1);
  const [startDate, setStartDate] = useState<any>(new Date());
  const [allDetails, setAllDetails] = useState<InvProps["details"]>([]);
  const [title, setTitle] = useState<InvProps["title"]>();
  const [notes, setNotes] = useState<InvProps["notes"]>();
  const [invTotal, setInvTotal] = useState<InvProps["totalInvoice"]>();
  const [err, sendErr] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (err) return window.alert("Please fill in all fields");
    if (title && notes && allDetails.length > 0 && invTotal && startDate) {
      const date1 = moment(new Date());
      const date2 = moment(startDate);
      const diff = date2.diff(date1);
      const data: InvProps = {
        id: Math.floor(Math.random() * 10000),
        title: title,
        status:
          date1.format("MMM Do YY") == date2.format("MMM Do YY")
            ? "unpaid"
            : diff < 0
            ? "out"
            : "unpaid",
        details: allDetails,
        notes: notes,
        dueDate: startDate,
        totalInvoice: invTotal,
      };
      setInvState([...invState, data]);
      setOpen(false);
    } else {
      window.alert("Please fill in all fields");
    }
  };
  return (
    <FormWrapper>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormItem className="d-flex col">
          <FormLabel>Title</FormLabel>
          <FormInput
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            maxLength={20}
            type="text"
          ></FormInput>
        </FormItem>
        <FormItem className="d-flex col">
          <FormLabel>
            Detail{" "}
            <span onClick={() => setDetailsCount(detailsCount + 1)}>+</span>
          </FormLabel>
          {Array.from(Array(detailsCount)).map((e, i) => (
            <FormDetailItem
              sendErr={sendErr}
              allDetails={allDetails}
              setAllDetails={setAllDetails}
              key={i}
              index={i}
            />
          ))}
        </FormItem>
        <FormItem className="d-flex col">
          <FormLabel>Notes</FormLabel>
          <FormTextArea
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notes"
          />
        </FormItem>
        <FormItem className="d-flex col">
          <FormLabel>Due Date</FormLabel>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </FormItem>
        <FormItem className="d-flex col">
          <FormLabel>Total Invoice ($)</FormLabel>
          <FormInput
            onChange={(e) => setInvTotal(parseInt(e.target.value))}
            type="number"
          ></FormInput>
        </FormItem>
        <div className="d-flex flex-end">
          <Button
            onClick={() => setOpen(false)}
            type="button"
            className="mt-1 mr-1"
            variant="secondary"
          >
            Cancel
          </Button>
          <Button type="submit" className="mt-1" variant="primary">
            Submit
          </Button>
        </div>
      </form>
    </FormWrapper>
  );
}
