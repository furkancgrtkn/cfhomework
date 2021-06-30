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
      </Head>

      <Navbar goHome={goHome} />
      {children}
    </Container>
  );
}
