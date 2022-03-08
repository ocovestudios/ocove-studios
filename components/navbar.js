import Link from "next/link";
import NavbarLogo from "./navbarlogo"
import { motion } from "framer-motion"
import { useRouter } from "next/router";

const Navbar = () => {

    const router = useRouter();

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
                <Link href='/' passHref scroll={false}><motion.li className="nav__home" variants={navLinkVariants}><a className={`nav__link ${router.pathname === '/' ? 'nav__link-selected' : ''}`}>HOME</a></motion.li></Link>
                <Link href='/projects' passHref scroll={false}><motion.li variants={navLinkVariants}><a className={`nav__link ${router.pathname === '/projects' ? 'nav__link-selected' : ''}`}>PROJECTS</a></motion.li></Link>
                <Link href='/services' passHref scroll={false}><motion.li variants={navLinkVariants}><a className={`nav__link ${router.pathname === '/services' ? 'nav__link-selected' : ''}`}>SERVICES</a></motion.li></Link>
            </ul>
        </motion.nav >
    );
}

export default Navbar;