import React from 'react'
import Link from "next/link";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/">
                        <a className='m-auto p-5 underline'>Garedan - Next.js Lite + Simple Movie Catalog</a>
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