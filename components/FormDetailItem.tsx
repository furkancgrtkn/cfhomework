import React, { useState, useEffect } from "react";
import { FormInput, FormTextArea } from "styles/FormStyled";
import { InvProps } from "pages/invoices";
import { sendError } from "next/dist/next-server/server/api-utils";

export default function FormDetailItem({
  allDetails,
  setAllDetails,
  index,
  sendErr,
}: {
  allDetails: InvProps["details"];
  sendErr: React.Dispatch<React.SetStateAction<boolean>>;
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
    if (detail?.trim() === "" || detailKey?.trim() === "") {
      return sendErr(true);
    }
    if (detail && detailKey) {
      sendErr(false);
      const upData = {
        key: detailKey,
        detail: detail,
      };
      const oldData = allDetails;
      oldData[index] = upData;
      setAllDetails(oldData);
    } else {
      sendErr(true);
    }
  }, [detail, detailKey, allDetails, index, setAllDetails, sendErr]);

  return (
    <React.Fragment>
      <FormInput
        onChange={(e) => {
          setDetailKey(e.target.value);
        }}
        placeholder="Case"
        type="text"
      ></FormInput>
      <FormTextArea
        onChange={(e) => {
          setDetail(e.target.value);
        }}
        placeholder="Detail"
      ></FormTextArea>
    </React.Fragment>
  );
}
