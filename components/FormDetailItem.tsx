import React, { useState, useEffect } from "react";
import { FormInput, FormTextArea } from "styles/FormStyled";
import { InvProps } from "pages/invoices";

export default function FormDetailItem({
  allDetails,
  setAllDetails,
  index,
}: {
  allDetails: InvProps["details"];
  setAllDetails: React.Dispatch<
    React.SetStateAction<
      {
        key: string;
        detail: string;
      }[]
    >
  >;
  index: number;
}) {
  const [detailKey, setDetailKey] = useState<string>();
  const [detail, setDetail] = useState<string>();

  useEffect(() => {
    if (detail && detailKey) {
      const upData = {
        key: detailKey,
        detail: detail,
      };
      const oldData = allDetails;
      oldData[index] = upData;
      setAllDetails(oldData);
      console.log(oldData);
    }
  }, [detail, detailKey, allDetails, index, setAllDetails]);

  return (
    <React.Fragment>
      <FormInput
        required
        onChange={(e) => {
          setDetailKey(e.target.value);
        }}
        placeholder="Case"
        type="text"
      ></FormInput>
      <FormTextArea
        required
        onChange={(e) => {
          setDetail(e.target.value);
        }}
        placeholder="Detail"
      ></FormTextArea>
    </React.Fragment>
  );
}
