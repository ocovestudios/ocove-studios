import Link from "next/link";
import { motion } from 'framer-motion'

const CloseArrow = () => {
    return (
        <Link href='/projects' passHref>
            <motion.div className="close-arrow" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0, transition: { delay: 1, duration: .2 } }}>
                <svg width="32" height="27" viewBox="0 0 61 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="1.911" y1="28.8046" x2="31.6095" y2="58.5031" stroke="#292929" strokeWidth="4" />
                    <line x1="29.4882" y1="58.5031" x2="59.1867" y2="28.8046" stroke="#292929" strokeWidth="4" />
                </svg>
            </motion.div>
        </Link>
    )
}

export default CloseArrow;