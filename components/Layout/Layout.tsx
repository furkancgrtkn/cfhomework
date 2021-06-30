import React from "react";
import { Container } from "styles/LayoutStyled";
import Navbar from "components/Navbar";
import Head from "next/head";
export default function Layout({
  children,
  goHome,
}: {
  children: React.ReactNode;
  goHome?: boolean;
}) {
  return (
    <Container>
      <Head>
        <title>Invoice</title>
        <meta name="description" content="Track Your Invoices" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navbar goHome={goHome} />
      {children}
    </Container>
  );
}
