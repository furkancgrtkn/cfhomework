import React from "react";
import { Container } from "styles/LayoutStyled";
import Navbar from "components/Navbar";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  );
}
