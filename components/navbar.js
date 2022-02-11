import Link from "next/link";
import NavbarLogo from "./navbarlogo"
import { motion } from "framer-motion"

const Navbar = () => {

    const navParentVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.4, when: "beforeChildren", staggerChildren: 0.2 } }
    }

    const navLinkVariants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    }

    return (
        <motion.nav className="global-nav nav" variants={navParentVariants} initial="initial" animate="animate">
            <NavbarLogo />
            <motion.div className="nav__line" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.5 }} style={{ originX: 0 }}></motion.div>
            <ul className="nav__links-list">
                <Link href='/'><motion.li className="nav__home" variants={navLinkVariants}><a className="nav__link">HOME</a></motion.li></Link>
                <Link href='/projects'><motion.li variants={navLinkVariants}><a className="nav__link">PROJECTS</a></motion.li></Link>
                <Link href='/services'><motion.li variants={navLinkVariants}><a className="nav__link">SERVICES</a></motion.li></Link>
            </ul>
        </motion.nav >
    );
}

export default Navbar;