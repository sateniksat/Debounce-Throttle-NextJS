import React from 'react'
import Link from 'next/link';

const invoices = ({targetData}) => {

    return (
        <div style={{display:'flex', justifyContent: "center", flexDirection:"column", alignItems:"center"}}>
            {targetData.map(inv => {
                return (
                    <Link href={`/invoices/${Number(inv.number)}`}>
                        <a style={{display: "block"}}>{inv.name}</a>
                    </Link>
                )
            })}
        </div>
    )
}


export async function getServerSideProps(context) {
    let res = await fetch(`http://localhost:3000/api/invoices`)
    let data = await res.json()
    let targetData = data.data
  
    return { props: {targetData} }
}

export default invoices;
