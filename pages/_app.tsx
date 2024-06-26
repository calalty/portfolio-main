import Layout from "@/components/layout";
import "../styles/globals.scss";
import React from "react";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
