import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';

const Navbar = () => {

    return (
        <nav>
            <div className="brand">Josh Miller <a href="mailto: josh.miller@selu.edu" target="_blank"><FaEnvelope /></a><a href="tel:228-216-6215"><FaPhone /></a>
                <a href="https://www.linkedin.com/in/josh-miller-2351b0201/" target="_blank"><FaLinkedin/></a>
                <a href="https://github.com/Millurr" target="_blank"><FaGithub/></a>
            </div>
            <div className="links">
                <Link href="/"><a>Projects</a></Link>
                <Link href="/about"><a>About</a></Link>
            </div>
        </nav>
    )
}

export default Navbar;