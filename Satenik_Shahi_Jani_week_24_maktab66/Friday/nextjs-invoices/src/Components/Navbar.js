import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div style={{marginBottom: "30px"}}>
            <h1>MyApp</h1>
            <div style={{display: 'flex', justifyContent: "space-around"}}>
                <Link href={"/"}>
                    <a>Home</a>
                </Link>
                <Link href={"/login"}>
                    <a>Login</a>
                </Link>
                <Link href={"/invoices"}>
                    <a>Invoices</a>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
