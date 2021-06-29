import React from "react";
import { NavbarContainer, Header } from "styles/NavbarStyled";
import Button from "components/Button";
import Link from "next/link";
export default function Navbar() {
  return (
    <NavbarContainer>
      <Header>Invoice App</Header>

      <Link href="/invoices">
        <a>
          <Button variant="primary">Start Now</Button>
        </a>
      </Link>
    </NavbarContainer>
  );
}
