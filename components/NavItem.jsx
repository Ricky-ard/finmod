import React from "react";

export default function NavItem({ children }) {
  return (
    <>
      <li>
        <a className="font-semibold text-base text-slate-900">{children}</a>
      </li>
    </>
  );
}
