import React from 'react'

const SingleInvoice = ({targetData}) => {
    return (
        <div style={{display:'flex', justifyContent: "center", flexDirection:"column", alignItems:"center"}}>
            {targetData[0].name}<br />
            {targetData[0].number}<br />
            {targetData[0].amount}<br />
            {targetData[0].due}<br />
        </div>
    )
}

export async function getServerSideProps(context) {
    let res = await fetch(`http://localhost:3000/api/invoices`)
    let data = await res.json()
    let targetData = data.data.filter(item => item.number == context.params.id)

    return {props: {targetData}}
}

export default SingleInvoice;
