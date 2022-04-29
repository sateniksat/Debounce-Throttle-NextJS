import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <div style={{ backgroundColor: "pink", padding: "12px", color: "blue" }}>
      <h1>Welcome</h1>
      <Link href="/user/login">
        <a>Login</a>
      </Link>
      <br />
      <Link href="/">
        <a>home</a>
      </Link>
      <br />
      <Link href="/invoices">
        <a>list of invoices</a>
      </Link>
    </div>
  );
};

export default Navbar;
