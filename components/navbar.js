import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="global-nav nav">
            <Link href='/'><div>Logo</div></Link>
            <ul className="nav--links--list">
                <Link href='/'><li><a className="nav--link nav--link-home">HOME</a></li></Link>
                <Link href='/projects'><li><a className="nav--link">PROJECTS</a></li></Link>
                <Link href='/services'><li><a className="nav--link">SERVICES</a></li></Link>
            </ul>
        </nav>
    );
}

export default Navbar;