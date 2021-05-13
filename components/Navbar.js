import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    const pathName = window.location.pathname;

    return (
        <nav>
            <div className="brand"><Link href={pathName == "/" ? "/about" : "/"}><a>Josh Miller</a></Link></div>
            <div className="links">
                <Link href="/"><a>Projects</a></Link>
                <Link href="/about"><a>About</a></Link>
            </div>
        </nav>
    )
}
