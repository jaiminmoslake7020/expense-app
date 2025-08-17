import React from "react";
import Layout from "@/components/layout/Layout";

/**
 * The root App component simply renders the Layout. The actual application
 * structure lives in the Layout component, which composes the header,
 * sidebar and tabbed main content area. Keeping the App component
 * minimal makes it easier for new developers to understand where
 * high‑level structure is defined.
 */
export default function App() {
  return <Layout />;
}
