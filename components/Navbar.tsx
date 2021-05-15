import React, {useEffect, useState} from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [pathName, setPathName] = useState('');

    useEffect(() => {
        setPathName(window.location.pathname === '/' ? '/about' : '/');
    }, [pathName]);

    const setPath = (value) => {
        setPathName(value);
    }

    return (
        <nav>
            <div className="brand"><Link href={pathName}><a onClick={() => setPath(pathName === '/' ? '/about' : '/')}>Josh Miller</a></Link></div>
            <div className="links">
                <Link href="/"><a>Projects</a></Link>
                <Link href="/about"><a>About</a></Link>
            </div>
        </nav>
    )
}

export default Navbar;