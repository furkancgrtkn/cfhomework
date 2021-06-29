import React, { useState, useEffect } from "react";
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

export default function Form() {
  const [detailsCount, setDetailsCount] = useState(1);
  const [allDetails, setAllDetails] = useState<InvProps["details"]>([]);
  return (
    <FormWrapper>
      <form>
        <FormItem className="d-flex col">
          <FormLabel>Title</FormLabel>
          <FormInput required placeholder="Title" type="text"></FormInput>
        </FormItem>
        <FormItem className="d-flex col">
          <FormLabel>
            Detail{" "}
            <span onClick={() => setDetailsCount(detailsCount + 1)}>+</span>
          </FormLabel>
          {Array.from(Array(detailsCount)).map((e, i) => (
            <FormDetailItem
              allDetails={allDetails}
              setAllDetails={setAllDetails}
              key={i}
              index={i}
            />
          ))}
        </FormItem>
        <FormItem className="d-flex col">
          <FormLabel>Notes</FormLabel>
          <FormTextArea required placeholder="Notes" />
        </FormItem>
        <FormItem className="d-flex col">
          <FormLabel>Due Date</FormLabel>
          <FormInput required type="date"></FormInput>
        </FormItem>
        <FormItem className="d-flex col">
          <FormLabel>Total Invoice</FormLabel>
          <FormInput required type="number"></FormInput>
        </FormItem>
        <Button variant="primary">Submit</Button>
      </form>
    </FormWrapper>
  );
}
