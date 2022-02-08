import Link from "next/link";
import NavbarLogo from "./navbarlogo"

const Navbar = () => {
    return (
        <nav className="global-nav nav">
            <NavbarLogo />
            <div className="nav__line"></div>
            <ul className="nav__links-list">
                <Link href='/'><li className="nav__home"><a className="nav__link">HOME</a></li></Link>
                <Link href='/projects'><li><a className="nav__link">PROJECTS</a></li></Link>
                <Link href='/services'><li><a className="nav__link">SERVICES</a></li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;