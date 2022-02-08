import Link from "next/link";
<<<<<<< HEAD
import NavbarLogo from "../components/navbarlogo"
=======
import NavbarLogo from "./navbarlogo"
>>>>>>> 0e26f57b15aceaa647784569ecf4c6b24beea83c

const Navbar = () => {

    return (
        <nav className="global-nav nav">
<<<<<<< HEAD
            <Link href='/'><NavbarLogo /></Link>
=======
            <NavbarLogo />
>>>>>>> 0e26f57b15aceaa647784569ecf4c6b24beea83c
            <div className="nav__line"></div>
            <ul className="nav__links-list">
                <Link href='/'><li><a className="nav__link">HOME</a></li></Link>
                <Link href='/projects'><li><a className="nav__link">PROJECTS</a></li></Link>
                <Link href='/services'><li><a className="nav__link">SERVICES</a></li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;