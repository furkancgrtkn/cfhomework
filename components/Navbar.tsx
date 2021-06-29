import React from "react";
import { NavbarContainer, Header, NavbarInner } from "styles/NavbarStyled";
import Button from "components/Button";
import Link from "next/link";
export default function Navbar({ goHome }: { goHome?: boolean }) {
  return (
    <NavbarContainer>
      <NavbarInner>
        <Header>Invoice App</Header>
        {goHome ? (
          <Link href="/">
            <a>
              <Button variant="primary">Home</Button>
            </a>
          </Link>
        ) : (
          <Link href="/invoices">
            <a>
              <Button variant="primary">Start Now</Button>
            </a>
          </Link>
        )}
      </NavbarInner>
    </NavbarContainer>
  );
}
