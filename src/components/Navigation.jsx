import React from "react";
import DropdownLink from "./DropdownLink";

export default function Navigation() {
  return (
    <nav class="navbar navbar-light bg-light justify-content-between">
      <a class="navbar-brand">Navbar</a>
      <form class="form-inline">
        <DropdownLink />
      </form>
    </nav>
  );
}
