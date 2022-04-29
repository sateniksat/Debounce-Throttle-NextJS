import React from "react";
const showDetail = ({ targetData }) => {
  return (
    <>
      <div>{targetData[0].name}</div>
      <div>{targetData[0].number}</div>
      <div>{targetData[0].amount}</div>
      <div>{targetData[0].due}</div>
    </>
  );
};

export default showDetail;

export async function getServerSideProps({ req, params }) {
  const res = await fetch("http://localhost:3000/api/invoices");
  const data = await res.json();
  const targetData = data.data.filter(
    (invoic) => parseInt(invoic.number) === parseInt(params.id)
  );
  console.log(targetData);
  return { props: { targetData } };
}
