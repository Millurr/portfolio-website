import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <p><b>Email: </b>josh.miller@selu.edu | <b>Phone: </b>228-216-6215 </p> 
            <a style={{paddingRight: '5px'}} href="https://www.linkedin.com/in/josh-miller-2351b0201/" target="_blank"><FaLinkedin/></a>
            <a href="https://github.com/Millurr" target="_blank"><FaGithub/></a>
        </footer>
    )
}

export default Footer;