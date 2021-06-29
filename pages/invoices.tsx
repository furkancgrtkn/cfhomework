import React from "react";
import Layout from "components/Layout/Layout";
import Card from "components/Card";

export default function invoices() {
  return (
    <Layout goHome>
      <div className="container mt-4">
        <Card></Card>
      </div>
    </Layout>
  );
}
