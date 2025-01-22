import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const RootLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
