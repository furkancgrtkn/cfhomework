import React from "react";
import { Container } from "styles/LayoutStyled";
import Navbar from "components/Navbar";
export default function Layout({
  children,
  goHome,
}: {
  children: React.ReactNode;
  goHome?: boolean;
}) {
  return (
    <Container>
      <Navbar goHome={goHome} />
      {children}
    </Container>
  );
}
