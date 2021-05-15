import Link from 'next/link';

const Navbar = () => {

    return (
        <nav>
            <div className="brand">Josh Miller</div>
            <div className="links">
                <Link href="/"><a>Projects</a></Link>
                <Link href="/about"><a>About</a></Link>
            </div>
        </nav>
    )
}

export default Navbar;