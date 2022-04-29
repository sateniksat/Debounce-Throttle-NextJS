import Link from "next/link";
import React from "react";

const Invoices = ({ data }) => {
  return (
    <div>
      {data.data.map((item) => (
        <Link href={`/invoices/${item.number}`}>
          <a style={{ display: "block" }}>{item.name}</a>
        </Link>
      ))}
    </div>
  );
};

export default Invoices;

export async function getServerSideProps({ req, params }) {
  const res = await fetch("http://localhost:3000/api/invoices");
  const data = await res.json();
  return {
    props: { data },
  };
}
