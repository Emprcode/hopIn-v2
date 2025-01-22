import React from "react";
import { AdminHeader } from "./AdminHeader";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <AdminHeader />
      <div>{children}</div>
    </div>
  );
};
