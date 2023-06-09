import React from 'react'
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a className='m-auto p-5 underline'>2023-{process.env.myCustomEnvironment}</a>
                    </Link>
                </li>
                {/* <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
                </li> */}
            </ul>
        </nav>
    )
}